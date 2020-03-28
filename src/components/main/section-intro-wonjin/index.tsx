import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import Text from '../../share/text'
import Heading from '../../heading'
import History from './history'
import Keyword from './keyword'

const Title = styled(Container)`
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 2.188rem;
  transform: translateX(-50%);
  max-width: 64rem;
  width: 92.09%;
`

function SectionIntroWonjin() {
  return (
    <>
      <Container position="relative">
        <Title>
          <Text
            fontSize={2.25}
            color="white"
            fontWeight="bold"
            margin="0 0 0.5625rem 0"
          >
            프리미엄 물류센터,
          </Text>
          <Text fontSize={2.25} color="white">
            그 이상의 가치.
          </Text>
        </Title>
        <Heading image="/images/main-cover.png" imageHeight={21}>
          <History />
        </Heading>
      </Container>
      <Keyword />
    </>
  )
}

export default SectionIntroWonjin
