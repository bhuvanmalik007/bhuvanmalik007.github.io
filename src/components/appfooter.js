import React from 'react'
import { Link } from 'react-router' //eslint-disable-line
import Footer from 'grommet/components/Footer'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import skyline from '../static/skyline.png'
import styled from 'styled-components'
import Heading from 'grommet/components/Heading'
import texture from '../static/texture.png'

const ContactBox = styled(Box)`
  background: #7c3651;
`

const WhiteHeading = styled(Heading)`
  color: #ffffff
`
const WhitePara = styled(Paragraph)`
  color: #ffffff
`

const Bar = styled(Title)`
  color: #865cd6
`

export default props =>
  <Box align='stretch' direction='column' texture={texture}
    size={{ 'width': { max: 'full' } }} pad={{ between:'small' }} >
    <Box direction='row' justify='center' pad={{ between: 'large', vertical: 'small' }} >
      <Image src={skyline} size='large' />
      <ContactBox direction='column' justify='start' align='center'
        pad={{ vertical: 'medium', horizontal: 'medium', between: 'none' }}>
        <WhiteHeading margin='none' tag='h4' strong>
          GET IN TOUCH!
        </WhiteHeading>
        <WhitePara margin='small'>E-MAIL: bhuvanmalik1994@gmail.com</WhitePara>
        <WhitePara margin='small'>PHONE: +91 9871056888 </WhitePara>
        <WhitePara margin='small'>ADDRESS: Gurgaon, India</WhitePara>
      </ContactBox>
    </Box>
    <Footer justify='center' colorIndex='light-2' size='large'>
      <Title>
        Made with ⚛️ & ♥️
      </Title>
      <Bar>|</Bar>
      <Box direction='row'
        align='center'
        pad={{ 'between': 'medium' }}>
        <Paragraph margin='none'>
          © 2017 Bhuvan Malik
        </Paragraph>
      </Box>
    </Footer>
  </Box>
