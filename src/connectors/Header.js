import React from 'react'
import { pick } from 'ramda' //eslint-disable-line
import { connect } from 'react-redux'
import PropTypes from 'prop-types' //eslint-disable-line
import Header from 'grommet/components/Header'
import styled from 'styled-components'
import Box from 'grommet/components/Box'
import MailIcon from 'grommet/components/icons/base/Mail'
import Anchor from 'grommet/components/Anchor'
import SocialMediumIcon from 'grommet/components/icons/base/SocialMedium'
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram'
import Image from 'grommet/components/Image'
import nameLogo from '../static/name_logo.png'
import Animate from 'grommet/components/Animate'
import composeR from '../futils/composer'
import { withRouter, Link } from 'react-router'

const StyledAnchor = styled(Link)`
  color : #666;
  font-size: 18px;
  &:hover{
    color: #283747
  }
  padding-top: 15px;
  padding-left: 15px;
  cursor: pointer;
`
const links = {
  mail: 'mailTo:bhuvanmalik1994@gmail.com',
  medium: 'https://medium.com/@bhuvanmalik',
  facebook: 'https://www.facebook.com/bhuvan007',
  github: 'https://github.com/bhuvanmalik007',
  insta: 'https://www.instagram.com/bhuvs8/'
}

const socialOpener = (type) => {
  type === 'mail' ? window.open('mailTo:bhuvanmalik1994@gmail.com', '_self') : window.open(links[type], '_blank')
}

export const AppHeader = ({ location }) =>
  <Header responsive wrap>
    <Box size='xlarge' flex align='center' justify='start' alignSelf='center'
      pad={{ horizontal: 'medium', vertical:'none' }} >
      <Image src={nameLogo} size='medium' />
    </Box>
    <Box flex
      justify='end'
      direction='row'
      responsive={false}
      pad={{ horizontal: 'medium', vertical:'small' }}>
      {location.pathname === '/'
        ? <StyledAnchor to='projects'>PROJECTS</StyledAnchor> : <StyledAnchor to='/'>HOME</StyledAnchor>}
      <Animate enter={{ 'animation': 'slide-down', 'duration': 1000, 'delay': 600 }}>
        <Anchor icon={<MailIcon size='small' />} onClick={() => socialOpener('mail')} />
      </Animate>
      <Animate enter={{ 'animation': 'slide-down', 'duration': 1000, 'delay': 800 }}>
        <Anchor icon={<SocialGithubIcon size='small' />} onClick={() => socialOpener('github')} />
      </Animate>
      <Animate enter={{ 'animation': 'slide-down', 'duration': 1000, 'delay': 1000 }}>
        <Anchor icon={<SocialMediumIcon size='small' />} onClick={() => socialOpener('medium')} />
      </Animate>
      <Animate enter={{ 'animation': 'slide-down', 'duration': 1000, 'delay': 1200 }}>
        <Anchor icon={<SocialFacebookIcon size='small' />} onClick={() => socialOpener('facebook')} />
      </Animate>
      <Animate enter={{ 'animation': 'slide-down', 'duration': 1000, 'delay': 1400 }}>
        <Anchor icon={<SocialInstagramIcon size='small' />} onClick={() => socialOpener('insta')} />
      </Animate>
    </Box>
  </Header>

AppHeader.propTypes = {
  location: PropTypes.object
}

const mapStateToProps = state => ({
})

export default composeR(connect(mapStateToProps), withRouter)(AppHeader)
