import React from 'react'
import styled from 'styled-components'

import Text from '../share/text'
import Container from '../share/container'
import media from '../share/media'

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

  @media ${media.md} {
    &:not(:last-child) {
      margin-right: 0;
    }

    &:nth-child(2n - 1) {
      margin-right: 1.25rem;
    }
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

const LogoContainer = styled(Container)`
  @media ${media.md} {
    max-width: 19rem;
    margin: 0 auto;
    padding: 0.5625rem 0 2.25rem 0;
  }
`

export default function Logos({ title, data }: LogosProps) {
  return (
    <>
      <Label fontSize={1.125} fontWeight="bold" mobileFontSize={0.8125}>
        {title}
      </Label>
      <LogoContainer margin="2.5rem 0 4.063rem 0" textAlign="center">
        {data.map((logo, idx) => (
          <Image name={logo} key={idx} />
        ))}
      </LogoContainer>
    </>
  )
}
