import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Menu from 'grommet/components/Menu'
import GunmetalHeading from '../../components/gunmetalheading'
import texture from '../../static/texture.png'
import FilterIcon from 'grommet/components/icons/base/Filter'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import dauble from '../../static/dauble.png'
import Image from 'grommet/components/Image'
import Paragraph from 'grommet/components/Paragraph'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import { Grid } from 'semantic-ui-react'

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
      <Columns size='medium' justify='between' pad='large'
        maxCount={3} masonry>
        <Box pad='none' margin='medium'>
          <Card
            colorIndex='light-1'
            contentPad='small' >
            <Image src={dauble} />
            <Heading margin='small'>1</Heading>
            <Label margin='xsmall'>Angular JS</Label>
            <Paragraph margin='small'>Dauble is an Art platform that allows Collectors to manage
              their Art Collection privately, and Galleries and Artists to manage their business efficiently,
            with a social network connecting all parties.</Paragraph>
          </Card>
        </Box>
        <Box pad='none' margin='medium'>
          <Card
            colorIndex='light-1'
            contentPad='small' >
            <Image src={dauble} />
            <Heading margin='small'>2</Heading>
            <Label margin='xsmall'>Angular JS</Label>
            <Paragraph margin='small'>Dauble is an Art platform that allows Collectors to manage
              their Art Collection privately, and Galleries and Artists to manage their business efficiently,
            with a social network connecting all parties.</Paragraph>
          </Card>
        </Box>
        <Box pad='none' margin='medium'>
          <Card
            colorIndex='light-1'
            contentPad='small' >
            <Image src={dauble} />
            <Heading margin='small'>3</Heading>
            <Label margin='xsmall'>Angular JS</Label>
            <Paragraph margin='small'>Dauble is an Art platform that allows Collectors to manage
              their Art Collection privately, and Galleries and Artists to manage their business efficiently,
            with a social network connecting all parties.</Paragraph>
          </Card>
        </Box>
        <Box pad='none' margin='medium'>
          <Card
            colorIndex='light-1'
            contentPad='small' >
            <Image src={dauble} />
            <Heading margin='small'>4</Heading>
            <Label margin='xsmall'>Angular JS</Label>
            <Paragraph margin='small'>Dauble is an Art platform that allows Collectors to manage
              their Art Collection privately, and Galleries and Artists to manage their business efficiently,
            with a social network connecting all parties.</Paragraph>
          </Card>
        </Box>
        <Box pad='none' margin='medium'>
          <Card
            colorIndex='light-1'
            contentPad='small' >
            <Image src={dauble} />
            <Heading margin='small'>5</Heading>
            <Label margin='xsmall'>Angular JS</Label>
            <Paragraph margin='small'>Dauble is an Art platform that allows Collectors to manage
              their Art Collection privately, and Galleries and Artists to manage their business efficiently,
            with a social network connecting all parties.</Paragraph>
          </Card>
        </Box>
        <Box pad='none' margin='medium'>
          <Card
            colorIndex='light-1'
            contentPad='small' >
            <Image src={dauble} />
            <Heading margin='small'>6</Heading>
            <Label margin='xsmall'>Angular JS</Label>
            <Paragraph margin='small'>Dauble is an Art platform that allows Collectors to manage
              their Art Collection privately, and Galleries and Artists to manage their business efficiently,
            with a social network connecting all parties.</Paragraph>
          </Card>
        </Box>
        <Box pad='none' margin='medium'>
          <Card
            colorIndex='light-1'
            contentPad='small' >
            <Image src={dauble} />
            <Heading margin='small'>7</Heading>
            <Label margin='xsmall'>Angular JS</Label>
            <Paragraph margin='small'>Dauble is an Art platform that allows Collectors to manage
              their Art Collection privately, and Galleries and Artists to manage their business efficiently,
            with a social network connecting all parties.</Paragraph>
          </Card>
        </Box>
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
