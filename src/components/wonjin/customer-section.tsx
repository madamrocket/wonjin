import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import media from '../share/media'
import Logos from './logo'
import { LOGOS } from './constants'

const CustomerSectionFrame = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  margin: 0 auto;
  padding: 6.063rem 0 2rem 0;

  @media ${media.md} {
    padding: 2.25rem 0 0.25rem 0;
  }
`

const LogoContainer = styled(Container)`
  max-width: 49.25rem;
  margin: 0 auto;
`

const Title = styled(Text)`
  @media ${media.md} {
    margin: 0 0 1.5rem 0;
  }
`

export default function CustomerSection() {
  return (
    <CustomerSectionFrame>
      <Title
        color="blue"
        fontWeight="bold"
        fontSize={2}
        textAlign="center"
        margin="0 0 3.75rem 0"
        mobileFontSize={1.25}
      >
        주요 고객사
      </Title>

      <LogoContainer>
        <Logos title="제조사 및 브랜드" data={LOGOS[0]} />
        <Logos title="물류 및 유통사" data={LOGOS[1]} />
      </LogoContainer>
    </CustomerSectionFrame>
  )
}
