import React from 'react'
import styled from 'styled-components'

import { MENUS } from './constants'
import { media } from '../share/media'

const MenuFrame = styled.ul`
  float: right;

  @media ${media.md} {
    width: 100%;
    margin-right: auto;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
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
`

function Menu() {
  return (
    <MenuFrame>
      {MENUS.map(({ id, label }) => (
        <Label key={id}>{label}</Label>
      ))}
    </MenuFrame>
  )
}

export default Menu
