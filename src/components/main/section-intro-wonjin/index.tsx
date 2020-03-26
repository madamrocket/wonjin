import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import media from '../../share/media'
import Text from '../../share/text'
import Heading from '../../heading'
import History from './history'
import Keyword from './keyword'

const ContentFrame = styled.div`
  padding: 4.188rem 0 3rem 0;
  max-width: 81.25rem;
  margin: 0 auto;

  @media ${media.md} {
    padding: 13.06% 0 9.6% 0;
  }
`

function SectionIntroWonjin() {
  return (
    <>
      <Heading image="/images/main-cover.png" imageHeight={24.69}>
        <Container>
          <Text
            fontSize={2}
            color="white"
            fontWeight="bold"
            margin="0 0 0.5625rem 0"
          >
            프리미엄 물류센터,
          </Text>
          <Text fontSize={2} color="white">
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
