import React from 'react'
import styled from 'styled-components'

import Containter from '../share/container'
import Text from '../share/text'
import { KEY_WORD } from './constants'
import getColor from '../share/color'
import { media } from '../share/media'

const KeywordFrame = styled(Containter)`
  display: flex;
  flex: 1;
  order: 2;
  margin: 11rem 0 0 6.71875%;

  @media ${media.md} {
    order: 1;
    display: flex;
    justify-content: center;
    margin: 0;
  }
`

const Balloon = styled(Containter)`
  width: 9.875rem;
  height: 9.875rem;
  border: 2px solid ${getColor('blue')};
  border-radius: 100%;
  text-align: center;
  padding: 2.813rem;
  margin-right: 2rem;
`

function Keyword() {
  return (
    <KeywordFrame>
      {KEY_WORD.map((text, idx) => (
        <Balloon>
          <Text
            key={idx}
            color="blue"
            fontSize={1.5}
            lignHeight={1.33}
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
