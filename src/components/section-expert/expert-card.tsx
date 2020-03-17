import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import { Card } from './types'
import getColor from '../share/color'

const Image = styled.img`
  margin-bottom: 24px;
  width: 100%;
`

const CardFrame = styled(Container)`
  text-align: left;
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

  &:before {
    content: '';
    background-image: url(/images/ic-arrow-right@3x.png);
    background-size: 32px;
    width: 32px;
    height: 32px;
    display: block;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
  }
`

function CompetencyCard({ card }: { card: Card }) {
  const { image, title, description } = card

  return (
    <CardFrame>
      <Image src={image} />
      <Text fontSize={1.25} fontWeight="bold" color="blue">
        Interview
      </Text>
      <Text fontSize={2} fontWeight="bold" margin="0 0 1.5rem 0">
        {title}
      </Text>
      <Text fontSize={1.25} padding="0 0 1.5rem 0">
        {description}
      </Text>
      <Button>글 확인하기</Button>
    </CardFrame>
  )
}

export default CompetencyCard
