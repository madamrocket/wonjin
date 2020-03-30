import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import media from '../share/media'
import HistoryTable from './history-table'
import data from './data.json'

const HistoryFrame = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  margin: 0 auto;
`

const HistoryTableFrame = styled(Container)`
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  max-width: 40.44rem;
  max-height: 52.5rem;
  padding: 0.75rem 1.5rem;
  overflow-y: auto;
  margin: 0 auto;

  &:first-child {
    margin-right: 4.5%;
  }

  @media ${media.md} {
    width: 100%;
  }
`

const Title = styled(Text)`
  @media ${media.md} {
    margin: 2.25rem 0 1.5rem 0;
  }
`

export default function HistorySection() {
  return (
    <HistoryFrame>
      <Title
        color="blue"
        fontWeight="bold"
        fontSize={2}
        textAlign="center"
        margin="4.813rem 0 2.25rem 0"
      >
        연혁
      </Title>
      <HistoryTableFrame>
        <HistoryTable data={data} />
      </HistoryTableFrame>
    </HistoryFrame>
  )
}
