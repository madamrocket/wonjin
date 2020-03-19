import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { MENUS } from './constants'
import { media } from '../share/media'

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

const Label = styled.li`
  float: left;
  height: 6rem;
  margin-right: 3.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 6rem;

  @media ${media.md} {
    padding: 0 0.907rem;
    text-align: center;
    margin: 0;
    height: 3.5rem;
    line-height: 3.5rem;
  }
`

function Menu() {
  return (
    <MenuFrame>
      {MENUS.map(({ id, label }) => (
        <Label key={id}>
          <Link to={id}>{label}</Link>
        </Label>
      ))}
    </MenuFrame>
  )
}

export default Menu
