import React from 'react'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import styled from 'styled-components'
import Paragraph from 'grommet/components/Paragraph'
import Heading from 'grommet/components/Heading'
import react from '../static/react.png'
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

const BlackTitle = styled(Heading)`
  color: #283747;
`

const JWBlackLabel = styled(Label)`
  color: #000000;
`

const SkillsBox = styled(Box)`
  color: #ffffff;
`

const Skills = () =>
  <SkillsBox direction='column' align='center' justify='center' pad='large' >
    <BlackTitle size='large' align='center' strong>SKILLS</BlackTitle>
    <Grid relaxed columns={3} stackable verticalAlign='middle'>
      <Grid.Column>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={react} size='small' full='vertical' />
            <JWBlackLabel margin='small'>React</JWBlackLabel>
            <Paragraph margin='none'>Component Based Designs</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 300 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={redux} size='small' />
            <JWBlackLabel margin='small'>Redux</JWBlackLabel>
            <Paragraph margin='none'>Immutable State Management</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 500 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={angular} size='small' />
            <JWBlackLabel margin='small'>Angular JS</JWBlackLabel>
            <Paragraph margin='none'>Frontend Development</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 200 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={node} size='small' />
            <JWBlackLabel margin='small'>Node JS</JWBlackLabel>
            <Paragraph margin='none'>Backend Development</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 400 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={express} size='small' />
            <JWBlackLabel margin='small'>Express</JWBlackLabel>
            <Paragraph margin='none'>Rest APIs</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 600 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={socketio} size='small' full='vertical' />
            <JWBlackLabel margin='small'>Socket IO</JWBlackLabel>
            <Paragraph margin='none'>Real-time event based communication</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 200 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={android} size='small' />
            <JWBlackLabel margin='small'>Android</JWBlackLabel>
            <Paragraph margin='none'>Android Application Development with Java </Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 400 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={rx} size='small' />
            <JWBlackLabel margin='small'>RxJS</JWBlackLabel>
            <Paragraph margin='none'>Frontend Development - Redux Sideffects using Observables</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
      <Grid.Column>
        <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 600 }} keep visible='scroll' >
          <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
            <Image src={mongo} size='small' />
            <JWBlackLabel margin='small'>Mongo DB</JWBlackLabel>
            <Paragraph margin='none'>Backend Development - Document Based Database</Paragraph>
          </Box>
        </Animate>
      </Grid.Column>
    </Grid>
    {/* </Box> */}
    {/* </Columns> */}
  </SkillsBox>

export default Skills
