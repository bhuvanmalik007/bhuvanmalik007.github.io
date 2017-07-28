import { connect } from 'react-redux'
import { pick } from 'ramda' //eslint-disable-line
import Projects from './main'

const mapDispatchToProps = dispatch => ({
  filterProjects: (filter) => dispatch({ type: 'FILTER', filter }),
  allProjects: () => dispatch({ type: 'ALL' })
})

const mapStateToProps = state => ({
  ...pick(['filteredArray', 'currentFilter'], state.projects)
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
