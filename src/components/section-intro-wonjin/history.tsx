import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import { media } from '../share/media'

const HistoryFrame = styled(Container)`
  flex: 1;
  order: 1;

  @media ${media.md} {
    order: 2;
    max-width: 48rem;
    width: 100%;
    margin: 4rem auto 0 auto;
  }
`

const HistoryText = styled(Text)`
  @media ${media.md} {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`

function History() {
  return (
    <HistoryFrame margin="6.5rem 0 0 0">
      <HistoryText fontWeight="bold" fontSize={2.75}>
        Since 1993
      </HistoryText>
      <Text color="lightBlack" lignHeight={1.67}>
        원진물류는 1993년부터 국내 유수 기업에 물류 시설을 제공하며 성장해 온
        최장수 물류센터 전문기업입니다. 최첨단 물류센터를 직접 운영하며, 고객사
        공급망에 대한 치밀한 분석과 현장 중심의 풍부한 물 류 경험을 바탕으로
        고객사 맞춤형의 물류 센터 솔루션을 제공합니다.
      </Text>
    </HistoryFrame>
  )
}

export default History
