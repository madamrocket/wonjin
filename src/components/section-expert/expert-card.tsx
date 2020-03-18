import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import { Card } from './types'
import getColor from '../share/color'
import { media } from '../share/media'

const CardFrame = styled(Container)`
  text-align: left;
  width: 32.38%;

  @media ${media.md} {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 4.5rem;
    }
  }
`

const Image = styled.img`
  margin-bottom: 24px;
  width: 100%;
`

const Button = styled.button`
  position: relative;
  font-size: 1.5rem;
  background: ${getColor('white')};
  color: ${getColor('green')};
  border: 1px solid ${getColor('green')};
  width: 12.5rem;
  height: 3.75rem;
  padding-left: 1.5rem;
  text-align: left;
  margin-top: 1.5rem;

  &:before {
    content: '';
    background-image: url(/images/ic-arrow-right@3x.png);
    background-size: 2rem;
    width: 2rem;
    height: 2rem;
    display: block;
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

function CompetencyCard({ card }: { card: Card }) {
  const { image, title, description } = card

  return (
    <CardFrame>
      <Image src={image} />
      <Text
        fontSize={1.25}
        fontWeight="bold"
        color="blue"
        margin="0 0 0.75rem 0"
      >
        Interview
      </Text>
      <Text fontSize={2} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={1.25} margin="1.5rem 0 0 0">
        {description}
      </Text>
      <Button>글 확인하기</Button>
    </CardFrame>
  )
}

export default CompetencyCard
