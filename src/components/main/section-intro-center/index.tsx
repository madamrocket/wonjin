import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import Text from '../../share/text'
import getColor from '../../share/color'
import IconButton from '../../share/icon-button'
import Carousel from './carousel'
import media from '../../share/media'

const SectionCenterFrame = styled(Container)`
  padding: 3.25rem 0 2.5rem 0;
  background: ${getColor('lightGray')};
  overflow: hidden;

  @media ${media.md} {
    padding: 6.4% 0;
  }
`

const SectionCenterContainer = styled(Container)`
  width: 92.09%;
  max-width: 64rem;

  @media ${media.md} {
    width: 89.33%;
  }
`

const TextContainer = styled(Container)`
  position: relative;
`

function SectionIntroCenter() {
  return (
    <SectionCenterFrame>
      <SectionCenterContainer
        maxWidth="59rem"
        margin="0 auto"
        position="relative"
      >
        <TextContainer margin="0 0 1.438rem 0" textAlign="center">
          <Text
            fontSize={1.75}
            color="blue"
            fontWeight="bold"
            mobileFontSize={1.125}
            textAlign="center"
            margin="0 0 1.5rem 0"
          >
            Our Centers
          </Text>
          <Text
            fontWeight={500}
            mobileineHeight={1.69}
            textAlign="center"
            margin="0 0 1.5rem 0"
          >
            원하시는 조건을 알려주세요. 원진물류가 최적의 창고를 찾아드립니다.
          </Text>
          <IconButton width="10.19rem" color="blue">
            원진물류센터 둘러보기
          </IconButton>
        </TextContainer>
        <Carousel />
      </SectionCenterContainer>
    </SectionCenterFrame>
  )
}

export default SectionIntroCenter
