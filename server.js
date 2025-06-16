import express from 'express'
import { Liquid } from 'liquidjs';

const app = express()

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())

app.set('views', './views')

// messages table uit oudere sprint waar ik naartoe post
const MESSAGES_URL = 'https://fdnd.directus.app/items/messages'

// MARK: GET ROUTE

// moet images an de huizen nog inladen want die staan in een andere table.

// Route om data van een specifiek huis op te halen 
app.get('/house/:id', async (req, res) => {
  const houseId = req.params.id

  // Fetch de data van het huis en geef het mee aan de URL
  // dit zou dus nog naar ene andere url aangepast kunnen worden als we die nog krijgen voor de likes.
  const housesRes = await fetch(`https://fdnd-agency.directus.app/items/f_houses?fields=*.*&filter={"id":{"_eq":${houseId}}}`)
  const housesJson = await housesRes.json()
  // checked of het huis gevonden wordt. zo niet dan error
  if (!housesJson.data || housesJson.data.length === 0) {
    return res.status(404).send('House not found')
  }
  // zo wel return dan de json van het huis
  const house = housesJson.data[0]

  // checked over er likes staan voor dit huis
  // checked of de like bestaat. filtert op 2 dingen. fetched alleen de messages met de house substring met het id. en de $ wordt vervangen door de daadwerkelijk house id in js.
  const likesRes = await fetch(`${MESSAGES_URL}?filter={"from":{"_eq":"like"},"text":{"_contains":"house ${houseId}"}}`)
  const likesJson = await likesRes.json()
  // is liked als er minimaal 1 bericht gevonden is.
  const liked = likesJson.data.length > 0

  // render de pagina en geef de data van het huis mee aan de liquid template.
  res.render('index.liquid', { house, liked })
})


// MARK: POST ROUTE

// Route om like op te slaan
app.post('/house/:id/like', async (req, res) => {
  const houseId = req.params.id

//  checked eerst of er al een like bestaat voor het huis
// filtert dan weer
  const likeCheckRes = await fetch(`${MESSAGES_URL}?filter={"from":{"_eq":"like"},"text":{"_contains":"house ${houseId}"}}`)
  const likeCheckJson = await likeCheckRes.json()
  // zorgt ervoor dat het altijd een array is ook al is die leeg.
  const existingLikes = likeCheckJson.data || []

  if (existingLikes.length > 0) {
    // Als er al een like is verwijder deze
    const likeId = existingLikes[0].id
    await fetch(`${MESSAGES_URL}/${likeId}`, { method: 'DELETE' })
  } 
  else {
   // Als er nog geen like is maak een nieuwe like aan.
    await fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // geeft aan dat dit bericht een like is.
        from: 'like',
        // tekst met huis-id om te kijken welke like bij welk huis hoort.
        text: `liked house ${houseId}`
      })
    })
  }

  // na toggle redirect terug naar de pagina. zou hier nog iets kunnen doen met preventdefault & partial page reloads.
  res.redirect(303, `/house/${houseId}`)
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\n`)
})


console.log('-__-')


// MARK: OUDE CODE

// app.get('/house/:id', async function (request, response) {

//   // directus data van vorig jaar van Krijn
//   const housesURL = 'https://fdnd-agency.directus.app/items/f_houses';
//   const housesResponse = await fetch(housesURL);
//   const housesJSON = await housesResponse.json();

//   const house = housesJSON.data[0];
//   // lokale json als ik die nog wil gaan gebruiken
//   // const data = require('/listing.json');
//    response.render('index.liquid', { housesResponse: house });
// });



// app.post('/house/:id/like', async function (request, response) {

//   const likesURL = 'fdnd.directus.app/items/messages';
//   const likesResponse = await fetch(likesURL);
//   const likesJSON = await likesResponse.json();

//   const like = likesJSON.data[0];

//    response.render('index.liquid', { likesResponse: like });
// });


