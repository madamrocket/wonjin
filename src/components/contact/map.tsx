import React, { useState } from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import Tabs from '../tabs'

const MAPS = [
  {
    label: '본사',
    value: 0,
  },
  {
    label: '판교사무실',
    value: 1,
  },
]

const Empty = styled.div`
  width: 100%;
  height: 320px;
  background: #efefef;
  margin: 0 0 1.25rem 0;
`

export default function Map() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <Container
      maxWidth="40.5rem"
      width=" 92.09%"
      margin="0 auto"
      textAlign="center"
    >
      <Text
        color="blue"
        fontWeight="bold"
        fontSize={2}
        mobileFontSize={1.25}
        textAlign="center"
        margin="2.313rem auto 1.25rem auto"
        mobileineMargin="1.5rem 0"
      >
        문의하기
      </Text>
      <Tabs
        value={currentTab}
        options={MAPS}
        onChange={(value) => setCurrentTab(value as number)}
        sideSpancing={0.625}
        mobileSideSpancing={0.5}
        bottomSpancing={1.625}
        mobileBottomSpancing={1.125}
      />
      <Empty />
    </Container>
  )
}
