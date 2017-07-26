import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import Box from 'grommet/components/Box'
// import Anchor from 'grommet/components/Anchor'
// import texture from '../../static/texture.png'
import GunmetalHeading from '../../components/gunmetalheading'
import texture from '../../static/texture.png'

const Projects = () => (
  <Box direction='column' full justify='start' align='center'>
    <Box direction='row' full='horizontal' texture={texture} justify='start' appCentered
      pad={{ horizontal:'large', vertical:'medium' }}>
      <GunmetalHeading size='large' align='center' strong>PROJECTS</GunmetalHeading>
    </Box>
  </Box>
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
