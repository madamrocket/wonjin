import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import { media } from '../share/media'
import Text from '../share/text'
import getColor from '../share/color'
import IconButton from '../share/icon-button'
import Carousel from './carousel'

const SectionCenterFrame = styled(Container)`
  background: ${getColor('lightGray')};
  min-height: 30.25rem;
`

const SectionCenterContainer = styled(Container)`
  max-width: 81.25rem;
  margin: 0 auto;
  overflow: hidden;

  @media ${media.md} {
    max-width: 48rem;
  }
`

const TextContainer = styled(Container)`
  max-width: 19.88rem;
  display: inline-block;
`

const ButtonContainer = styled.div`
  position: absolute;
  left: 3%;
  top: 22rem;

  @media ${media.md} {
    top: 15.88rem;
    left: auto;
    right: 0;
  }
`

function SectionIntroCenter() {
  return (
    <SectionCenterFrame>
      <SectionCenterContainer padding="6.5rem 0 4.5rem 3%" position="relative">
        <TextContainer>
          <Text
            fontSize={2.25}
            color="blue"
            lignHeight={2}
            fontWeight="bold"
            margin="0 0 1.5rem 0"
          >
            Our Centers
          </Text>
          <Text
            fontSize={1.5}
            fontWeight={500}
            lignHeight={1.67}
            margin="0 0 3.375rem 0"
          >
            원하시는 조건을 알려주세요. 원진물류가 최적의 창고를 찾아드립니다.
          </Text>
        </TextContainer>
        <ButtonContainer>
          <IconButton width="19.88rem" color="blue">
            원진물류센터 둘러보기
          </IconButton>
        </ButtonContainer>
        <Carousel />
      </SectionCenterContainer>
    </SectionCenterFrame>
  )
}

export default SectionIntroCenter
