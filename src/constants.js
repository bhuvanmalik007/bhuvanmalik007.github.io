import dauble from './static/dauble.png'
import business from './static/business.png'

export const projectsStore = [{
  name: 'Dauble Collector',
  img: `https://firebasestorage.googleapis.com/v0/b/images-82197.appspot.com/o/dauble.png?` +
  `alt=media&token=2a8e1037-6073-41b0-87eb-b8398575819b`,
  clickable: true,
  tech: [{ name: 'Angular JS', color:'red' }],
  description: `Dauble is an Art platform that allows Collectors to manage their Art Collection privately,
    and Galleries and Artists to manage their business efficiently, with a social network connecting all parties.`,
  link: 'http://dauble.com/home'
}, {
  name: 'Dauble Business',
  img: business,
  clickable: true,
  tech: [{ name: 'Angular JS', color:'red' }],
  description: `Dauble Business allows Art Businesses like Galleries, Artists, Museum Curators to manage their
  artwork inventory, organising Art Events, getting insights and sharing inventory with art collectors really easy.`,
  link: 'http://business.dauble.com'
}, {
  name: 'Dauble Admin',
  tech: [{ name: 'Angular JS', color:'red' }],
  description: `Dauble Admin helps in the Data Administration of Dauble, using role­based Authentication by
  exposing capabilities like Featuring/Unfeaturing, Adding/Deleting/Modifying, Artworks, Artists, Galleries,
  Events and Museums, Blocking/Unblocking Users, and other activities related to management of Artwork Data on Dauble.`
}, {
  name: 'VocabDB',
  img: dauble,
  tech: [{ name: 'React', color:'teal' }, { name: 'Redux', color:'violet' }],
  description: `A complete solution for building vocabulary through flashcards based learning. Features include
  storage, sorting, organization, tests, segregation into lists of flashcards etc. Powered by Oxford Dictionaries.`,
  github: 'https://github.com/bhuvanmalik007/vocabdb'
}, {
  name: 'Collabpad',
  img: dauble,
  tech: [{ name: 'Vue JS', color:'green' }, { name: 'socket.io', color:'black' }],
  description: `⚡️Real-Time collaborative text sharing notepad with Bitcoin integration. User can also save notepad
  contents as a text file
  to resume editing later.`,
  github: 'https://github.com/bhuvanmalik007/COLLABPAD-FRONT',
  link: 'https://collabpad007.herokuapp.com'
}, {
  name: 'Time-Machine',
  img: dauble,
  tech: [{ name: 'React', color:'teal' }],
  description: `🕰 A simple tool to Transpile JavaScript ES6 code to ES5.`,
  github: 'https://github.com/bhuvanmalik007/time-machine',
  link: 'https://bhuvanmalik007.github.io/time-machine/'
}, {
  name: 'Sentiment Analysis',
  tech: [{ name: 'Node', color:'olive' }],
  description: `Used  to provide a score based on user sentiment analysis through single/multiple comments.`,
  github: 'https://github.com/bhuvanmalik007/time-machine'
}, {
  name: 'Collabpad-API',
  tech: [{ name: 'Node', color:'olive' }, { name: 'socket.io', color:'black' }],
  description: `API for Collabpad, uses Socket.io for real-time collaboration.
  Also includes server side Bitcoin integration for donation.`,
  github: 'https://github.com/bhuvanmalik007/time-machine'
}, {
  name: 'Gipht',
  img: dauble,
  tech: [{ name: 'React', color:'teal' }],
  description: `Gipht 🎁 is a web app for searching GIFs. Powered by Giphy API.`,
  github: 'https://github.com/bhuvanmalik007/gipht',
  link: 'https://bhuvanmalik007.github.io/gipht'
}, {
  name: 'Watch The Thrones API',
  tech: [{ name: 'Node', color:'olive' }, { name: 'MongoDB', color:'green' }],
  description: `REST API backing watch the thrones(a web app for downloading Game of Thrones episodes).
  Includes interaction with MongoDB for CRUD operations on episodes data and facilitates downloading of episode
  torrents using WebTorrent. Uses Express framework and follows MVC architecture`,
  github: 'https://github.com/bhuvanmalik007/Watch-The-Thrones-API'
}, {
  name: 'Quote-Unquote API',
  tech: [{ name: 'Node', color:'olive' }],
  description: `A webscraper scraping imdb.com for Game of Thrones quotes using Cheerio JS.`,
  github: 'https://github.com/bhuvanmalik007/quote-unquote'
}, {
  name: 'Quote-Unquote',
  img: dauble,
  tech: [{ name: 'Vue JS', color:'green' }],
  description: `Front-End for displaying Game of Thrones Quotes scraped from imdb.com.`,
  github: 'https://github.com/bhuvanmalik007/quote-unquote-frontend',
  link: 'http://bhuvanmalik007.github.io/quote-unquote-frontend'
}, {
  name: 'Portfolio',
  tech: [{ name: 'React', color:'teal' }, { name: 'Redux', color: 'violet' }],
  description: `Hi 👋`,
  github: 'https://github.com/bhuvanmalik007/bhuvanmalik'
}, {
  name: 'Indoor WPS',
  tech: [{ name: 'Android', color:'green' }],
  description: `Indoor Wifi positioning system to locate nearby Wifi access points, display signal strength,
  calculate distance between mobile and acces point and store GPS coordinates in SQLite DB.`,
  github: 'https://github.com/bhuvanmalik007/ADV-GPS'
}, {
  name: 'Track Your Tag-App',
  tech: [{ name: 'Android', color:'green' }],
  description: `App for asset tracking through QR-Code scanning and updating GPS location of the particular asset.`,
  github: 'https://github.com/bhuvanmalik007/trackyourtag-app'
}, {
  name: 'Track Your Tag-API',
  tech: [{ name: 'Node', color:'olive' }],
  description: `REST API following MVC architecture for storing all asset info in the Track Your Tag ecosystem
  including location using
  MongoDB and Express.`,
  github: 'https://github.com/bhuvanmalik007/trackyourtagserver'
}, {
  name: 'Lamborghini Wallpapers',
  tech: [{ name: 'Android', color:'green' }],
  description: `Wallpapers app to change and store the included Lamborghini wallpapers.`,
  github: 'https://github.com/bhuvanmalik007/trackyourtag-app'
}]
