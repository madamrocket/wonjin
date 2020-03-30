import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import getColor from '../share/color'
import Responsive from '../share/responsive'
import media from '../share/media'
import Text, { Emphasis } from '../share/text'

const BannerFrame = styled(Container)`
  width: 100%;
  background-color: ${getColor('deep_blue')};

  @media ${media.md} {
    padding: 1.5rem 0;
  }
`

const BannerContentContainer = styled(Container)`
  max-width: 40.5rem;
  width: 92.09%;
  margin: 0 auto;
`

export default function Banner() {
  return (
    <BannerFrame padding="2.5rem 0">
      <BannerContentContainer
        maxWidth="40.88rem"
        margin="0 auto"
        textAlign="left"
      >
        <Responsive target="pc">
          <Text color="white" fontSize={1.5} lignHeight={1.67}>
            물류 규모에 상관없이 우리의
            <Emphasis fontSize={1.5} color="green" margin="0 0.3125rem">
              모든 클라이언트는 VIP
            </Emphasis>
            입니다.
          </Text>
          <Container>
            <Text color="white" fontSize={1.5} lignHeight={1.67}>
              지금
              <Emphasis
                color="green"
                fontSize={1.5}
                lignHeight={1.67}
                margin="0 0 0 0.3125rem"
              >
                원진물류
              </Emphasis>
              와 만나보세요.
            </Text>
          </Container>
        </Responsive>
        <Responsive target="mo">
          <Text color="white" mobileFontSize={0.875} lignHeight={1.67}>
            물류 규모에 상관없이
          </Text>
          <Text color="white" mobileFontSize={0.875} lignHeight={1.67}>
            우리의
            <Emphasis mobileFontSize={0.875} color="green" margin="0 0.25rem">
              모든 클라이언트는 VIP
            </Emphasis>
            입니다.
          </Text>

          <Container>
            <Text color="white" mobileFontSize={0.875} lignHeight={1.67}>
              지금
              <Emphasis
                color="green"
                mobileFontSize={0.875}
                lignHeight={1.67}
                margin="0 0.25rem"
              >
                원진물류
              </Emphasis>
              와 만나보세요.
            </Text>
          </Container>
        </Responsive>
      </BannerContentContainer>
    </BannerFrame>
  )
}
