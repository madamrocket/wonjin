import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import media from '../share/media'
import { Center } from './types'

const TableFrame = styled(Container)`
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;

  @media ${media.md} {
    border-bottom: 2px solid #333;
    padding: 0.5rem;
    margin: 0 0 1.5rem 0;
  }
`

const Label = styled(Text)`
  display: inline-block;
  width: 40%;
`

const Description = styled(Text)`
  display: inline-block;
  width: 60%%;
`

export default function InfoTable({ info }: { info: Center['info'] }) {
  return (
    <TableFrame
      maxWidth="27.75rem"
      margin="0 0 1.5rem 0"
      overflow="auto"
      padding="0.75rem 1.5rem"
    >
      {Object.keys(info).map((key: string, idx) => {
        return (
          <Container key={idx}>
            <Label
              fontSize={0.875}
              fontWeight="bold"
              color="lightBlack"
              lignHeight={2.25}
              mobileFontSize={0.75}
              mobileineHeight={2.17}
            >
              {key}
            </Label>
            <Description
              key={idx}
              fontSize={0.875}
              mobileFontSize={0.75}
              mobileineHeight={2.17}
              lignHeight={2.25}
            >
              {info[key]}
            </Description>
          </Container>
        )
      })}
    </TableFrame>
  )
}
