import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import { media } from '../share/media'

const Logo = styled.img`
  width: 306px;
  height: 80px;
  margin-left: 160px;
  display: block;

  @media ${media.md} {
    margin-left: 54px;
  }
`

function GNB() {
  return (
    <Container padding="12px 0">
      <Logo src="/images/logo-gnb@3x.png" />
    </Container>
  )
}

export default GNB
