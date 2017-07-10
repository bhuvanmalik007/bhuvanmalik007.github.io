import React from 'react'
import { pick } from 'ramda' //eslint-disable-line
import { connect } from 'react-redux'
import { Link } from 'react-router' //eslint-disable-line
import PropTypes from 'prop-types' //eslint-disable-line
import Header from 'grommet/components/Header'
import styled from 'styled-components'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import MailIcon from 'grommet/components/icons/base/Mail'
import Heading from 'grommet/components/Heading'
import Anchor from 'grommet/components/Anchor'
import SocialMediumIcon from 'grommet/components/icons/base/SocialMedium'
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'
import Image from 'grommet/components/Image'
import nameLogo from '../static/name_logo.png'

const StyledAnchor = styled(Anchor)`
  color : #000000;
  font-size: 18px;
  &:hover{
    color: #865cd6
  }
  padding-top: 15px
`

const socialOpener = () => {
  window.open('mailTo:bhuvanmalik1994@gmail.com', '_self')
}

export const AppHeader = props => (
  <Header
    fixed={false}
  >
    <Box size='xxlarge' flex align='center' alignSelf='center'
      pad={{ horizontal: 'medium', vertical:'none' }} >
      <Image src={nameLogo} size='large' />
    </Box>
    <Box flex
      justify='end'
      direction='row'
      responsive={false}
      pad={{ horizontal: 'medium', vertical:'small' }}>
      <StyledAnchor label='PROJECTS' onClick={socialOpener} />
      <Anchor icon={<MailIcon />} onClick={socialOpener} />
      <Anchor icon={<SocialMediumIcon />} onClick={socialOpener} />
      <Anchor icon={<SocialFacebookIcon />} onClick={socialOpener} />
      <Anchor icon={<SocialGithubIcon />} onClick={socialOpener} />
    </Box>
  </Header>
      )

AppHeader.propTypes = {
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(AppHeader)
