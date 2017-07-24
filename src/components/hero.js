import React from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import styled from 'styled-components'
import Paragraph from 'grommet/components/Paragraph'
import Title from 'grommet/components/Title'
import dp from '../static/dp.jpg'
import Typist from 'react-typist'

const ImageFrame = styled(Box)`
  background: #AF7AC5;
`

const Hero = () => (
  <Box className='wallpaper' direction='row' justify='center' pad='large' >
    <ImageFrame size='medium' margin='small' pad='small' colorIndex='brand' align='center' >
      <Image src={dp} size='medium' />
    </ImageFrame>
    <Box direction='column' justify='between' textAlign='left'
      pad={{ horizontal:'medium', vertical:'small' }} size='medium'>
      <Typist cursor={{ show: false }} stdTypingDelay={1} avgTypingDelay={30}>
        <Title align='left' size='small'>Hello World!</Title>
        <Paragraph size='large' margin='small'>
          I'm Bhuvan Malik! I'm a Web Developer currently working at Dauble.
        </Paragraph>
        <Paragraph size='large' margin='small'>
          I love JavaScript and I'm skilled in creating Web Applications based on React-Redux, AngularJS and Node.
        </Paragraph>
        <Paragraph size='large' margin='small'>
          In my spare time, I play badminton and watch football and tennis.
        </Paragraph>
      </Typist>
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
