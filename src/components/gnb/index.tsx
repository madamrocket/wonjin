import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../share/container'
import Text from '../share/text'
import Menu from './menu'
import media from '../share/media'
import { MENUS } from './constants'

const GNBFrame = styled(Container)`
  position: relative;
  vertical-align: top;
  width: 92.09%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.563rem 0 1.75rem 0;
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
    margin: 1rem 0 1rem 5.333%;
  }
`

const Label = styled(Text)`
  display: none;

  @media ${media.md} {
    display: block;
    margin: 1rem 0 1rem 5.333%;
  }
`

const ResponsiveContainer = styled(Container)<{ target: 'pc' | 'mo' }>`
  display: inline-block;

  ${({ target }) =>
    target === 'pc'
      ? `
      display: inline-block;
      @media ${media.md} {
        display: none; 
      }
  
  `
      : `
      
      display: none;
      @media ${media.md} {
        display: inline-block; 
      }`}
`

function GNB({ pathname }: { pathname: string }) {
  const parsedPathname = useMemo(() => pathname.replace(/\//gi, ''), [pathname])

  const seletedMenu = MENUS.find(({ id }) => id === parsedPathname)

  return (
    <GNBFrame overflow="hidden">
      <ResponsiveContainer target="pc">
        <Logo to="/" />
      </ResponsiveContainer>
      <ResponsiveContainer target="mo">
        {seletedMenu ? <Label>{seletedMenu.label}</Label> : <Logo to="/" />}
      </ResponsiveContainer>
      <Menu pathname={parsedPathname} />
    </GNBFrame>
  )
}

export default GNB
