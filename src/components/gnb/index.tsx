import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../share/container'
import Text from '../share/text'
import Menu from './menu'
import media from '../share/media'
import { MENUS } from './constants'
import Responsive from '../share/responsive'

const GNBFrame = styled(Container)`
  vertical-align: top;
  width: 92.09%;
  max-width: 64rem;
  margin: 0 auto;
  height: 5rem;
  border-bottom: 1px solid #e6e6e6;

  @media ${media.md} {
    width: 100%;
    padding: 0 1rem;
    height: 48px;
  }
`

const Logo = styled(Link)`
  display: inline-block;
  width: 11.38rem;
  height: 3.5rem;
  background-image: url(/images/logo-gnb@3x.png);
  background-size: 100%;
  vertical-align: top;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media ${media.md} {
    width: 6.875rem;
    height: 1rem;
    background-image: url(/images/logo-gnb-mo@3x.png);
    margin: 0;
  }
`

function GNB({ pathname }: { pathname: string }) {
  const parsedPathname = useMemo(() => pathname.replace(/\//gi, ''), [pathname])

  const seletedMenu = MENUS.find(({ id }) => id === parsedPathname)

  return (
    <GNBFrame overflow="hidden" position="relative">
      <Responsive target="pc" float="left">
        <Logo to="/" />
      </Responsive>
      <Responsive target="mo">
        {seletedMenu ? (
          <Text fontWeight={500} mobileineHeight={3}>
            {seletedMenu.label}
          </Text>
        ) : (
          <Logo to="/" />
        )}
      </Responsive>
      <Menu pathname={parsedPathname} />
    </GNBFrame>
  )
}

export default GNB
