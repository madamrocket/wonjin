import React, { useState } from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'

const Logo = styled.div<{ name: string }>`
  display: inline-block;
  width: 8.875rem;
  height: 3.875rem;
  background-size: 100%;
  background-image: url(/images/${({ name }) => `logo-${name}-pc@3x.png`});

  &:not(:last-child) {
    margin-right: 1.875rem;
  }

  &:nth-child(4n + 4) {
    margin-right: 0;
  }
`

const CustomerSectionFrame = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  margin: 0 auto;
`

const LogoContainer = styled(Container)`
  max-width: 49.25rem;
  margin: 0 auto;
`

const Title = styled(Text)`
  font-size: 1.125rem;
  text-align: center;
  border-bottom: 1px solid;
  padding-bottom: 8px;
`

const LOGOS = [
  [
    'amore',
    'cocacola',
    'winia',
    'carrier',
    'daesang',
    'pulmuone',
    'cj-jedang',
    'dongseo',
  ],
  [
    'hd-glovis',
    'lotte-logis',
    'lotte-super',
    'dongwon',
    'coupang',
    'cj-logis',
    'musinsa',
    'hantouch',
  ],
]

export default function CustomerSection() {
  return (
    <CustomerSectionFrame>
      <Text
        color="blue"
        fontWeight="bold"
        fontSize={2}
        textAlign="center"
        margin="0 0 2.25rem 0"
      >
        주요 고객사
      </Text>

      <LogoContainer>
        <Title>제조사 및 브랜드</Title>
        <Container margin="2.5rem 0 4.063rem 0" textAlign="center">
          {LOGOS[0].map((logo, idx) => (
            <Logo name={logo} key={idx} />
          ))}
        </Container>
        <Title>물류 및 유통사</Title>
        <Container margin="2.5rem 0 4.063rem 0" textAlign="center">
          {LOGOS[1].map((logo, idx) => (
            <Logo name={logo} key={idx} />
          ))}
        </Container>
      </LogoContainer>
    </CustomerSectionFrame>
  )
}
