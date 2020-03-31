import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import media from '../share/media'
import { solutions } from './data.json'

const SolutaionFrame = styled(Container)`
  @media ${media.md} {
    margin: 5.75rem auto 0 auto;
  }
`

const SolutionContainer = styled(Container)`
  display: inline-block;

  &:nth-child(2n-1) {
    margin-right: 8%;
  }

  @media ${media.md} {
    width: 100%;
    margin: 0 0 2.25rem 0;

    &:nth-child(2n-1) {
      margin-right: 0;
    }
  }
`

const Title = styled(Text)`
  @media ${media.md} {
    margin: 0 0 2rem 0;
    text-align: center;
  }
`

function SolutaionSection() {
  return (
    <SolutaionFrame
      maxWidth="64rem"
      width="92.09%"
      margin="5.75rem auto 1rem auto"
    >
      <Title
        fontSize={1.5}
        mobileFontSize={1.25}
        color="green"
        fontWeight="bold"
        margin="0 0 1.25rem 0"
      >
        임대 솔루션
      </Title>
      <Container>
        {solutions.map(({ title, content }, idx) => (
          <SolutionContainer key={idx} width="46%" margin="0 0 2.875rem 0">
            <Text
              color="blue"
              fontSize={1.25}
              mobileFontSize={1}
              lignHeight={1.8}
              fontWeight="bold"
              margin="0 0 0.625rem 0"
            >
              {title}
            </Text>
            <Text fontSize={0.9375} mobileFontSize={0.8125} lignHeight={1.75}>
              {content}
            </Text>
          </SolutionContainer>
        ))}
      </Container>
    </SolutaionFrame>
  )
}

export default SolutaionSection
