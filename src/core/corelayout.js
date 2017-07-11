import React from 'react'
import PropTypes from 'prop-types'
import Header from '../connectors/Header'
import Footer from '../components/appfooter'
import styled from 'styled-components'

const CoreBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 2;
`

export const CoreLayout = ({ children }) => (
  <CoreBlock>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </CoreBlock>
)

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
