import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../../share/container'
import Text from '../../share/text'
import getColor from '../../share/color'
import IconButton from '../../share/icon-button'
import Carousel from './carousel'
import ScrollCarousel from './scroll-carousel'
import Responsive from '../../share/responsive'
import media from '../../share/media'

const SectionCenterFrame = styled(Container)`
  background: ${getColor('lightGray')};

  @media ${media.md} {
    padding: 2.25rem 0;
  }
`

const SectionCenterContainer = styled(Container)`
  @media ${media.md} {
    width: 100%;
    padding-left: 1.25rem;
  }
`

const TextContainer = styled(Container)`
  @media ${media.md} {
    text-align: left;

    & > div {
      text-align: left;
    }
    margin: 0 0 1.25rem 0;
  }
`

const ContentText = styled(Text)`
  @media ${media.md} {
    width: 13.5rem;
  }
`

function SectionIntroCenter() {
  return (
    <SectionCenterFrame padding="3.25rem 0 2.5rem 0" overflow="hidden">
      <SectionCenterContainer
        width="92.09%"
        maxWidth="64rem"
        margin="0 auto"
        position="relative"
      >
        <TextContainer
          position="relative"
          margin="0 0 1.438rem 0"
          textAlign="center"
        >
          <Text
            fontSize={1.75}
            color="blue"
            fontWeight="bold"
            mobileFontSize={1.25}
            textAlign="center"
            margin="0 0 1.5rem 0"
            mobileineMargin="0 0 0.5rem 0"
          >
            Our Centers
          </Text>
          <ContentText
            fontWeight={500}
            mobileineHeight={1.69}
            textAlign="center"
            margin="0 0 1.5rem 0"
            mobileFontSize={0.8125}
            mobileineMargin="0 0 1.25rem 0"
          >
            원하시는 조건을 알려주세요. 원진물류가 최적의 창고를 찾아드립니다.
          </ContentText>
          <Link to="/center">
            <IconButton width="10.19rem" color="blue">
              원진물류센터 둘러보기
            </IconButton>
          </Link>
        </TextContainer>
        <Responsive target="pc">
          <Carousel />
        </Responsive>
      </SectionCenterContainer>
      <Responsive target="mo">
        <ScrollCarousel />
      </Responsive>
    </SectionCenterFrame>
  )
}

export default SectionIntroCenter
