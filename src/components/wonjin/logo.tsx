import React from 'react'
import styled from 'styled-components'

import Text from '../share/text'
import Container from '../share/container'

const Image = styled.div<{ name: string }>`
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

const Label = styled(Text)`
  font-size: 1.125rem;
  text-align: center;
  border-bottom: 1px solid;
  padding-bottom: 8px;
`

interface LogosProps {
  title: string
  data: string[]
}

export default function Logos({ title, data }: LogosProps) {
  return (
    <>
      <Label fontSize="1.125" fontWeight="bold">
        {title}
      </Label>
      <Container margin="2.5rem 0 4.063rem 0" textAlign="center">
        {data.map((logo, idx) => (
          <Image name={logo} key={idx} />
        ))}
      </Container>
    </>
  )
}
