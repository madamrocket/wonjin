import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import media from './media'

const ImageFrame = styled(Container)`
  @media ${media.md} {
    height: 9.75rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: 0.4;
    z-index: 1;
  }
`

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
    <ImageFrame position="relative" overflow="hidden" height={height}>
      <Image src={src} />
    </ImageFrame>
  )
}

export default CoverImage
