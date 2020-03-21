import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import getColor from '../share/color'

const MessageFrame = styled(Container)`
  position: absolute;
  top: -8.688rem;
  left: 50%;
  transform: translate(-50%);
  background: ${getColor('white')};
`

function Message() {
  return (
    <MessageFrame padding="3.563rem 9.875rem 3.25rem 4.188rem">
      <Container>
        <Text fontWeight="bold" color="blue" inlineBlock fontSize={1.75}>
          유통 4.0
        </Text>
        <Text color="blue" inlineBlock fontSize={1.75}>
          시대, 원진물류는
        </Text>
      </Container>
      <Container>
        <Text inlineBlock fontWeight="bold" fontSize={2.25}>
          온. 오프라인 복합유통
        </Text>
        <Text inlineBlock fontSize={2.25}>
          을 위한
        </Text>
      </Container>
      <Container>
        <Text inlineBlock fontWeight="bold" fontSize={2.25}>
          {`‘조금 다른’ `}
        </Text>
        <Text inlineBlock fontSize={2.25}>{` 물류 서비스를 제공합니다.`}</Text>
      </Container>
    </MessageFrame>
  )
}

export default Message
