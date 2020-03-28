import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import media from '../../share/media'
import Text from '../../share/text'
import Heading from '../../heading'
import History from './history'
import Keyword from './keyword'

const ContentFrame = styled.div`
  padding: 4.188rem 0 3rem 0;
  max-width: 81.25rem;
  margin: 0 auto;

  @media ${media.md} {
    padding: 13.06% 0 9.6% 0;
  }
`

const Title = styled(Container)`
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 2.188rem;
  transform: translateX(-50%);
  max-width: 64rem;
  width: 92.09%;
`

function SectionIntroWonjin() {
  return (
    <>
      <Container position="relative">
        <Title>
          <Text
            fontSize={2.25}
            color="white"
            fontWeight="bold"
            margin="0 0 0.5625rem 0"
          >
            프리미엄 물류센터,
          </Text>
          <Text fontSize={2.25} color="white">
            그 이상의 가치.
          </Text>
        </Title>
        <Heading image="/images/main-cover.png" imageHeight={21}>
          <Container>
            <Text
              margin="0 0 0.875rem 0"
              fontWeight="bold"
              fontSize={2}
              lignHeight={1.4}
              mobileFontSize={1.25}
            >
              Since 1993
            </Text>
            <Text
              color="lightBlack"
              lignHeight={1.73}
              fontSize={0.9375}
              mobileFontSize={0.8125}
            >
              원진물류는 1993년부터 국내 유수 기업에 물류 시설을 제공하며 성장해
              온 최장수 물류센터 전문기업입니다. 최첨단 물류센터를 직접
              운영하며, 고객사 공급망에 대한 치밀한 분석과 현장 중심의 풍부한 물
              류 경험을 바탕으로 고객사 맞춤형의 물류 센터 솔루션을 제공합니다.
            </Text>
          </Container>
        </Heading>
      </Container>
      <ContentFrame>
        <Keyword />
        <History />
      </ContentFrame>
    </>
  )
}

export default SectionIntroWonjin
