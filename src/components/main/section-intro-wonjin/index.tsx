import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import Text from '../../share/text'
import media from '../../share/media'
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

  @media ${media.md} {
    top: 2.938rem;
  }
`

function SectionIntroWonjin() {
  return (
    <>
      <Container position="relative">
        <Title>
          <Text
            fontSize={2.25}
            mobileFontSize={1.25}
            lignHeight={1.2}
            color="white"
            fontWeight="bold"
          >
            프리미엄 물류센터,
          </Text>
          <Text
            fontSize={2.25}
            lignHeight={1.2}
            mobileFontSize={1.25}
            color="white"
          >
            그 이상의 가치.
          </Text>
        </Title>
        <Heading
          image="/images/main-cover.png"
          imageHeight={26}
          mobileHeight={23}
        >
          <History />
        </Heading>
      </Container>
      <Keyword />
    </>
  )
}

export default SectionIntroWonjin
