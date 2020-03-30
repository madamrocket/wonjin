import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import media from '../../share/media'
import Text from '../../share/text'
import { Card } from './types'
import IconButton from '../../share/icon-button'

const CardFrame = styled(Container)`
  width: 48%;
  margin-bottom: 3.5rem;
  display: inline-block;
  text-align: left;

  &:nth-child(2n - 1) {
    margin-right: 2%;
  }

  @media ${media.md} {
    width: 100%;
    margin-bottom: 0;

    &:nth-child(2n - 1) {
      margin-right: 0;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

const Image = styled.img`
  margin-bottom: 1rem;
  width: 100%;
`

function CompetencyCard({ card }: { card: Card }) {
  const { image, title, description } = card

  return (
    <CardFrame>
      <Image src={image} />
      <Text
        fontSize={0.875}
        fontWeight="bold"
        color="blue"
        margin="0 0 0.5rem 0"
        lignHeight={1.5}
        mobileFontSize={0.75}
      >
        Interview
      </Text>
      <Text fontSize={1.5} fontWeight="bold" mobileFontSize={1.125}>
        {title}
      </Text>
      <Text
        fontSize={0.875}
        lignHeight={1.71}
        margin="0.5rem 0 0.75rem 0"
        mobileFontSize={0.8125}
      >
        {description}
      </Text>
      <IconButton width="7.375rem" color="green" size="0.875rem">
        글 확인하기
      </IconButton>
    </CardFrame>
  )
}

export default CompetencyCard
