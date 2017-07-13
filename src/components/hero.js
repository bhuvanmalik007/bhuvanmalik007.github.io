import React from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import styled from 'styled-components'
import Card from 'grommet/components/Card'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Title from 'grommet/components/Title'
import dp from '../static/dp.jpg'

const Hero = () => (
  <Box full='horizontal' direction='row' justify='center' pad='large' >
    <Box size='large' margin='small'>
      <Image src={dp} size='medium' />
    </Box>
    <Box colorIndex='grey-2-a' direction='column' justify='between' textAlign='left'
      pad={{ horizontal:'medium', vertical:'small' }} size='medium'>
      <Title align='left' size='small'>Hello World!</Title>
      <Paragraph size='large' margin='small'>
        I'm Bhuvan Malik! I'm a Web Developer currently working at Dauble.
      </Paragraph>
      <Paragraph size='large' margin='small'>
        I ♥️ JavaScript and I'm skilled in creating Web Applications based on React-Redux, AngularJS and Node.
      </Paragraph>
      <Paragraph size='large' margin='small'>
        In my spare time, I play badminton and watch football and tennis.
      </Paragraph>
    </Box>
  </Box>
)

Hero.propTypes = {
  auth: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  updateUsername: PropTypes.func,
  updatePassword: PropTypes.func,
  authenticate: PropTypes.func,
  authenticated: PropTypes.bool
}

export default Hero
