import React, { useState } from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import getColor from '../share/color'

const TABS = ['제조사 및 브랜드', '물류 및 유통사']

const Logo = styled.div<{ name: string }>`
  width: 25%;
  height: 3.875rem;
  background-size: 100%;
  background: url(/images/${({ name }) => `logo-${name}-pc@3x.png`}) no-repeat;
`

const CustomerSectionFrame = styled(Container)`
  max-width: 40.94rem;
  margin: 0 auto;
`

const Tab = styled.div<{
  active: boolean
}>`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  ${({ active }) =>
    active &&
    `
      font-weight: bold;
      color: ${getColor('green')};

      &:after {
          content: '';
          display: block;
          width: 100%;
          height: 3px;
          background-color: ${getColor('green')};
          margin-top: 4px;
      }
    `}
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
  const [currentTab, setCurrentTab] = useState(0)

  const logos = LOGOS[currentTab]

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
      <Container textAlign="center">
        {TABS.map((tab, idx) => (
          <Tab active={idx === currentTab} onClick={() => setCurrentTab(idx)}>
            {tab}
          </Tab>
        ))}
      </Container>
      <Container>
        {logos.map((logo, idx) => (
          <Logo name={logo} key={idx} />
        ))}
      </Container>
    </CustomerSectionFrame>
  )
}
