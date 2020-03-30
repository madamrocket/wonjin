import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import { solutions } from './data.json'

const SolutaionFrame = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  margin: 5.75rem auto 1rem auto;
`

const SolutionContainer = styled(Container)`
  display: inline-block;
  width: 46%;
  margin: 0 0 2.875rem 0;

  &:nth-child(2n-1) {
    margin-right: 8%;
  }
`

function SolutaionSection() {
  return (
    <SolutaionFrame>
      <Text
        fontSize={1.5}
        color="green"
        fontWeight="bold"
        margin="0 0  1.25rem 0"
      >
        임대 솔루션
      </Text>
      <Container>
        {solutions.map(({ title, content }, idx) => (
          <SolutionContainer key={idx}>
            <Text
              color="blue"
              fontSize={1.25}
              lignHeight={1.8}
              fontWeight="bold"
              margin="0 0 0.625rem 0"
            >
              {title}
            </Text>
            <Text fontSize={0.9375} lignHeight={1.75}>
              {content}
            </Text>
          </SolutionContainer>
        ))}
      </Container>
    </SolutaionFrame>
  )
}

export default SolutaionSection
