import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import Logos from './logo'
import { LOGOS } from './constants'

const CustomerSectionFrame = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  margin: 0 auto;
  padding: 6.063rem 0 2rem 0;
`

const LogoContainer = styled(Container)`
  max-width: 49.25rem;
  margin: 0 auto;
`

export default function CustomerSection() {
  return (
    <CustomerSectionFrame>
      <Text
        color="blue"
        fontWeight="bold"
        fontSize={2}
        textAlign="center"
        margin="0 0 3.75rem 0"
      >
        주요 고객사
      </Text>

      <LogoContainer>
        <Logos title="제조사 및 브랜드" data={LOGOS[0]} />
        <Logos title="물류 및 유통사" data={LOGOS[1]} />
      </LogoContainer>
    </CustomerSectionFrame>
  )
}
