import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { MENUS } from './constants'
import getColor from '../share/color'
import media from '../share/media'

const MenuFrame = styled.ul<{ open: boolean }>`
  float: right;
  box-sizing: border-box;

  @media ${media.md} {
    transform: translate(100%);
    width: 53.33%;
    padding: 0 0.75rem;
    z-index: 9999;
    position: fixed;
    right: 0;
    background: #fff;
    top: 0;
    bottom: 0;
    transition: transform 0.3s;

    ${({ open }) =>
      open &&
      `
      transform: translate(0);
    `}
  }
`

const Dimmed = styled.div<{ open: boolean }>`
  @media ${media.md} {
    visibility: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.1;
    background-color: #000000;
    z-index: 3;
    transition: visibility 0s, opacity 0.3s;

    ${({ open }) =>
      open &&
      `
    display: block;
    visibility: visible;
    opacity: 0.3;
  `}
  }
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

  @media ${media.md} {
    display: block;
  }
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
  cursor: pointer;
`

const HamburgerButton = styled.img`
  width: 1.313rem;
  display: none;
  cursor: pointer;

  @media ${media.md} {
    display: block;
    font-size: 0.875rem;
    height: 1.25rem;
    line-height: 1.25rem;
    float: right;
    padding: 0.95rem;

    &:before {
      width: auto;
    }
  }
`

function Menu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <HamburgerButton
        src="/images/btn-menu@3x.png"
        alt="mo_gnb_open_button"
        onClick={handleOpen}
      />
      <MenuFrame open={open}>
        <HamburgerMenuBarContainer>
          <Link to="/" onClick={handleClose}>
            <HamburgerLogo src="/images/logo-lnb@3x.png" alt="mo_gnb_logo" />
          </Link>
          <HamburgerCloseIcon
            src="/images/btn-x@3x.png"
            alt="mo_gnb_close_btn"
            onClick={handleClose}
          />
        </HamburgerMenuBarContainer>
        {MENUS.map(({ id, label }, idx) => (
          <A to={`/${id}`} onClick={handleClose} key={idx}>
            <Label key={id} active={pathname === id}>
              {label}
            </Label>
          </A>
        ))}
      </MenuFrame>
      <Dimmed open={open} onClick={handleClose} />
    </>
  )
}

export default Menu
