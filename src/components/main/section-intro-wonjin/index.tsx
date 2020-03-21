import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import Text from '../../share/text'
import Heading from '../../heading'
import History from './history'
import Keyword from './keyword'

const ContentFrame = styled.div`
  padding: 4.188rem 0 3rem 0;
  max-width: 81.25rem;
  margin: 0 auto;
`

function SectionIntroWonjin() {
  return (
    <>
      <Heading image="/images/main-cover.png">
        <Container textAlign="center">
          <Text
            color="blue"
            fontSize={2.25}
            fontWeight="bold"
            margin="0 0.625rem 0 0"
            inlineBlock
          >
            프리미엄 물류센터,
          </Text>
          <Text inlineBlock color="blue" fontSize={2.25}>
            그 이상의 가치.
          </Text>
        </Container>
      </Heading>
      <ContentFrame>
        <Keyword />
        <History />
      </ContentFrame>
    </>
  )
}

export default SectionIntroWonjin
