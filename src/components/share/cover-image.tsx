import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  rigth: 0;
  bottom: 0;
  max-width: 100%;
`

function CoverImage({ src, height }: { src: string; height: number }) {
  return (
    <Container position="relative" overflow="hidden" height={height}>
      <Image src={src} />
    </Container>
  )
}

export default CoverImage