import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import getColor from '../share/color'
import data from './data.json'

interface Histories {
  [key: string]: {
    [key: string]: string[]
  }
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
  const histories = data as Histories

  return (
    <>
      {Object.keys(histories).map((year: string, idx) => {
        const history = histories[year]

        return (
          <HistoryContainer key={idx}>
            {Object.keys(history).map((month, idx) => {
              return (
                <React.Fragment key={idx}>
                  <Year lignHeight={2.25} fontWeight="bold">
                    {idx === 0 ? year : ''}
                  </Year>
                  <Month fontWeight={500} color="lightBlack" lignHeight={2.25}>
                    {month}
                  </Month>
                  <TextContainer width="50%">
                    {history[month].map((text, idx) => (
                      <Text key={idx} lignHeight={2.25}>
                        {text}
                      </Text>
                    ))}
                  </TextContainer>
                </React.Fragment>
              )
            })}
          </HistoryContainer>
        )
      })}
    </>
  )
}
