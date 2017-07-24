import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../../components/hero'
import Skills from '../../components/skills'

const Home = () => (
  <div>
    <Hero />
    <Skills />
  </div>
)

Home.propTypes = {
  auth: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  updateUsername: PropTypes.func,
  updatePassword: PropTypes.func,
  authenticate: PropTypes.func,
  authenticated: PropTypes.bool
}

export default Home
