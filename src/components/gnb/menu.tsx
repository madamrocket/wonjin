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

  @media ${media.md} {
    width: 100%;
    margin-right: auto;
  }
`

function Menu() {
  return (
    <MenuFrame>
      {MENUS.map(({ id, label }) => (
        <Text
          key={id}
          padding="1.375rem 1.313rem"
          fontSize={1.5}
          fontWeight="bold"
          inlineBlock
        >
          {label}
        </Text>
      ))}
    </MenuFrame>
  )
}

export default Menu
