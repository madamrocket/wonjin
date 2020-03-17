import React from 'react'
import styled from 'styled-components'

import data from './data.json'
import CompetencyCard from './compentency-card'
import Container from '../share/container'
import Text from '../share/text'

const SectionExpertFrame = styled(Container)`
  max-width: 81.25rem;
  text-align: center;
`

function SectionExpert() {
  return (
    <SectionExpertFrame padding="6rem 0">
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
      {data.map((card, key) => (
        <CompetencyCard key={key} card={card} />
      ))}
    </SectionExpertFrame>
  )
}

export default SectionExpert
