import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import getColor from '../share/color'
import data from './data.json'

interface History {
  year: string
  histories: {
    month: string
    contents: string[]
  }[]
}

const HistoryContainer = styled(Container)`
  &:not(:last-child) {
    border-bottom: 1px solid ${getColor('darkGray')};
  }
`

const Year = styled(Text)`
  display: inline-block;
  width: 20%;
`

const Month = styled(Text)`
  display: inline-block;
  width: 20%;
`

const TextContainer = styled(Container)`
  display: inline-block;
`

export default function HistoryTable() {
  return (
    <>
      {(data as History[]).map(({ year, histories }, idx) => {
        return (
          <HistoryContainer key={idx}>
            {histories.map(({ month, contents }, idx) => (
              <React.Fragment key={idx}>
                <Year lignHeight={2.25} fontWeight="bold">
                  {idx === 0 ? year : ''}
                </Year>
                <Month fontWeight={500} color="lightBlack" lignHeight={2.25}>
                  {month}
                </Month>
                <TextContainer width="50%">
                  {contents.map((text, idx) => (
                    <Text key={idx} lignHeight={2.25}>
                      {text}
                    </Text>
                  ))}
                </TextContainer>
              </React.Fragment>
            ))}
          </HistoryContainer>
        )
      })}
    </>
  )
}
