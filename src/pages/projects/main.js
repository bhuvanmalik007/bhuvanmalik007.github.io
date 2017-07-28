import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Menu from 'grommet/components/Menu'
import GunmetalHeading from '../../components/gunmetalheading'
import texture from '../../static/texture.png'
import FilterIcon from 'grommet/components/icons/base/Filter'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Image from 'grommet/components/Image'
import Paragraph from 'grommet/components/Paragraph'
import Heading from 'grommet/components/Heading'
import { Label as SLabel } from 'semantic-ui-react'
import { projectsStore } from '../../constants'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'

const ClickableImage = styled(Image)`
  cursor: pointer;
  border: 5px;
`

const Projects = () => (
  // <Box direction='column' full justify='start' align='center'>
  <div>
    <Box direction='row' full='horizontal' texture={texture} justify='start' appCentered
      pad={{ horizontal:'large', vertical:'medium' }}>
      <GunmetalHeading size='large' align='center' strong>PROJECTS</GunmetalHeading>
    </Box>
    <Box direction='row' full='horizontal' justify='center'
      pad={{ horizontal:'large', vertical:'large' }}>
      <Menu responsive size='large' label='Filter' icon={<FilterIcon />}
        inline
        direction='row'>
        <Anchor href='#'
          className='active'>
          All
        </Anchor>
        <Anchor href='#'>
          React/Redux
        </Anchor>
        <Anchor href='#'>
          Angular JS
        </Anchor>
        <Anchor href='#'>
          Node
        </Anchor>
      </Menu>
    </Box>
    <Box direction='column' align='center' justify='center' pad='large' colorIndex='light-2'>
      <Columns size='small' justify='between' pad='small'
        maxCount={4} masonry>
        {projectsStore.map((project, index) =>
          <Box pad='none' margin='medium'>
            <Card
              colorIndex='light-1'
              contentPad='small'>
              <ClickableImage src={project.img} onClick={_ => window.open(project.link, '_blank')} />
              <Heading margin='small'>{project.name} {
                project.github && <Anchor target='_blank' icon={<SocialGithubIcon size='medium' />}
                  href={project.github} />
              }
              </Heading>
              <div>{project.tech.map((tech, index) => <SLabel basic color={tech.color}>{tech.name}</SLabel>)}</div>
              <Paragraph margin='small'>{project.description}</Paragraph>

            </Card>
          </Box>
        )}
      </Columns>
    </Box>
  </div>
  // </Box>
)

Projects.propTypes = {
  auth: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  updateUsername: PropTypes.func,
  updatePassword: PropTypes.func,
  authenticate: PropTypes.func,
  authenticated: PropTypes.bool
}

export default Projects
