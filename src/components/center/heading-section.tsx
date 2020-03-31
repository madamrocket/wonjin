import React, { useMemo } from 'react'

import Container from '../share/container'
import Text from '../share/text'
import Tabs from '../tabs'
import { Center } from './types'

interface HeadingSectionProps {
  centers: Center[]
  selectedId: number
  onClick: (id: number) => void
}

export default function HeadingSection({
  onClick,
  centers,
  selectedId,
}: HeadingSectionProps) {
  const options = useMemo(
    () =>
      centers.map(({ id, name }) => ({
        label: name,
        value: id,
      })),
    [],
  )
  return (
    <Container
      maxWidth="64rem"
      position="relative"
      textAlign="center"
      width="92.09%"
      margin="0 auto"
    >
      <Text
        margin="2.25rem 0"
        mobileineMargin="1.5rem 0"
        color="blue"
        fontSize={2}
        fontWeight="bold"
        textAlign="center"
      >
        센터 소개
      </Text>
      <Tabs
        options={options}
        value={selectedId}
        onChange={onClick}
        bottomSpancing={1.25}
        mobileSideSpancing={0.5}
        mobileBottomSpancing={1.25}
      />
    </Container>
  )
}
