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
  border-bottom: 1px solid #e6e6e6;
`

const GNBContainer = styled(Container)`
  vertical-align: top;
  height: 5rem;

  @media ${media.md} {
    width: 100%;
    padding: 0 1rem;
    height: 48px;
  }
`

const Logo = styled(Link)`
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  background-image: url(/images/wonjin-logo.png);
  background-size: 100%;
  vertical-align: top;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media ${media.md} {
    width: 2rem;
    height: 2rem;
    background-image: url(/images/wonjin-logo.png);
    margin: 0;
  }
`

function GNB({ pathname }: { pathname: string }) {
  const parsedPathname = useMemo(() => pathname.replace(/\//gi, ''), [pathname])

  const seletedMenu = MENUS.find(({ id }) => id === parsedPathname)

  return (
    <GNBFrame>
      <GNBContainer
        maxWidth="64rem"
        width="92.09%"
        overflow="hidden"
        margin="0 auto"
        position="relative"
      >
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
      </GNBContainer>
    </GNBFrame>
  )
}

export default GNB
