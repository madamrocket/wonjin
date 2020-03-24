import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import Text from '../../share/text'
import { Card } from './types'
import IconButton from '../../share/icon-button'

const CardFrame = styled(Container)`
  text-align: left;
  display: inline-block;
  margin-bottom: 3.5rem;
`

const Image = styled.img`
  margin-bottom: 24px;
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
      >
        Interview
      </Text>
      <Text fontSize={1.5} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={0.875} lignHeight={1.71} margin="0.75rem 0 1rem 0">
        {description}
      </Text>
      <IconButton width="7.375rem" color="green" size="0.875rem">
        글 확인하기
      </IconButton>
    </CardFrame>
  )
}

export default CompetencyCard
