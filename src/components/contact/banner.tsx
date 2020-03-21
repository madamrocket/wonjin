import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import getColor from '../share/color'

const BannerFrame = styled(Container)`
  width: 100%;
  background-color: ${getColor('blue')};
`

const Text = styled.div`
  color: ${getColor('white')};
  font-size: 1.5rem;
  line-height: 1.67;
`

const Emphasis = styled.div<{ margin?: string }>`
  display: inline-block;
  color: ${getColor('green')};
  font-size: 1.5rem;
  ${({ margin }) => margin && `margin: ${margin};`}
  line-height: 1.67;
  font-weight: bold;
`

export default function Banner() {
  return (
    <BannerFrame padding="2.5rem 0">
      <Container maxWidth="40.88rem" margin="0 auto" textAlign="left">
        <Text>
          물류 규모에 상관없이 우리의
          <Emphasis color="green" margin="0 0.3125rem">
            모든 클라이언트는 VIP
          </Emphasis>
          입니다.
        </Text>
        <Container>
          <Text>
            지금
            <Emphasis margin="0 0 0 0.3125rem">원진물류</Emphasis>와 만나보세요.
          </Text>
        </Container>
      </Container>
    </BannerFrame>
  )
}
