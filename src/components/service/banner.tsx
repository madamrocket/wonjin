import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text, { Emphasis } from '../share/text'
import media from '../share/media'

const BannerFrame = styled.div`
  background: url(/images/service-banner.png);
  padding: 3rem 0;
  background-size: 100%;

  @media ${media.md} {
    padding: 1.25rem;
  }
`

const BannerContentContainer = styled(Container)`
  @media ${media.md} {
    max-width: 70.666%;
    margin: 0;
  }
`

function Banner() {
  return (
    <BannerFrame>
      <BannerContentContainer
        maxWidth="64rem"
        width="92.09%"
        textAlign="left"
        margin="0 auto"
      >
        <Container margin="0 0 0.125rem 0">
          <Text color="white" inlineBlock fontSize={1.5}>
            원진물류는
            <Emphasis color="white" fontSize={1.5}>
              항상 고객사와 협의
            </Emphasis>
            하며
          </Text>
        </Container>
        <Container>
          <Text color="white" inlineBlock fontSize={1.5}>
            <Emphasis color="white" fontSize={1.5}>
              3PL 서비스의 품질
            </Emphasis>
            을 높이기 위해 끊임없이 노력하고 있습니다.
          </Text>
        </Container>
      </BannerContentContainer>
    </BannerFrame>
  )
}

export default Banner
