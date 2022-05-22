import React from 'react'
import styled from 'styled-components'

import Heading from '../heading'
import Container from '../share/container'
import media from '../share/media'
import Text, { Emphasis } from '../share/text'

const ContentContainer = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  padding: 0 2rem;
  margin: 0.5rem auto 0 auto;

  @media ${media.md} {
    margin: 5rem 0 0 0;
    padding: 0 0 0 2rem;
  }
`

const MessageContainer = styled(Container)`
  @media ${media.md} {
    & > div {
      display: block;
    }

    padding: 1rem 1.2rem;
  }
`

export default function HeadingSection() {
  return (
    <>
      <Heading
        image="/images/wonjin-intro-cover.png"
        imageHeight={20}
        mobileTopSpancing={2}
        mobileHeight={5}
        opacity={0}
      >
        <MessageContainer textAlign="left" padding="2rem 1rem 3.438rem 2rem">
          <Text color="blue" fontSize={2.25} mobileFontSize={1.25} inlineBlock>
            <Emphasis
              color="blue"
              fontSize={2.25}
              mobileFontSize={1.25}
              fontWeight="bold"
              inlineBlock
            >
              원진물류는 30년 이상 축적된 노하우를 바탕으로 물류센터 운영에 대한
              차별성을 가진 전문 운영사입니다.
            </Emphasis>
          </Text>
        </MessageContainer>
      </Heading>
      <ContentContainer>
        <Text fontSize={2} mobileFontSize={1.25} fontWeight="bold">
          {`이제 물류가 곧, \n 귀사의 경쟁력이 됩니다.`}
        </Text>
        <Container margin="1.625rem 0 0 0">
          <Text color="lightBlack" mobileFontSize={0.8125} lignHeight={1.75}>
            원진물류는 국내 교통의 요충지들에 최첨단 물류센터를 직접 운영하며,
            고객사 공급망에 대한 치밀한 분석과 현장 중심의 풍부한 물류 경험을
            바탕으로 고객사 맞춤형의 물류 센터 솔루션을 제공합니다. 원진물류는
            경영진에서부터 현장 최접점에 이르기까지 일체화된 노력으로 안전성과
            사용성을 확보한 적법한 물류 시설이 될 수 있도록 최선을 다하고
            있습니다.
          </Text>
        </Container>
      </ContentContainer>
    </>
  )
}
