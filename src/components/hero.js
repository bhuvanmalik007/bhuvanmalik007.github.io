import React from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import styled from 'styled-components'
import Paragraph from 'grommet/components/Paragraph'
import Title from 'grommet/components/Title'
import dp from '../static/dp.jpg'
import Typist from 'react-typist'
import Anchor from 'grommet/components/Anchor'

const ImageFrame = styled(Box)`
  background: #AF7AC5;
`
const StyledTitle = styled(Title)`
  font-family: 'Source Code Pro', monospace;
  font-size: 30px;
`

const StyledPara = styled(Paragraph)`
  font-family: 'Montserrat', monospace;
  color: #283747;
`

const StyledAnchor = styled(Anchor)`
  color: #aa68c5 !important;
  &:hover{
    color: #9f57bd !important;
  }
`

const Hero = () => (
  <Box className='wallpaper' direction='row' justify='center' pad={{ vertical: 'large', between:'large' }} >
    <ImageFrame size='medium' margin='small' pad='small' colorIndex='brand' align='center' >
      <Image src={dp} size='medium' />
    </ImageFrame>
    <Box direction='column' justify='between' textAlign='left'
      pad={{ horizontal:'medium', vertical:'small' }} size={{ vertical: 'medium', horizontal:'large' }}>
      <Typist cursor={{ show: false }} stdTypingDelay={1} avgTypingDelay={20}>
        <StyledTitle align='left' size='large'>Hello World!</StyledTitle>
        <StyledPara size='large' margin='small'>
          I'm Bhuvan Malik! I'm a Software Engineer and a Computer Science grad student at
           University of Florida. Go Gators! 🐊
        </StyledPara>
        <StyledPara size='large' margin='small'>
          I'm passionate about functional programming and creating server rendered
           full-stλck Applications in React with Redux, powered by backend with Node.
            I have over 35 repositories on GitHub and several articles on Medium for freeCodeCamp with ~160k views.
        </StyledPara>
        {/* <StyledPara size='large' margin='small'>
          In my spare time, I play badminton and watch football and tennis.
        </StyledPara> */}
        <StyledPara size='large' margin='small'>
          Click <StyledAnchor label='here' href='https://bhuvanmalik.surge.sh/#/projects' /> to view my projects
          or scroll down for skills.
        </StyledPara>
      </Typist>
      {/* <Box direction='row' justify='center' pad={{ between:'large', vertical:'xsmall' }}>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 5000 }} >
          <Heading size='large' >💻</Heading>
        </Animate>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 5700 }} >
          <Heading size='large'>🏸</Heading>
        </Animate>
      </Box> */}
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
