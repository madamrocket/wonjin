import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import HistoryTable from './history-table'

const HistoryFrame = styled(Container)`
  max-width: 40.94rem;
  width: 100%;
  margin: 0 auto;
`

const HistoryTableFrame = styled(Container)`
  max-height: 52.5rem;
  overflow-y: auto;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
`

export default function HistorySection() {
  return (
    <HistoryFrame>
      <Text
        color="blue"
        fontWeight="bold"
        fontSize={2}
        textAlign="center"
        margin="0 0 2.25rem 0"
      >
        연혁
      </Text>
      <HistoryTableFrame margin="0 0 5.813rem 0" padding="0.75rem 1.5rem">
        <HistoryTable />
      </HistoryTableFrame>
    </HistoryFrame>
  )
}
