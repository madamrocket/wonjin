import React, { useState } from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import getColor from '../share/color'
import Tabs from '../tabs'

const TABS = [
  {
    value: 0,
    label: '제조사 및 브랜드',
  },
  {
    value: 1,
    label: '물류 및 유통사',
  },
]

const Logo = styled.div<{ name: string }>`
  display: inline-block;
  width: 8.875rem;
  height: 3.875rem;
  background-size: 100%;
  background-image: url(/images/${({ name }) => `logo-${name}-pc@3x.png`});

  &:not(:last-child) {
    margin-right: 9.26%;
  }

  &:nth-child(4n + 4) {
    margin-right: 0;
  }
`

const CustomerSectionFrame = styled(Container)`
  max-width: 49.25rem;
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
        <Tabs
          options={TABS}
          value={currentTab}
          onChange={(value) => setCurrentTab(value as number)}
        />
      </Container>
      <Container margin="2.5rem 0 4.063rem 0">
        {logos.map((logo, idx) => (
          <Logo name={logo} key={idx} />
        ))}
      </Container>
    </CustomerSectionFrame>
  )
}
