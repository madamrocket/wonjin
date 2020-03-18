import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import { media } from '../share/media'
import Text from '../share/text'
import getColor from '../share/color'
import IconButton from '../share/icon-button'

const SectionCenterFrame = styled(Container)`
  background: ${getColor('lightGray')};
`

const SectionCenterContainer = styled(Container)`
  max-width: 81.25rem;
  margin: 0 auto;

  @media ${media.md} {
    max-width: 39.5rem;
  }
`

const TextContainer = styled(Container)`
  max-width: 19.88rem;
  display: inline-block;
`

function SectionIntroCenter() {
  return (
    <SectionCenterFrame>
      <SectionCenterContainer padding="6.5rem 3% 4.5rem 3%">
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
          <IconButton width="19.88rem" color="blue">
            원진물류센터 둘러보기
          </IconButton>
        </TextContainer>
      </SectionCenterContainer>
    </SectionCenterFrame>
  )
}

export default SectionIntroCenter
