import React from 'react'
import styled from 'styled-components'

import { MENUS } from './constants'
import Text from '../share/text'
import { media } from '../share/media'

const MenuFrame = styled.div`
  width: 776px;
  display: flex;
  justify-content: space-around;
  margin-right: 7.5%;
  float: right;

  @media ${media.md} {
    width: 100%;
    margin-right: auto;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    float: none;
  }
`

const Label = styled(Text)`
  height: 104px;
`

function Menu() {
  return (
    <MenuFrame>
      {MENUS.map(({ id, label }) => (
        <Label
          key={id}
          padding="0 1.313rem"
          fontSize={1.5}
          fontWeight="bold"
          inlineBlock
          lignHeight="104px"
        >
          {label}
        </Label>
      ))}
    </MenuFrame>
  )
}

export default Menu
