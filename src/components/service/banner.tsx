import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'

const BannerFrame = styled.div`
  background: url(/images/service-banner.png);
  padding: 3rem 0;
  background-size: 100%;
`

function Banner() {
  return (
    <BannerFrame>
      <Container maxWidth="40.5rem" textAlign="left" margin="0 auto">
        <Container margin="0 0 0.125rem 0">
          <Text
            color="white"
            inlineBlock
            fontSize={1.5}
            margin="0 0.3125rem 0 0"
          >
            원진물류는
          </Text>
          <Text color="white" fontWeight="bold" inlineBlock fontSize={1.5}>
            항상 고객사와 협의
          </Text>
          <Text color="white" inlineBlock fontSize={1.5}>
            하며
          </Text>
        </Container>
        <Container>
          <Text color="white" fontWeight="bold" inlineBlock fontSize={1.5}>
            3PL 서비스의 품질
          </Text>
          <Text color="white" inlineBlock fontSize={1.5}>
            을 높이기 위해 끊임없이 노력하고 있습니다.
          </Text>
        </Container>
      </Container>
    </BannerFrame>
  )
}

export default Banner
