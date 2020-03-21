import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../share/container'
import Menu from './menu'
import media from '../share/media'

const GNBFrame = styled(Container)`
  vertical-align: top;
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
`

const Logo = styled(Link)`
  display: inline-block;
  width: 11.38rem;
  height: 2.5rem;
  background-image: url(/images/logo-gnb@3x.png);
  background-size: 100%;
  margin: 0.3rem 0 0.5rem 0;
  vertical-align: top;
  background-repeat: no-repeat;

  @media ${media.md} {
    width: 6.875rem;
    height: 1rem;
    background-image: url(/images/logo-gnb-mo@3x.png);
    margin: 1rem 0 1rem 5.333%;
  }
`

function GNB({ pathname }: { pathname: string }) {
  return (
    <GNBFrame>
      <Container overflow="hidden" maxWidth="49.25rem" margin="0 auto">
        <Logo to="/" />
        <Menu pathname={pathname} />
      </Container>
    </GNBFrame>
  )
}

export default GNB
