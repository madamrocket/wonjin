import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../share/container'
import Menu from './menu'
import { media } from '../share/media'

const Logo = styled(Link)`
  display: inline-block;
  width: 306px;
  height: 80px;
  margin-left: 8.33333%;
  background-image: url(/images/logo-gnb@3x.png);
  background-size: 100%;

  @media ${media.md} {
    display: block;
  }
`

function GNB() {
  return (
    <Container padding="0.75rem 0">
      <Logo to="/" />
      <Menu />
    </Container>
  )
}

export default GNB
