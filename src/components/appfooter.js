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

const ContactBox = styled(Box)`
  background: #732945;
`

const WhiteText = styled(Heading)`
  color: #ffffff
`

const Bar = styled(Title)`
  color: #865cd6
`

export default props =>
  <Box align='stretch' direction='column' size={{ 'width': { max: 'full' } }}
    pad={{ between:'small' }}
  >
    <Box direction='row' justify='between' pad={{ horizontal: 'xlarge', vertical: 'small' }} >
      <Image src={skyline} size='large' />
      <ContactBox direction='column' pad='large'>
        <WhiteText margin='none' tag='h4' >
          CONTACT INFORMATION
        </WhiteText>
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
