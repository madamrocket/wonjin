import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import getColor from '../share/color'
import { Center } from './types'

const TableFrame = styled(Container)`
  max-height: 27.75rem;
  overflow: auto;
  padding: 0.75rem 1.5rem;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
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
    <TableFrame margin="0 0  1.5rem 0">
      {Object.keys(info).map((key: string, idx) => {
        return (
          <Container key={idx}>
            <Label
              fontSize={0.875}
              fontWeight="bold"
              color="lightBlack"
              lignHeight={2.25}
            >
              {key}
            </Label>
            <Description key={idx} fontSize={0.875} lignHeight={2.25}>
              {info[key]}
            </Description>
          </Container>
        )
      })}
    </TableFrame>
  )
}
