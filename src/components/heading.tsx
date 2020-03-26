import React from 'react'
import styled from 'styled-components'

import Container from './share/container'
import Text from './share/text'
import media from './share/media'
import getColor from './share/color'
import CoverImage from './share/cover-image'

const MessageBox = styled(Container)<{
  topSpancing?: string
}>`
  z-index:1;
  background: ${getColor('white')};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 59rem;
  width: 100%;
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

const Title = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 4.313rem;
  transform: translateX(-50%);
  max-width: 59rem;
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
      <Title maxWidth="64rem">{children}</Title>
      <MessageBox
        textAlign="left"
        topSpancing={topSpancing}
        padding="1.25rem 2.063rem"
      >
        <Text
          margin="0 0 0.75rem 0"
          fontWeight="bold"
          fontSize={2}
          lignHeight={1.4}
          mobileFontSize={1.25}
        >
          Since 1993
        </Text>
        <Text color="lightBlack" lignHeight={1.75} mobileFontSize={0.8125}>
          원진물류는 1993년부터 국내 유수 기업에 물류 시설을 제공하며 성장해 온
          최장수 물류센터 전문기업입니다. 최첨단 물류센터를 직접 운영하며,
          고객사 공급망에 대한 치밀한 분석과 현장 중심의 풍부한 물 류 경험을
          바탕으로 고객사 맞춤형의 물류 센터 솔루션을 제공합니다.
        </Text>
      </MessageBox>
    </Container>
  )
}

export default Heading
