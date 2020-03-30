import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import Text from '../../share/text'
import media from '../../share/media'

const HistoryFrame = styled(Container)`
  padding: 1.438rem 2.063rem 0.5625rem 2.063rem;

  @media ${media.md} {
    padding: 1rem 1.25rem;
  }
`

function History() {
  return (
    <HistoryFrame>
      <Text
        margin="0 0 0.875rem 0"
        fontWeight="bold"
        fontSize={2}
        lignHeight={1.4}
        mobileFontSize={1.25}
      >
        Since 1993
      </Text>
      <Text lignHeight={1.73} fontSize={0.9375} mobileFontSize={0.8125}>
        원진물류는 1993년부터 국내 유수 기업에 물류 시설을 제공하며 성장해 온
        최장수 물류센터 전문기업입니다. 최첨단 물류센터를 직접 운영하며, 고객사
        공급망에 대한 치밀한 분석과 현장 중심의 풍부한 물 류 경험을 바탕으로
        고객사 맞춤형의 물류 센터 솔루션을 제공합니다.
      </Text>
    </HistoryFrame>
  )
}

export default History
