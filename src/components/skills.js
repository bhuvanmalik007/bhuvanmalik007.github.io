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

// const SkillsBox = styled(Box)`
//   background: #732945;
// `

const Skills = () =>
  <Box colorIndex='light-2' direction='column' align='center' justify='center' pad='large' >
    <h1>Skills</h1>
    {/* <Box full='horizontal' pad={{ horizontal: 'xlarge' }}> */}
    <Columns size='medium' justify='center' maxCount={3}>
      <Box direction='column' align='center' justify='center' pad={{vertical:'large', horizontal:'large'}} >
        <Image src={react} size='small' />
        <Label margin='small'>React</Label>
        <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
      </Box>
      <Box direction='column' align='center' justify='center' pad={{vertical:'large', horizontal:'large'}} >
        <Image src={react} size='small' />
        <Label margin='small'>React</Label>
        <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
      </Box>
      <Box direction='column' align='center' justify='center' pad={{vertical:'large', horizontal:'large'}} >
        <Image src={react} size='small' />
        <Label margin='small'>React</Label>
        <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
      </Box>
      <Box direction='column' align='center' justify='center' pad={{vertical:'large', horizontal:'large'}} >
        <Image src={react} size='small' />
        <Label margin='small'>React</Label>
        <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
      </Box>
      <Box direction='column' align='center' justify='center' pad={{vertical:'large', horizontal:'large'}} >
        <Image src={react} size='small' />
        <Label margin='small'>React</Label>
        <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
      </Box>
      <Box direction='column' align='center' justify='center' pad={{vertical:'large', horizontal:'large'}} >
        <Image src={react} size='small' />
        <Label margin='small'>React</Label>
        <Paragraph margin='none'>Frontend Development - Component Based Designs</Paragraph>
      </Box>
    </Columns>
    {/* </Box> */}

  </Box>

export default Skills
