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
import angular from '../static/angular.svg'
import redux from '../static/redux.png'
import node from '../static/node.png'
import express from '../static/express.png'
import socketio from '../static/socketio.png'
import android from '../static/android.png'
import rx from '../static/rx.png'
import mongo from '../static/mongo.png'
import { Grid } from 'semantic-ui-react'

const BlackTitle = styled(Title)`
  color: #000000;
`

const SkillsBox = styled(Box)`
  color: #ffffff;
`

const Skills = () =>
  <SkillsBox direction='column' align='center' justify='center' pad='large' >
    <BlackTitle>Skills</BlackTitle>
    {/* <Columns size='medium' justify='center' maxCount={3} masonry > */}
    {/* <Box direction='row' justify='center' alignContent='center' wrap pad='large'> */}
    <Grid relaxed columns={3} stackable verticalAlign='center'>
      <Grid.Column>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={react} size='small' />
            <Label margin='small'>React</Label>
            <Paragraph margin='none'>Component Based Designs</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={redux} size='small' />
            <Label margin='small'>Redux</Label>
            <Paragraph margin='none'>Immutable State Management</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={angular} size='small' />
            <Label margin='small'>Angular JS</Label>
            <Paragraph margin='none'>Frontend Development</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={node} size='small' />
            <Label margin='small'>Node JS</Label>
            <Paragraph margin='none'>Backend Development</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={express} size='small' />
            <Label margin='small'>Express</Label>
            <Paragraph margin='none'>Rest APIs</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={socketio} size='small' />
            <Label margin='small'>Socket IO</Label>
            <Paragraph margin='none'>real-time event based communication</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={android} size='small' />
            <Label margin='small'>Android</Label>
            <Paragraph margin='none'>Android Application Development with Java </Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={rx} size='small' />
            <Label margin='small'>RxJS</Label>
            <Paragraph margin='none'>Frontend Development - Redux Sideffects using Observables</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={mongo} size='small' />
            <Label margin='small'>Mongo DB</Label>
            <Paragraph margin='none'>Backend Development - Document Based Database</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      {/* <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={react} size='small' />
          <Label margin='small'>React</Label>
          <Paragraph margin='none'>Component Based Designs</Paragraph>
        </Box>
        </Animate>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={redux} size='small' />
          <Label margin='small'>Redux</Label>
          <Paragraph margin='none'>Immutable State Management</Paragraph>
        </Box>
        </Animate>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={angular} size='small' />
          <Label margin='small'>Angular JS</Label>
          <Paragraph margin='none'>Frontend Development</Paragraph>
        </Box>
        </Animate>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={node} size='small' />
          <Label margin='small'>Node JS</Label>
          <Paragraph margin='none'>Backend Development</Paragraph>
        </Box>
        </Animate>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={express} size='small' />
          <Label margin='small'>Express</Label>
          <Paragraph margin='none'>Rest APIs</Paragraph>
        </Box>
        </Animate>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={socketio} size='small' />
          <Label margin='small'>Socket IO</Label>
          <Paragraph margin='none'>real-time bidirectional event-based communication.</Paragraph>
        </Box>
        </Animate>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={android} size='small' />
          <Label margin='small'>Android</Label>
          <Paragraph margin='none'>Android Application Development with Java </Paragraph>
        </Box>
        </Animate>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={rx} size='small' />
          <Label margin='small'>RxJS</Label>
          <Paragraph margin='none'>Frontend Development - Redux Sideffects using Observables</Paragraph>
        </Box>
        </Animate>
        <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
        <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
          <Image src={mongo} size='small' />
          <Label margin='small'>Mongo DB</Label>
          <Paragraph margin='none'>Backend Development - Document Based Database</Paragraph>
        </Box>
      </Animate> */}
    </Grid>
    {/* </Box> */}
    {/* </Columns> */}
  </SkillsBox>

export default Skills
