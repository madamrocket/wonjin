import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { MENUS } from './constants'
import getColor from '../share/color'

const MenuFrame = styled.ul`
  float: right;
`

const A = styled(Link)`
  display: inline-block;
  vertical-align: top;

  &:not(:last-child) {
    margin-right: 2.125rem;
  }
`

const Label = styled.li<{
  active?: boolean
}>`
  position: relative;
  float: left;
  height: 4rem;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 4rem;

  ${({ active }) =>
    active &&
    `
    color: ${getColor('blue')};

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
        <A to={`/${id}`}>
          <Label key={id} active={parsedPathname === id}>
            {label}
          </Label>
        </A>
      ))}
    </MenuFrame>
  )
}

export default Menu
