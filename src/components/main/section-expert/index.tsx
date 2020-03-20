import React from 'react'
import styled from 'styled-components'

import data from './data.json.js'
import ExpertCard from './expert-card'
import Container from '../../share/container'
import { media } from '../../share/media'
import Text from '../../share/text'

const SectionExpertFrame = styled(Container)`
  max-width: 81.25rem;
  text-align: center;
  margin: 0 auto;

  @media ${media.md} {
    max-width: 48rem;
  }
`

const ExpertCardContainer = styled(Container)`
  max-width: 49.25rem;
  overflow: hidden;
`

function SectionExpert() {
  return (
    <SectionExpertFrame padding="3.5rem 0">
      <Text
        color="green"
        lignHeight={2}
        margin="0 0 1.5rem 0 "
        fontSize={2}
        fontWeight="bold"
      >
        지금 원진만의 물류 전문가를 만나보세요
      </Text>
      <Text lignHeight={2} fontWeight={500}>
        {`탄탄한 물류 전문인력으로 구성된 원진물류 팀은 \n 고객사의 성장과 성공을가장 가까이에서 지원합니다.`}
      </Text>
      <ExpertCardContainer margin="2rem auto 0 auto">
        {data.map((card, key) => (
          <ExpertCard key={key} card={card} />
        ))}
      </ExpertCardContainer>
    </SectionExpertFrame>
  )
}

export default SectionExpert
