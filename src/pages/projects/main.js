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
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'
import Animate from 'grommet/components/Animate'

const ClickableImage = styled(Image)`
  cursor: pointer;
  border: 5px;
`

const Projects = ({ filteredArray, filterProjects, allProjects, currentFilter }) => (
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
        <Anchor onClick={allProjects} className={currentFilter === 'all' ? 'active' : ''}>
          All
        </Anchor>
        <Anchor onClick={() => filterProjects('React')} className={currentFilter === 'React' ? 'active' : ''}>
          React/Redux
        </Anchor>
        <Anchor onClick={() => filterProjects('Angular')} className={currentFilter === 'Angular' ? 'active' : ''}>
          Angular JS
        </Anchor>
        <Anchor onClick={() => filterProjects('Node')} className={currentFilter === 'Node' ? 'active' : ''}>
          Node
        </Anchor>
      </Menu>
    </Box>
    <Box direction='column' align='center' justify='center' pad='large' colorIndex='light-2'>
      <Animate enter={{ 'animation': 'slide-up', 'duration': 1000, 'delay': 100 }}>
        <Columns size='small' justify='between' pad='small'
          maxCount={3} masonry>
          {filteredArray.map((project, index) =>
            <Box pad='none' margin='medium'>
              <Card
                colorIndex='light-1'
                contentPad='small'>
                {project.img && <ClickableImage src={project.img} onClick={_ => window.open(project.link, '_blank')} />}
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
      </Animate>
    </Box>
  </div>
)

Projects.propTypes = {
  filteredArray: PropTypes.array,
  filterProjects: PropTypes.func,
  allProjects: PropTypes.func,
  currentFilter: PropTypes.string
}

export default Projects
