import React from 'react'
import styled from 'styled-components'

import Container from './share/container'
import media from './share/media'
import getColor from './share/color'
import CoverImage from './share/cover-image'

const Content = styled(Container)<{
  topSpancing?: string
}>`
  z-index:1;
  background: ${getColor('white')};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 92.09%;
  max-width: 64rem;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  bottom: 0;

  ${({ topSpancing }) =>
    topSpancing &&
    `
    top: ${topSpancing};
    bottom: auto;
  `}

  @media ${media.md} {
    top: 6.813rem;
    width: 78%;
    padding: 4.74% 12.54%;
  }
`

interface HeadingType {
  textAlign?: string
  image: string
  topSpancing?: string
  imageHeight?: number
  children?: React.ReactNode
  padding?: string
}

function Heading({
  image,
  topSpancing,
  imageHeight = 15,
  children,
}: HeadingType) {
  return (
    <Container position="relative" height={imageHeight}>
      <CoverImage src={image} height={imageHeight} />
      <Content textAlign="left">{children}</Content>
    </Container>
  )
}

export default Heading
