import React from 'react'
import PropTypes from 'prop-types'
import Header from '../connectors/Header'
import Footer from '../components/appfooter'
import styled from 'styled-components'

const CoreBlock = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1 auto;
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
