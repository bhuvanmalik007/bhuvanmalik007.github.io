import react from './static/react.png'
import angular from './static/angular.svg'
import redux from './static/redux.png'
import node from './static/node.png'
import express from './static/express.png'
import socketio from './static/socketio.png'
import android from './static/android.png'
import rx from './static/rx.png'
import mongo from './static/mongo.png'
import elixir from './static/elixir.png'
import next from './static/next.png'
import phoenix from './static/phoenix.png'
import electron from './static/electron.png'
import oracle from './static/oracle.png'

export const projectsStore = [{
  name: 'Waste.AI ML Back-End',
  tech: [{ name: 'Machine Learning', color: 'black' }, { name: 'Python', color: 'yellow' },
  { name: 'TensorFlow', color:'orange' }],
  description: `Worked on the Waste.AI project, a software product that can maximize
   efficiency in material sorting in construction and demolition landfills and recycling centers.
   Developed a Machine Learning image classifier to evaluate accuracy
   for classification of waste materials (e.g., construction waste, demolition waste,
     renovation waste) and possibly other materials (e.g., household waste). The accuracy was 73%.
   The Python scripts and Electron app interact with each other and the storage system
    where all the images, the metadata of the images and the model are stored.`
}, {
  name: 'Waste.AI Front-End',
  tech: [{ name: 'Electron', color: 'grey' }],
  description: `Developed an Electron app that allows the user to input images and
   manually identify hazardous debris to train the system’s algorithms. After training,
    the user can subsequently input images to allow the software to perform the analysis and
     show graph-based results. The app interacts with the Python scripts and storage system
    where all the images, the metadata of the images and the model are stored.`
}, {
  name: 'VocabDB',
  img: `https://firebasestorage.googleapis.com/v0/b/images-82197.appspot.com/o/vocabdb.png?` +
  `alt=media&token=4b57b16d-3d3f-4fa2-95ac-017848117810`,
  tech: [{ name: 'React', color:'teal' }, { name: 'Redux', color:'violet' }],
  description: `A complete solution for building vocabulary through flashcards based learning. Features include
  storage, sorting, organization, tests, segregation into lists of flashcards etc. Powered by Oxford Dictionaries.`,
  github: 'https://github.com/bhuvanmalik007/vocabdb',
  link: 'http://vocabdb.org'
}, {
  name: 'Olympic History Analysis',
  tech: [{ name: 'Node', color:'olive' }, { name: 'Oracle Db', color:'red' }],
  description: `This full-stack web application stores and manages 250k records of Olympic Data
   and provides an interface to users to search through the data using various filters,
    view the trends, and analyze the change in data over the years. The app also provides
     users with new insights and trends. All this is done through different visual aids
      like graphs and charts like bar graphs, pie charts, heat maps, etc.`,
  github: 'https://github.com/bhuvanmalik007/olympic-history-API'
}, {
  name: 'Dauble Collector',
  img: `https://firebasestorage.googleapis.com/v0/b/images-82197.appspot.com/o/dauble.png?` +
  `alt=media&token=2a8e1037-6073-41b0-87eb-b8398575819b`,
  clickable: true,
  tech: [{ name: 'Angular JS', color:'red' }],
  description: `Dauble is an Art platform that allows Collectors to manage their Art Collection privately,
    and Galleries and Artists to manage their business efficiently, with a social network
     connecting all parties. Unfortunately, the Dauble products have been taken down by the start-up.`,
  link: 'https://www.youtube.com/watch?v=QKRz1JaiTN8&t=18s'
}, {
  name: 'Dauble Business',
  img: `https://firebasestorage.googleapis.com/v0/b/images-82197.appspot.com/o/business.png?` +
  `alt=media&token=ed9a0f05-24d8-43a2-a035-75f4cfbd3123`,
  clickable: true,
  tech: [{ name: 'Angular JS', color:'red' }],
  description: `Dauble Business allows Art Businesses like Galleries, Artists, Museum Curators to manage their
  artwork inventory, organising Art Events, getting insights and sharing inventory with art collectors really easy.
   Unfortunately, the Dauble products have been taken down by the start-up.`,
  link: 'https://www.youtube.com/watch?v=vGXkPm_FhwU'
}, {
  name: 'Dauble Admin',
  tech: [{ name: 'Angular JS', color:'red' }],
  description: `Dauble Admin helps in the Data Administration of Dauble, using role­-based Authentication by
  exposing capabilities like Featuring/Unfeaturing, Adding/Deleting/Modifying, Artworks, Artists, Galleries,
  Events and Museums, Blocking/Unblocking Users, and other activities related to management of Artwork Data on Dauble.`
}, {
  name: 'PipeTrak-GEOUI',
  tech: [{ name: 'React', color:'teal' }, { name: 'Redux', color:'violet' }],
  description: `Pipetrak GEOUI is a Real Time Geographical Information System Web Application helping Pipeline
  Engineers to track construction of Pipeline along various geographies. Users can query Map for various stages of
  construction and locations, along with rich details of a Geolocation.`
}, {
  name: 'Collabpad',
  img: `https://firebasestorage.googleapis.com/v0/b/images-82197.appspot.com/o/collabpad.png?` +
  `alt=media&token=8e2f332e-5f8a-4d38-8054-3312f28eda53`,
  tech: [{ name: 'Vue JS', color:'green' }, { name: 'socket.io', color:'black' }],
  description: `⚡️Real-Time collaborative text sharing notepad with Bitcoin integration. User can also save notepad
  contents as a text file
  to resume editing later.`,
  github: 'https://github.com/bhuvanmalik007/COLLABPAD-FRONT',
  link: 'https://collabpad007.herokuapp.com'
}, {
  name: 'Bitcoin-Blockchain Implementation',
  tech: [{ name: 'Elixir', color:'purple' }],
  description: `💰Customisable Bitcoin-Blockchain ecosystem in Elixir/GenServer. Includes
  blockchain, crypto wallets, miners and simulation of transactions.`,
  github: 'https://github.com/bhuvanmalik007/bitcoin'
}, {
  name: 'Gossip-PushSum Implementation',
  tech: [{ name: 'Elixir', color:'purple' }],
  description: `Determines the convergence of Gossip type algorithms through a simulator based on
  actors written in Elixir. Full, Line, Torus, random 2D, 3D and Imperfect 2D topologies were
  implemented for both Push Sum and Gossip algorithms.`,
  github: 'https://github.com/bhuvanmalik007/gossip-and-pushsum-algorithm'
}, {
  name: 'Sum of Consecutive Squares',
  tech: [{ name: 'Elixir', color:'purple' }],
  description: `Finds consecutive squares equal to a square given the range of consecutive numbers
  and limit by distribution of work among actors in Elixir and message passing.`,
  github: 'https://github.com/bhuvanmalik007/sum-of-consec-squares'
}, {
  name: 'Collabpad-API',
  tech: [{ name: 'Node', color:'olive' }, { name: 'socket.io', color:'black' }],
  description: `API for Collabpad, uses Socket.io for real-time collaboration.
  Also includes server side Bitcoin integration for donation.`,
  github: 'https://github.com/bhuvanmalik007/COLLABPAD-BITCOIN'
}, {
  name: 'Fibonacci Heap Keyword Counter',
  tech: [{ name: 'Cpp', color:'pink' }],
  description: `Finds the ’n’ most popular keywords used in a search engine using a max fibonacci
  heap and a hash table.`,
  github: 'https://github.com/bhuvanmalik007/fibonacci-heap-keywordcounter'
}, {
  name: 'Virtualized Virtual DOM',
  tech: [{ name: 'React', color:'teal' }, { name: 'Redux', color:'violet' }],
  description: `This project is a virtualized DOM in React which implements a masonry
  in which only the visible elements are rendered and the rest are fetched back as
  the user scrolls, thereby increasing efficiency and reducing load on the DOM. Includes
  infinite scroll with API calls and window resize support.`,
  github: 'https://github.com/bhuvanmalik007/virtualized-virtual-dom'
}, {
  name: 'Alphabet Game',
  tech: [{ name: 'Electron', color: 'grey' }, { name: 'React', color:'teal' }],
  description: `This is a fun game for children to drag and drop phonetics and letters and
  create words out of them. Uses Prettier + ESLint + Airbnb Style Guide for code formatting
  and maintainable code style. React Hooks for state management without classes and managing
  component lifecycle. A single Higher Order Component for all the draggable elements. Hot
  Reloading with Webpack Dev server and React Hot Loader. Flexbox is used for styling.`,
  github: 'https://github.com/bhuvanmalik007/Alphabet-Game'
}, {
  name: 'Battleship Game 💣',
  tech: [{ name: 'Vanilla JS', color: 'yellow' }],
  description: `This is an implementation of the game Battleship using Vanilla JS,
  HTML and CSS where the user can play against a computer. DOM is generated using pure functions(domCreator.js).`,
  github: 'https://github.com/bhuvanmalik007/battleship'
}, {
  name: 'Time-Machine',
  img: `https://firebasestorage.googleapis.com/v0/b/images-82197.appspot.com/o/timemachine.png?` +
  `alt=media&token=76b3eab7-687d-49d6-9760-3c92474eec51`,
  tech: [{ name: 'React', color:'teal' }],
  description: `🕰 A simple tool to Transpile JavaScript ES6 code to ES5.`,
  github: 'https://github.com/bhuvanmalik007/time-machine',
  link: 'https://bhuvanmalik007.github.io/time-machine/'
}, {
  name: 'Sentiment Analysis',
  tech: [{ name: 'Node', color:'olive' }],
  description: `Used  to provide a score based on user sentiment analysis through single/multiple comments.`,
  github: 'https://github.com/bhuvanmalik007/sentiment-analysis'
}, {
  name: 'Gipht',
  img: `https://firebasestorage.googleapis.com/v0/b/images-82197.appspot.com/o/gipht.png?` +
  `alt=media&token=303e43e0-463c-4114-8438-d79096673014`,
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
  name: 'Mission-Admission',
  img: `https://firebasestorage.googleapis.com/v0/b/images-82197.appspot.com/o/missionadmission.png?` +
  `alt=media&token=1d17d706-4e3b-46ef-91eb-832b59e27209`,
  tech: [{ name: 'React', color:'teal' }, { name: 'Redux', color:'violet' }],
  description: `The idea behind VocabDB, inspired by my GRE prep.`,
  link: 'http://mission-admission.surge.sh',
  github: 'https://github.com/bhuvanmalik007/vocabdb-prototype'
}, {
  name: 'Quote-Unquote',
  img: `https://firebasestorage.googleapis.com/v0/b/images-82197.appspot.com/o/quoteunquote.png?` +
  `alt=media&token=d7d35bbc-3ca0-4742-9dbc-4591eabe0ae2`,
  tech: [{ name: 'Vue JS', color:'green' }],
  description: `Front-End for displaying Game of Thrones Quotes scraped from imdb.com.`,
  github: 'https://github.com/bhuvanmalik007/quote-unquote-frontend',
  link: 'http://bhuvanmalik007.github.io/quote-unquote-frontend'
}, {
  name: 'Portfolio',
  tech: [{ name: 'React', color:'teal' }, { name: 'Redux', color: 'violet' }],
  description: `Well... 😅`,
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
  github: 'https://github.com/bhuvanmalik007/lamborghini-wallpapers'
}]

export const skillSet = [{
  name: 'React',
  description: 'Component Based Designs',
  img: react
}, {
  name: 'Redux',
  description: 'Immutable State Management',
  img: redux
}, {
  name: 'Angular JS',
  description: 'Frontend Development',
  img: angular
}, {
  name: 'Node JS',
  description: 'Backend Development',
  img: node
}, {
  name: 'Next.js',
  description: 'Rest APIs',
  img: next
}, {
  name: 'Express',
  description: 'Rest APIs',
  img: express
}, {
  name: 'Electron',
  description: 'Cross-platform desktop apps',
  img: electron
}, {
  name: 'Elixir',
  description: 'Elixir actor modelling, message passing and state management using GenServer',
  img: elixir
}, {
  name: 'Phoenix',
  description: 'Elixir based low-latency, fault-tolerant web framework',
  img: phoenix
}, {
  name: 'Socket IO',
  description: 'Real-time event based communication',
  img: socketio
}, {
  name: 'Oracle Db',
  description: 'RDBMS',
  img: oracle
}, {
  name: 'RxJS',
  description: 'Frontend Development - Redux Side-effects using Observables',
  img: rx
}, {
  name: 'Android',
  description: 'Android Application Development with Java',
  img: android
}, {
  name: 'Mongo DB',
  description: 'Backend Development - Document Based Database',
  img: mongo
}]
