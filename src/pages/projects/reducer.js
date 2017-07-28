import Reducer from '../../futils/reducecreator'
import initialState from './initialstate'

const ACTION_HANDLERS = {
  FILTER: (s, a) => Object.assign({}, s, {
    filteredArray: s.projectsArray.filter(project => {
      console.log(project.tech[0].name.search(a.filter) > -1)
      return project.tech[0].name.search(a.filter) > -1
    }),
    currentFilter: a.filter
  }),
  ALL: (s) => Object.assign({}, s, {
    filteredArray: s.projectsArray,
    currentFilter: 'all'
  })
}

export default Reducer(initialState, ACTION_HANDLERS)
