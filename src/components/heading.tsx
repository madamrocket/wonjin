import React from 'react'
import styled from 'styled-components'

import Container from './share/container'
import Text from './share/text'
import getColor from './share/color'
import CoverImage from './share/cover-image'

const MessageBox = styled(Container)<{
  textAlign: string
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

  ${({ textAlign }) =>
    textAlign === 'left'
      ? `
        padding-left: 4.188rem;
        text-align: left;
  `
      : 'text-align: center;'}
`

interface HeadingType {
  title: string
  Linebreak?: boolean
  textAlign?: string
  image: string
  subTitle: string
  emphasisTitle?: boolean
  emphasisSubTitle?: boolean
  topSpancing?: string
  imageHeight?: number
}

function Heading({
  title,
  subTitle,
  emphasisTitle,
  emphasisSubTitle,
  Linebreak,
  image,
  textAlign,
  topSpancing,
  imageHeight = 15,
}: HeadingType) {
  return (
    <Container position="relative">
      <CoverImage src={image} height={imageHeight} />
      <MessageBox
        topSpancing={topSpancing}
        padding="2.5rem  0"
        textAlign={textAlign || 'center'}
      >
        <Text
          color="blue"
          fontSize={2.25}
          fontWeight={emphasisTitle ? 'bold' : 'normal'}
          inlineBlock={!Linebreak}
          margin="0 0.625rem 0 0"
        >
          {title}
        </Text>
        <Text
          color="blue"
          fontSize={2.25}
          fontWeight={emphasisSubTitle ? 'bold' : 'normal'}
          inlineBlock={!Linebreak}
        >
          {subTitle}
        </Text>
      </MessageBox>
    </Container>
  )
}

export default Heading
