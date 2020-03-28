import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import media from '../share/media'
import HistoryTable from './history-table'
import Responsive from '../share/responsive'
import data from './data.json'

const HistoryFrame = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  margin: 0 auto;
`

const HistoryTableFrame = styled(Container)`
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  width: 47.5%;
  display: inline-block;
  margin: 0 0 5.813rem 0;
  padding: 0.75rem 1.5rem;

  &:first-child {
    margin-right: 4.5%;
  }

  @media ${media.md} {
    width: 100%;
    max-height: 52.5rem;
    overflow-y: auto;
  }
`

export default function HistorySection() {
  const leftTableData = [...data].slice(0, 8)
  const rightTableData = [...data].slice(8, data.length)

  return (
    <HistoryFrame>
      <Text
        color="blue"
        fontWeight="bold"
        fontSize={2}
        textAlign="center"
        margin="4.813rem 0 2.25rem 0"
      >
        연혁
      </Text>
      <Responsive target="pc">
        <HistoryTableFrame>
          <HistoryTable data={leftTableData} />
        </HistoryTableFrame>
        <HistoryTableFrame>
          <HistoryTable data={rightTableData} />
        </HistoryTableFrame>
      </Responsive>
      <Responsive target="mo">
        <HistoryTableFrame>
          <HistoryTable data={data} />
        </HistoryTableFrame>
      </Responsive>
    </HistoryFrame>
  )
}
