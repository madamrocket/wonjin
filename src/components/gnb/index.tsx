import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import { media } from '../share/media'

const Logo = styled.img`
  width: 306px;
  height: 80px;
  margin-left: 10rem;
  display: block;

  @media ${media.md} {
    margin-left: 3.375rem;
  }
`

function GNB() {
  return (
    <Container padding="0.75rem 0">
      <Logo src="/images/logo-gnb@3x.png" />
    </Container>
  )
}

export default GNB
