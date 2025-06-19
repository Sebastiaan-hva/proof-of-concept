# The Funda listing detail page

<img src="https://github.com/user-attachments/assets/facf33cb-832f-4edb-aade-5c35b5c4af85" height=700>



## Design challenge

Design challenge
In deze sprint van 3 weken pas ik alles toe wat ik heb geleerd uit jaar 1 om de nieuwe Listing Detail Page (LDP) te bouwen. 
Funda is bezig met een rebranding en maakt kleine wijzigingen in het huidige ontwerp om het product een modernere uitstraling te geven.

Ga naar https://www.funda.nl/koop/heel-nederland/

Klik op een willekeurige woning.

Dit is de Listing Detail Page. De opdracht is om deze pagina vanaf nul op te bouwen met HTM, CSS & JavaScript.

Ik gebruik voor de content de data die door school in directus gezet is.


### Eisen vanuit Funda
Je implementeert het ontwerp zoals aangegeven in het Figma-bestand.
De pagina moet responsive zijn met een mobile-first aanpak. Er moeten minimaal 3 breakpoints zijn: mobiel, tablet en desktop.
Zorg voor goede toegankelijkheid door gebruik te maken van semantische HTML-tags en toegankelijke attributen voor je elementen.
De elementen op deze pagina hoeven niet interactief te zijn. Het doel van deze opdracht is het bouwen van een layout.
Gebruik geen frameworks. Alleen pure HTML en CSS! Je mag JavaScript gebruiken als het echt nodig is, maar in principe zou je het zonder moeten kunnen.

#### Ik heb gewerkt met een project board met de MoSCoW methode om issue's te labelen om dit aan te pakken en de DLC te doorlopen.

<details><summary>ProjectBoard</summary>
<img src="https://github.com/user-attachments/assets/64df2244-57a1-4ef7-ae7f-4003feaa9657" width=1200>

</details>

## Ontwerpkeuzes

Ik heb grootendeels het design gevolgt van de figma file. Daarin stonden nog geen interacties geprototyped die wel op de live site staan. Dus daar heb ik een beetje mijn ontwerp voor gemaakt.
Voor de elementen die nog niet in het design zaten zoals de buttons onderaan de carousel heb ik de kleuren van de figma brand site gepakt.

![image](https://github.com/user-attachments/assets/c6cec880-2b74-434e-ab7e-9dc2709cfc2b)


De mobile menu is ook wat anders bij mijn versie. 
De live versie neemt het menu de hele viewport in en op mijn versie valt die onder de header en kan je de rest van de header nog gebruiken en de content eronder zien.

<details><summary>live versie funda:</summary>
<img src="https://github.com/user-attachments/assets/86f3b1c5-d957-47f2-aa7a-4b98ce793380" width=250>
</details>

<details><summary>mijn menu:</summary>
<img src="https://github.com/user-attachments/assets/c190d48e-00bb-487f-89c1-7386cfcbee78" width=250>
</details> 

## Gebruik


https://github.com/user-attachments/assets/ced66479-ea3a-41e2-aeb8-b7aad2507fce


#### Als gebruiker kan je pagina's van verschillende huizen bekijken.
- Op de pagina het huis kan je de straat & huis nummer, postcode, stad, woonoppervlak, oppervlak tuin, aantal kamers en een omschrijving vinden.
- De foto's van het huis bekijken d.m.v. een carousel
- Je kan een huis liken. 
- Op mobile een menu openen. 



## Code conventies

### Algemeen

- Ik gebruik altijd een vaste structuur van de opzet van mijn directory's.

![image](https://github.com/user-attachments/assets/361ed3b3-61c5-4893-89e0-d012f3595279)
- vanuit server.js wordt er voor alle statisch files genavigeerd vanaf de public folder. Daarin heb ik een assets folder, CSS folder & JS folder.
- Alle assets en fonts staan in die de asset folder.
- de server.js staat in de root directory.
- Ik probeer nu ook in html/css/js // MARK: te gebruiken om m'n code meer navigeerbaar te maken
- Tabs zijn 4 spaties (default)
- ik test mijn werk nog met de lighthouse test / WCAG tests en probeer daarmee m'n code te verbeteren.
  
### Code conventies - Naamgeving

- Al mijn classnames zijn in het engels. (comments schrijf ik wel in het nederlands voor school maar anders ook in het engels)
- Ik probeer bij een classanme descriptive te zijn over het element en de functie en niet over de content binnenin het element. 
https://github.com/Sebastiaan-hva/proof-of-concept/blob/57d8a70299eb931ba743725d5bcdda0eb094a21b/public/css/index.css#L93
- CSS gebruik ik altijd kleine letters met - ertussen; (kebab-case) Vaak gebruik ik ook geen classes omdat ik toch css bestanden per view/route inlaadt dus dan kan ik het element zelf stylen.
- JS gebruik ik camelCase

### Code conventies - HTML

- Ik heb alle views van de routes in een views map staan en daarin folders voor de layout.liquid en de partials.
- ![image](https://github.com/user-attachments/assets/9e8056d8-c481-4f30-af6d-952686bf1bb8)

- Ik heb bijvoorbeeld altijd head en de foot in een partial staan.
- En de header staat bij mijn pagina ook in een partial. 
- Ik gebruik een layout.liquid zodat ik per pagina makkeljk kan zeggen welke css ik aanlaad omdat het block zelf pas sluit op de view zelf.
- Ik gebruik ook tabs bij elke laag dat iets in een element genest is.
- ![image](https://github.com/user-attachments/assets/bdc396b6-bcab-4950-a1d1-91efba930cec)

- Tussen losstaande elementen / sections laat ik witruimte.

### Code conventies - CSS
- Ik gebruik binnenin een selector geen enter's tussen subselectors.
- In principe matched de volgorde van de css elementen van m'n html de volgorde van de css selectors in het css bestand. (als het kan)
- Ik leg alleen dingen uit die voor mijzelf complex zijn anders heb ik geen comments nodig.
- Ik laat alleen witruimte tussen selectors die helemaal gesloten zijn.
- Ik zet elke property op een aparte regel.
- ![image](https://github.com/user-attachments/assets/d78de234-5d9a-42d5-91e7-b9dee9a616af)

- Over spaties tussen property's en values ben ik indifferent.
- Media queries nesten doe ik vaak niet want in sommige gevallen werkt het niet en vaak levert het meer code op omdat ik heel veel selectors in mediaqueries heb staan.

### Code conventies - JS
- Hier probeer ik het wel met comments uit te leggen als ik iets nieuws doe/uitprobeer of als het complex is en ik denk dat ik later nog nodig ga hebben.
- De routes probeer ik een logische naam te geven.
- Ik zet de post van een route direct onder de get.



## Responsive Design / Code


### CSS-Carousel
Hiervoor heb ik insparatie gedaan van de css workshop van Sanne om dit te maken ipv de mediaviewer van de live versie. 

### Header
Zie issue header: (https://github.com/users/Sebastiaan-hva/projects/7/views/1?pane=issue&itemId=113628984&issue=Sebastiaan-hva%7Cproof-of-concept%7C5)

## Server-Side Scripting

### Route
Uitleg in comments:

https://github.com/Sebastiaan-hva/proof-of-concept/blob/4b826675014fda5432cac3e1f956f7095681a213/server.js#L18-L46

### Post
Uitleg in comments:

https://github.com/Sebastiaan-hva/proof-of-concept/blob/4b826675014fda5432cac3e1f956f7095681a213/server.js#L15-L16
https://github.com/Sebastiaan-hva/proof-of-concept/blob/4b826675014fda5432cac3e1f956f7095681a213/server.js#L49-L83

## Installatie

### 1. Installeer Node.js

Download en installeer de nieuwste versie van Node.js via:  
[https://nodejs.org/en](https://nodejs.org/en)

### 2. Fork & Clone de repository

- Fork deze repository naar je eigen GitHub-account.
- Clone jouw fork naar je computer:

### 3. open de repo & install
- Open de repo met een code editor met een terminal.
- install de repo met `npm install` in de terminal

### 4. run de repo
- Start de server met `npm start` in de terminal
- je krijgt een link van de route in je terminal.
  
## Bronnen
 * [Figma](https://www.figma.com/design/ZV3q9GITY3nRVlvbRPhRtd/Listing-Detail-Page?node-id=0-1&t=5iAdwvexTyLnu5tm-1)
 * Funda brand guide [here](https://brand.funda.nl/).
