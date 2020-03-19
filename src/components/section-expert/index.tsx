import React from 'react'
import styled from 'styled-components'

import data from './data.json'
import ExpertCard from './expert-card'
import Container from '../share/container'
import { media } from '../share/media'
import Text from '../share/text'

const SectionExpertFrame = styled(Container)`
  max-width: 81.25rem;
  text-align: center;
  margin: 0 auto;

  @media ${media.md} {
    max-width: 48rem;
  }
`

const ExpertCardContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;

  @media ${media.md} {
    flex-direction: column;
  }
`

function SectionExpert() {
  return (
    <SectionExpertFrame padding="6rem 3%">
      <Text
        color="blue"
        lignHeight={2}
        margin="0 0 1.5rem 0 "
        fontSize={2.25}
        fontWeight="bold"
      >
        지금 원진만의 물류 전문가를 만나보세요
      </Text>
      <Text lignHeight={1.67} fontSize={1.5} fontWeight={500}>
        탄탄한 물류 전문인력으로 구성된 원진물류 팀은 고객사의 성장과 성공을
        가장 가까이에서 지원합니다.
      </Text>
      <ExpertCardContainer>
        {data.map((card, key) => (
          <ExpertCard key={key} card={card} />
        ))}
      </ExpertCardContainer>
    </SectionExpertFrame>
  )
}

export default SectionExpert
