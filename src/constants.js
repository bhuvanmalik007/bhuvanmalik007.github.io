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
  name: 'Dauble',
  img: dauble,
  tech: ['Node'],
  description: `o manage their business efficiently, with a social network connecting all parties.`
}, {
  name: 'Dauble',
  img: dauble,
  tech: ['Node'],
  description: `Daub efficiently, with a social network connecting all parties.`
}]
