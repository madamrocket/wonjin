import React from 'react'
import styled from 'styled-components'

import Containter from '../../share/container'
import media from '../../share/media'
import Text from '../../share/text'
import getColor from '../../share/color'
import data from './data.json'

interface Keyword {
  title: string
  body: string
  image: string
}

const KeywordFrame = styled(Containter)`
  @media ${media.md} {
    padding: 1.25rem 0 2.25rem 0;
  }
`

const KeyWrodBox = styled(Containter)`
  width: 33.3%;
  display: inline-block;
  text-align: center;

  @media ${media.md} {
    display: block;
    margin: 0 auto;
    width: 17.19rem;
    padding-left: 4.25rem;
    text-align: left;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

const Icon = styled.span<{ src: string }>`
  width: 3rem;
  height: 3rem;
  background: ${getColor('green')};
  display: inline-block;
  border-radius: 100%;

  ${({ src }) => `
    background-image: url(${src});
    background-size: 3rem;
    background-repeat: no-repeat;
    background-position: center;
  `}

  @media ${media.md} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`

function Keyword() {
  return (
    <KeywordFrame
      maxWidth="64rem"
      width="92.09%"
      margin="0 auto"
      padding="2.438rem 2rem 2.5rem 2rem"
      textAlign="center"
    >
      {(data as Keyword[]).map(({ title, body, image }, idx) => (
        <KeyWrodBox key={idx} position="relative">
          <Icon src={image} />
          <Containter>
            <Text
              fontSize={1}
              mobileFontSize={0.9375}
              fontWeight="bold"
              margin="0.5rem 0 0.25rem 0"
            >
              {title}
            </Text>
            <Text lignHeight={1.43} mobileFontSize={0.75} fontSize={0.875}>
              {body}
            </Text>
          </Containter>
        </KeyWrodBox>
      ))}
    </KeywordFrame>
  )
}

export default Keyword
