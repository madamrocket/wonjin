import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import media from '../../share/media'
import Text from '../../share/text'
import { Card } from './types'
import IconButton from '../../share/icon-button'

const CardFrame = styled(Container)`
  display: inline-block;

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

function CompetencyCard({
  card,
  onClick,
}: {
  card: Card
  onClick: (link: string) => void
}) {
  const { category, image, title, description, link } = card

  return (
    <CardFrame width="48%" margin="0 0 3.5rem 0" textAlign="left">
      <Image src={image} alt={title} />
      <Text
        fontSize={0.875}
        fontWeight="bold"
        color="blue"
        margin="0 0 0.5rem 0"
        lignHeight={1.5}
        mobileFontSize={0.75}
      >
        {category}
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
      <IconButton
        width="7.375rem"
        color="green"
        size="0.875rem"
        onClick={() => onClick(link)}
      >
        글 확인하기
      </IconButton>
    </CardFrame>
  )
}

export default CompetencyCard
