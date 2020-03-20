import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import getColor from '../share/color'
import CoverImage from '../share/cover-image'

const MessageBox = styled(Container)`
  background: ${getColor('white')};
  position: absolute;
  top: 10.81rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 49.25rem;
  width: 100%;
  text-align: center;
`

function Heading() {
  return (
    <Container position="relative">
      <CoverImage src="/images/main-cover.png" height={15} />
      <MessageBox padding="2.5rem  0">
        <Text
          color="blue"
          fontSize={2.25}
          fontWeight="bold"
          inlineBlock
          margin="0 0.625rem 0 0"
        >
          프리미엄 물류센터,
        </Text>
        <Text color="blue" fontSize={2.25} inlineBlock>
          그 이상의 가치.
        </Text>
      </MessageBox>
    </Container>
  )
}

export default Heading
