import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import getColor from '../share/color'

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

export default function HistoryTable({ data }: { data: History[] }) {
  return (
    <>
      {data.map(({ year, histories }, idx) => {
        return (
          <HistoryContainer key={idx}>
            {histories.map(({ month, contents }, idx) => (
              <React.Fragment key={idx}>
                <Year lignHeight={2.57} fontWeight="bold" fontSize={0.875}>
                  {idx === 0 ? year : ''}
                </Year>
                <Month
                  fontWeight={500}
                  color="lightBlack"
                  lignHeight={2.57}
                  fontSize={0.875}
                >
                  {month}
                </Month>
                <TextContainer width="50%">
                  {contents.map((text, idx) => (
                    <Text key={idx} lignHeight={2.57} fontSize={0.875}>
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
