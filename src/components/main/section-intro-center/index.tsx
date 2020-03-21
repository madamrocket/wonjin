import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import Text from '../../share/text'
import getColor from '../../share/color'
import IconButton from '../../share/icon-button'
import Carousel from './carousel'

const SectionCenterFrame = styled(Container)`
  background: ${getColor('lightGray')};
  overflow: hidden;
`

const SectionCenterContainer = styled(Container)`
  width: 100%;
`

const TextContainer = styled(Container)`
  position: relative;
`

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`

function SectionIntroCenter() {
  return (
    <SectionCenterFrame padding="3.5rem 0 6.375rem 0">
      <SectionCenterContainer
        maxWidth="49.25rem"
        margin="0 auto"
        position="relative"
      >
        <TextContainer margin="0 0 2rem 0">
          <Text
            fontSize={2}
            color="blue"
            lignHeight={2}
            fontWeight="bold"
            margin="0 auto"
          >
            Our Centers
          </Text>
          <Text fontWeight={500} lignHeight={2}>
            {`원하시는 조건을 알려주세요. \n 원진물류가 최적의 창고를 찾아드립니다.`}
          </Text>
          <ButtonContainer>
            <IconButton width="10.19rem" color="blue">
              원진물류센터 둘러보기
            </IconButton>
          </ButtonContainer>
        </TextContainer>
        <Carousel />
      </SectionCenterContainer>
    </SectionCenterFrame>
  )
}

export default SectionIntroCenter