import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import media from './media'

const ImageFrame = styled(Container)<{
  mobileHeight?: number
  opacity?: number
}>`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: ${({ opacity }) => (opacity !== undefined ? opacity : 0.4)};
    z-index: 1;
  }

  @media ${media.md} {
    ${({ mobileHeight }) =>
      mobileHeight &&
      `
      height: ${mobileHeight}rem;
    `}
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

function CoverImage({
  src,
  height,
  mobileHeight,
  opacity,
}: {
  src: string
  height: number
  mobileHeight: number
  opacity?: number
}) {
  return (
    <ImageFrame
      position="relative"
      overflow="hidden"
      height={height}
      opacity={opacity}
      mobileHeight={mobileHeight}
    >
      <Image src={src} />
    </ImageFrame>
  )
}

export default CoverImage
