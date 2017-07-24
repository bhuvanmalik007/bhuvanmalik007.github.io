import React from 'react'
import { pick } from 'ramda' //eslint-disable-line
import { connect } from 'react-redux'
import { Link } from 'react-router' //eslint-disable-line
import PropTypes from 'prop-types' //eslint-disable-line
import Header from 'grommet/components/Header'
import styled from 'styled-components'
import Box from 'grommet/components/Box'
import MailIcon from 'grommet/components/icons/base/Mail'
import Anchor from 'grommet/components/Anchor'
import SocialMediumIcon from 'grommet/components/icons/base/SocialMedium'
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'
import Image from 'grommet/components/Image'
import nameLogo from '../static/name_logo.png'
import Animate from 'grommet/components/Animate'

const StyledAnchor = styled(Anchor)`
  color : #000000;
  font-size: 18px;
  &:hover{
    color: #865cd6
  }
  padding-top: 15px
`
const links = {
  mail: 'mailTo:bhuvanmalik1994@gmail.com',
  medium: 'https://medium.com/@bhuvanmalik',
  facebook: 'https://www.facebook.com/bhuvan007',
  github: 'https://github.com/bhuvanmalik007'
}

const socialOpener = (type) => {
  type === 'mail' ? window.open('mailTo:bhuvanmalik1994@gmail.com', '_self') : window.open(links[type], '_blank')
}

export const AppHeader = props =>
  <Header fixed={false}>
    <Box size='xxlarge' flex align='center' alignSelf='center'
      pad={{ horizontal: 'medium', vertical:'none' }} >
      <Image src={nameLogo} size='large' />
    </Box>
    <Box flex
      justify='end'
      direction='row'
      responsive={false}
      pad={{ horizontal: 'medium', vertical:'small' }}>
      {/* <StyledAnchor label='PROJECTS' onClick={socialOpener} /> */}
      <Animate enter={{ 'animation': 'slide-down', 'duration': 1000, 'delay': 600 }}>
        <Anchor icon={<MailIcon size='small' />} onClick={() => socialOpener('mail')} />
      </Animate>
      <Animate enter={{ 'animation': 'slide-down', 'duration': 1000, 'delay': 800 }}>
        <Anchor icon={<SocialMediumIcon size='small' />} onClick={() => socialOpener('medium')} />
      </Animate>
      <Animate enter={{ 'animation': 'slide-down', 'duration': 1000, 'delay': 1000 }}>
        <Anchor icon={<SocialFacebookIcon size='small' />} onClick={() => socialOpener('facebook')} />
      </Animate>
      <Animate enter={{ 'animation': 'slide-down', 'duration': 1000, 'delay': 1200 }}>
        <Anchor icon={<SocialGithubIcon size='small' />} onClick={() => socialOpener('mail')} />
      </Animate>
    </Box>
  </Header>

AppHeader.propTypes = {
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(AppHeader)
