import React from 'react'
import styled from 'styled-components'

import Container from './share/container'
import Text from './share/text'
import getColor from './share/color'
import CoverImage from './share/cover-image'

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

interface HeadingType {
  title: string
  emphasis: string
  Linebreak?: boolean
  image: string
}

function Heading({ title, emphasis, Linebreak, image }: HeadingType) {
  return (
    <Container position="relative">
      <CoverImage src={image} height={15} />
      <MessageBox padding="2.5rem  0">
        <Text
          color="blue"
          fontSize={2.25}
          fontWeight="bold"
          inlineBlock={!Linebreak}
          margin="0 0.625rem 0 0"
        >
          {title}
        </Text>
        <Text color="blue" fontSize={2.25} inlineBlock={!Linebreak}>
          {emphasis}
        </Text>
      </MessageBox>
    </Container>
  )
}

export default Heading
