import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../share/container'
import Menu from './menu'
import { media } from '../share/media'

const GNBFrame = styled(Container)`
  vertical-align: top;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
`

const Logo = styled(Link)`
  display: inline-block;
  width: 306px;
  height: 80px;
  background-image: url(/images/logo-gnb@3x.png);
  background-size: 100%;
  margin: 0.5rem 0 0.5rem 3.5rem;
  vertical-align: top;

  @media ${media.md} {
    display: block;
    margin-left: 11.523%;
  }
`

const HR = styled.div`
  display: none;

  @media ${media.md} {
    display: block;
    height: 1px;
    border-top: 1px solid #d3d3d3;
  }
`

function GNB() {
  return (
    <GNBFrame overflow="hidden">
      <Logo to="/" />
      <HR />
      <Menu />
    </GNBFrame>
  )
}

export default GNB
