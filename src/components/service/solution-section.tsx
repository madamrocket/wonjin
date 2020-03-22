import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import { solutions } from './data.json'

const SolutaionFrame = styled(Container)`
  max-width: 40.5rem;
  width: 100%;
  margin: 8rem auto 4rem auto;
`

function SolutaionSection() {
  return (
    <SolutaionFrame>
      <Text fontSize={2} color="green" fontWeight="bold" margin="0 0 1.5rem 0">
        임대 솔루션
      </Text>
      {solutions.map(({ title, content }, idx) => (
        <Container>
          <Text
            color="blue"
            fontSize={1.25}
            lignHeight={1.8}
            fontWeight="bold"
            margin="0 0 0.5rem 0"
          >
            {title}
          </Text>
          <Text lignHeight={1.75} margin="0 0 2.5rem 0">
            {content}
          </Text>
        </Container>
      ))}
    </SolutaionFrame>
  )
}

export default SolutaionSection
