import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import getColor from '../share/color'
import { media } from '../share/media'

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  rigth: 0;
  bottom: 0;
  max-width: 100%;
`

const MessageBox = styled(Container)`
  background: ${getColor('white')};
  position: absolute;
  top: 21.25rem;
  right: 8.33333%;

  @media ${media.md} {
    transform: translateX(-50%);
    left: 50%;
    right: auto;
  }
`

function Heading() {
  return (
    <Container position="relative">
      <Container position="relative" overflow="hidden" height={30}>
        <CoverImage src="/images/main.png" />
      </Container>
      <MessageBox padding="3.25rem  2.938rem">
        <Text color="blue" fontSize={3} fontWeight="bold" inlineBlock>
          프리미엄 물류센터,
        </Text>
        <Text color="blue" fontSize={3} inlineBlock>
          그 이상의 가치.
        </Text>
      </MessageBox>
    </Container>
  )
}

export default Heading
