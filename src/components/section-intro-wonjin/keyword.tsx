import React from 'react'
import styled from 'styled-components'

import Containter from '../share/container'
import Text from '../share/text'
import { KEY_WORD } from './constants'
import getColor from '../share/color'

const KeywordFrame = styled(Containter)`
  text-align: center;
`

const Balloon = styled(Containter)`
  display: inline-block;
  border: 2px solid ${getColor('blue')};
  border-radius: 100%;
  text-align: center;
  padding: 3%;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`

function Keyword() {
  return (
    <KeywordFrame>
      {KEY_WORD.map((text, idx) => (
        <Balloon key={idx}>
          <Text
            color="blue"
            fontSize={1.125}
            lignHeight={1.35}
            fontWeight="bold"
          >
            {text}
          </Text>
        </Balloon>
      ))}
    </KeywordFrame>
  )
}

export default Keyword
