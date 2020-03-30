import React from 'react'
import styled from 'styled-components'

import Heading from '../heading'
import Container from '../share/container'
import media from '../share/media'
import Text from '../share/text'

const ContentContainer = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  padding: 0 2rem;
  margin: 0.5rem auto 0 auto;

  @media ${media.md} {
    margin: 4.188rem 0 0 0;
  }
`

const MessageContainer = styled(Container)`
  @media ${media.md} {
    & > div {
      display: block;
    }

    padding: 0.875rem 0 0.875rem 1.5rem;
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
      >
        <MessageContainer textAlign="left" padding="2rem 2rem 3.438rem 2rem">
          <Text color="blue" fontSize={2.25} mobileFontSize={1.25} inlineBlock>
            물류의 새로운 길,
          </Text>
          <Text
            color="blue"
            fontSize={2.25}
            mobileFontSize={1.25}
            fontWeight="bold"
            inlineBlock
          >
            지금 원진물류를 만나보세요.
          </Text>
        </MessageContainer>
      </Heading>
      <ContentContainer>
        <Text fontSize={2} mobileFontSize={1.25} fontWeight="bold">
          {`이제 물류가 곧, \n 귀사의 경쟁력이 됩니다.`}
        </Text>
        <Container margin="1.625rem 0 0 0">
          <Text color="lightBlack" mobileFontSize={0.8125} lignHeight={1.75}>
            원진물류는 1993년부터 국내 유수 기업에 물류 시설을 제공하며 성장해
            온 최장수 물류센터 전문 기 업 입니다. 최첨단 물류센터를 직접
            운영하며, 고객사 공급망에 대한 치밀한 분석과 현장 중심의 풍부 한
            물류 경험을 바탕으로 고객사 맞춤형의 물류 센터 솔루션을 제공합니다.
            아마존은 세상에서 가장 빠르고 똑똑한 물류 서비스를 제공하기 위해
            수백개의 물류 시설을 직접 구축 하여 운영합니다. 지금 운영하시거나
            계획하시는 몇 개의 물류 센터들로는 아마존 급의 대형 유통사와 경쟁할
            수 없습니다. 이제 기업들은 이러한 직면 과제에 대한 해답을 반드시
            찾아야 합니다. 원진물류가 그 해결책이 되어드리겠습니다.
          </Text>
        </Container>
      </ContentContainer>
    </>
  )
}
