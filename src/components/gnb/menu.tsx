import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { MENUS } from './constants'
import getColor from '../share/color'
import media from '../share/media'

const MenuFrame = styled.ul`
  float: right;
  box-sizing: border-box;

  @media ${media.md} {
    display: none;
    width: 53.33%;
    padding: 0 0.75rem;
    z-index: 9999;
    position: fixed;
    right: 0;
    background: #fff;
    top: 0;
    bottom: 0;
  }
`

const Dimmed = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  background-color: #000000;
  z-index: 3;
`

const A = styled(Link)`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;

  &:not(:last-child) {
    margin-right: 2.125rem;
  }

  @media ${media.md} {
    font-size: 0.875rem;
    width: 100%;
    border-bottom: 1px solid #e2e2e2;
    padding: 0.875rem 0.5rem;
  }
`

const Label = styled.li<{
  active?: boolean
}>`
  position: relative;
  float: left;
  height: 4rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 4rem;

  ${({ active }) =>
    active &&
    `
    color: ${getColor('blue')};
    font-weight: bold;

    &:before {
      content: '';
      width: 100%;
      height: 6px;
      background: ${getColor('blue')};
      display: block;
      position: absolute;
      bottom: 0;
    }
  `}

  @media ${media.md} {
    font-size: 0.875rem;
    height: 1.25rem;
    line-height: 1.25rem;
  
    &:before {
      width: auto;
    }
  }
`

const HamburgerMenuBarContainer = styled.div`
  padding: 1rem 0.5rem;
  position: relative;
  display: none;
`

const HamburgerLogo = styled.img`
  width: 47%;
  vertical-align: top;
`

const HamburgerCloseIcon = styled.img`
  width: 12%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  vertical-align: top;
`

function Menu({ pathname }: { pathname: string }) {
  const parsedPathname = useMemo(() => pathname.replace('/', ''), [pathname])
  return (
    <>
      <MenuFrame>
        <HamburgerMenuBarContainer>
          <HamburgerLogo src="/images/logo-lnb@3x.png" />
          <HamburgerCloseIcon src="/images/btn-x@3x.png" />
        </HamburgerMenuBarContainer>
        {MENUS.map(({ id, label }) => (
          <A to={`/${id}`}>
            <Label key={id} active={parsedPathname === id}>
              {label}
            </Label>
          </A>
        ))}
      </MenuFrame>
      <Dimmed />
    </>
  )
}

export default Menu
