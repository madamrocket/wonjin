import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { MENUS } from './constants'
import { media } from '../share/media'
import getColor from '../share/color'

const MenuFrame = styled.ul`
  float: right;

  @media ${media.md} {
    max-width: 788px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-right: auto;
    float: none;
  }
`

const Label = styled.li<{
  active?: boolean
}>`
  float: left;
  height: 6rem;
  margin-right: 3.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 6rem;
  position: relative;

  @media ${media.md} {
    margin: 0 0.907rem;
    text-align: center;
    height: 3.5rem;
    line-height: 3.5rem;
  }

  ${({ active }) =>
    active &&
    `
    color:  ${getColor('blue')};

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
`

function Menu({ pathname }: { pathname: string }) {
  const parsedPathname = useMemo(() => pathname.replace('/', ''), [pathname])
  return (
    <MenuFrame>
      {MENUS.map(({ id, label }) => (
        <Link to={`/${id}`}>
          <Label key={id} active={parsedPathname === id}>
            {label}
          </Label>
        </Link>
      ))}
    </MenuFrame>
  )
}

export default Menu
