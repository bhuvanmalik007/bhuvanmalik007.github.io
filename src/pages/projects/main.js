import React from 'react'
import PropTypes from 'prop-types'

const Projects = () => (
  <div>
    PROJECTS
  </div>
)

Projects.propTypes = {
  auth: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  updateUsername: PropTypes.func,
  updatePassword: PropTypes.func,
  authenticate: PropTypes.func,
  authenticated: PropTypes.bool
}

export default Projects
