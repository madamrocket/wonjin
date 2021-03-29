import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import Text from '../../share/text'
import media from '../../share/media'

const HistoryFrame = styled(Container)`
  @media ${media.md} {
    padding: 1rem 1.25rem;
  }
`

function History() {
  return (
    <HistoryFrame padding="1.438rem 2.063rem 0.5625rem 2.063rem">
      <Text
        margin="0 0 0.875rem 0"
        fontWeight="bold"
        fontSize={2}
        lignHeight={1.4}
        mobileFontSize={1.25}
      >
        NEWS
      </Text>
      <Text
        margin="0 0 0.875rem 0"
        fontWeight="bold"
        fontSize={1.25}
        lignHeight={1.4}
        mobileFontSize={1.25}
      >
        용인 백암 FRESH 센터 <br /> 용인 양지 FRESH 센터 오픈 !
      </Text>

      <Text
        lignHeight={1.43}
        fontSize={0.875}
        mobileFontSize={0.8125}
        fontWeight={400}
      >
        상담문의 <br /> · 010-5204-4512 이현주 차장 <br /> · 010-9262-5274
        윤석준 차장
      </Text>
    </HistoryFrame>
  )
}

export default History
