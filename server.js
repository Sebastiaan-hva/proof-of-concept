import express from 'express'
import { Liquid } from 'liquidjs';

const app = express()

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())

app.set('views', './views')


app.get('/house/:id', async function (request, response) {

  // directus data van vorig jaar van Krijn
  const housesURL = 'https://fdnd-agency.directus.app/items/f_houses';
  const housesResponse = await fetch(housesURL);
  const housesJSON = await housesResponse.json();

  const house = housesJSON.data[0];
  // lokale json als ik die nog wil gaan gebruiken
  // const data = require('/listing.json');
   response.render('index.liquid', { housesResponse: house });
});


app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\n`)
})


console.log('-__-')
