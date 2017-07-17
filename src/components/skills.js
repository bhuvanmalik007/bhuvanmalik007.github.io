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
import react from '../static/react.png'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Columns from 'grommet/components/Columns'
import Label from 'grommet/components/Label'
import Animate from 'grommet/components/Animate'

const BlackTitle = styled(Title)`
  color: #000000;
`

const Skills = () =>
  <Box colorIndex='light-1' direction='column' align='center' justify='center' pad='large' >
    <BlackTitle>Skills</BlackTitle>
    {/* <Box full='horizontal' pad={{ horizontal: 'xlarge' }}> */}
    <Columns size='medium' justify='center' maxCount={3}>
      <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={react} size='small' />
          <Label margin='small'>React</Label>
          <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
        </Box>
      </Animate>
      <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={react} size='small' />
          <Label margin='small'>React</Label>
          <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
        </Box>
      </Animate>
      <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={react} size='small' />
          <Label margin='small'>React</Label>
          <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
        </Box>
      </Animate><Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={react} size='small' />
          <Label margin='small'>React</Label>
          <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
        </Box>
      </Animate><Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={react} size='small' />
          <Label margin='small'>React</Label>
          <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
        </Box>
      </Animate><Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={react} size='small' />
          <Label margin='small'>React</Label>
          <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
        </Box>
      </Animate>
    </Columns>
  </Box>

export default Skills
