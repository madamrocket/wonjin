import React from 'react'
import styled from 'styled-components'

import Container from './share/container'
import media from './share/media'
import getColor from './share/color'
import CoverImage from './share/cover-image'

const MessageBox = styled(Container)<{
  topSpancing?: string
}>`
  background: ${getColor('white')};
  position: absolute;
  top: ${({ topSpancing }) => topSpancing || '10.81rem'};
  left: 50%;
  transform: translateX(-50%);
  max-width: 49.25rem;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign || 'center'};

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
  padding = '2.5rem  0',
}: HeadingType) {
  return (
    <Container position="relative">
      <CoverImage src={image} height={imageHeight} />
      <MessageBox topSpancing={topSpancing} padding={padding}>
        {children}
      </MessageBox>
    </Container>
  )
}

export default Heading
