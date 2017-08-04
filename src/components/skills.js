import React from 'react'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import styled from 'styled-components'
import Paragraph from 'grommet/components/Paragraph'
import Label from 'grommet/components/Label'
import Animate from 'grommet/components/Animate'
import { Grid } from 'semantic-ui-react'
import GunmetalHeading from '../components/gunmetalheading'
import { skillSet } from '../constants'

const JWBlackLabel = styled(Label)`
  color: #000000;
`

const SkillsBox = styled(Box)`
  color: #ffffff;
`

const Skills = () =>
  <SkillsBox direction='column' align='center' justify='center' pad='large' >
    <GunmetalHeading size='large' align='center' strong>SKILLS</GunmetalHeading>
    <Grid relaxed columns={3} stackable verticalAlign='middle'>
      {skillSet.map((skill, index) =>
        <Grid.Column key={index}>
          <Animate enter={{ 'animation': 'fade', 'duration': 1000, 'delay': 100 }} keep visible='scroll' >
            <Box direction='column' align='center' justify='center' pad={{ vertical:'large', horizontal:'large' }} >
              <Image src={skill.img} size='small' full='vertical' />
              <JWBlackLabel margin='small'>{skill.name}</JWBlackLabel>
              <Paragraph margin='none'>{skill.description}</Paragraph>
            </Box>
          </Animate>
        </Grid.Column>
      )}
    </Grid>
  </SkillsBox>

export default Skills
