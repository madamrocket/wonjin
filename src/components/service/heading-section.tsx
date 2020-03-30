import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import media from '../share/media'
import Text, { Emphasis } from '../share/text'
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
        opacity={0}
        padding="2.25rem 0"
      >
        <ContentContainer textAlign="left" padding="2rem">
          <Title margin="0 0 0.8125rem 0">
            <Text
              color="blue"
              fontSize={1.5}
              mobileFontSize={0.875}
              inlineBlock
            >
              <Emphasis
                color="blue"
                fontSize={1.5}
                mobileFontSize={0.875}
                margin="0 0.3125rem 0 0"
              >
                유통 4.0
              </Emphasis>
              시대, 원진물류는
            </Text>
          </Title>
          <Text fontSize={2.25} mobileFontSize={1.125} inlineBlock>
            <Emphasis fontSize={2.25} mobileFontSize={1.125}>
              온. 오프라인 복합유통
            </Emphasis>
            을 위한
          </Text>
          <Text fontSize={2.25} mobileFontSize={1.125}>
            <Emphasis
              fontSize={2.25}
              mobileFontSize={1.125}
              mobileineMargin="0 0.3125rem 0 0"
            >
              ‘조금 다른’
            </Emphasis>
            물류 서비스를 제공합니다.
          </Text>
        </ContentContainer>
      </Heading>
    </Container>
  )
}
