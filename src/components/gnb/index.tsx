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
  background-image: url(/images/logo-gnb@3x.png);
  background-size: 100%;
  margin: 0.75rem 0 0.75rem 8.33333%;

  @media ${media.md} {
    display: block;
  }
`

function GNB() {
  return (
    <Container overflow="hidden">
      <Logo to="/" />
      <Menu />
    </Container>
  )
}

export default GNB
