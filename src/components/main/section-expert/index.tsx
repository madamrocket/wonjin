import React from 'react'
import styled from 'styled-components'

import data from './data.json'
import ExpertCard from './expert-card'
import Container from '../../share/container'
import media from '../../share/media'
import Text from '../../share/text'

const SectionExpertFrame = styled(Container)`
  @media ${media.md} {
    width: 89.33%;
    text-align: left;
    padding: 2.25rem 0;
  }
`

const ExpertCardContainer = styled(Container)`
  overflow: hidden;

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

const ContentTitle = styled(Text)`
  @media ${media.md} {
    width: 17.81rem;
    word-break: keep-all;
  }
`

function SectionExpert() {
  const handleOpenLink = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <SectionExpertFrame
      width="92.09%"
      maxWidth="64rem"
      margin="0 auto"
      padding="3.75rem 0 0 0"
      textAlign="center"
    >
      <HeadingTextContainer margin="0 0 0.75rem 0">
        <Text
          color="green"
          fontSize={2}
          fontWeight="bold"
          mobileFontSize={1.25}
          margin="0 0.5rem 0 0"
          inlineBlock
        >
          {`지금 원진만의 \n 물류 전문가를 만나보세요`}
        </Text>
      </HeadingTextContainer>
      <ContentTitle
        fontWeight={500}
        lignHeight={1.69}
        mobileFontSize={0.8125}
        mobileineMargin="0 0 1.5rem 0"
      >
        탄탄한 물류 전문인력으로 구성된 원진물류 팀은 고객사의 성장과 성공을
        가장 가까이에서 지원합니다.
      </ContentTitle>
      <ExpertCardContainer margin="2rem auto 0 auto">
        {data.map((card, key) => (
          <ExpertCard key={key} card={card} onClick={handleOpenLink} />
        ))}
      </ExpertCardContainer>
    </SectionExpertFrame>
  )
}

export default SectionExpert
