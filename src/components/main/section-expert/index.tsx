import React from 'react'
import styled from 'styled-components'

import data from './data.json'
import ExpertCard from './expert-card'
import Container from '../../share/container'
import media from '../../share/media'
import Text from '../../share/text'

const SectionExpertFrame = styled(Container)`
  max-width: 81.25rem;
  text-align: center;
  margin: 0 auto;

  @media ${media.md} {
    width: 89.33%;
    text-align: left;
    padding: 8.53% 0 0 0;
  }
`

const ExpertCardContainer = styled(Container)`
  max-width: 49.25rem;
  overflow: hidden;
  column-gap: 52px;
  column-width: 368px;

  @media ${media.md} {
    margin: 6.4% 0 0 0;
  }
`

const HeadingTextContainer = styled(Container)`
  @media ${media.md} {
    text-align: left;
    margin: 0 0 3.2% 0;

    & > div {
      display: block;
    }
  }
`

function SectionExpert() {
  return (
    <SectionExpertFrame padding="3.5rem 0">
      <HeadingTextContainer margin="0 0 1.5rem 0">
        <Text
          color="green"
          lignHeight={2}
          fontSize={2}
          fontWeight="bold"
          margin="0 5px 0 0"
          mobileFontSize={1.125}
          inlineBlock
        >
          {`지금 원진만의 \n 물류 전문가를 만나보세요`}
        </Text>
      </HeadingTextContainer>
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
