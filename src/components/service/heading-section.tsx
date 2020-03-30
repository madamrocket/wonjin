import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import media from '../share/media'
import Text from '../share/text'
import Heading from '../heading'

const ContentContainer = styled(Container)`
  @media ${media.md} {
    padding: 1.25rem 1.688rem;
  }
`

const Title = styled(Container)`
  @media ${media.md} {
    margin: 0 0 0.25rem 0;
  }
`

export default function HeadingSection() {
  return (
    <Container position="relative">
      <Heading
        image="/images/service-cover.png"
        topSpancing={11.31}
        imageHeight={20}
        mobileHeight={8.5}
        mobileTopSpancing={5.438}
        padding="2.25rem 0"
      >
        <ContentContainer textAlign="left" padding="2rem">
          <Title margin="0 0 0.8125rem 0">
            <Text
              color="blue"
              fontSize={1.5}
              fontWeight="bold"
              mobileFontSize={0.875}
              inlineBlock
              margin="0 0.3125rem 0 0"
            >
              유통 4.0
            </Text>
            <Text
              color="blue"
              fontSize={1.5}
              mobileFontSize={0.875}
              inlineBlock
            >
              시대, 원진물류는
            </Text>
          </Title>
          <Text
            fontSize={2.25}
            mobileFontSize={1.125}
            fontWeight="bold"
            inlineBlock
          >
            온. 오프라인 복합유통
          </Text>
          <Text fontSize={2.25} mobileFontSize={1.125} inlineBlock>
            을 위한
          </Text>
          <Text
            fontSize={2.25}
            mobileFontSize={1.125}
            margin="0 0 0 0.3125rem"
            fontWeight="bold"
            inlineBlock
          >
            ‘조금 다른’
          </Text>
          <Text fontSize={2.25} mobileFontSize={1.125} inlineBlock>
            물류 서비스를 제공합니다.
          </Text>
        </ContentContainer>
      </Heading>
    </Container>
  )
}
