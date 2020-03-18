import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import Text from '../share/text'
import { Center } from './types'

const CardFrame = styled(Container)`
  width: 23.5rem;
  min-height: 400px;
`

const Image = styled.img`
  width: 100%;
`

function Card({ source }: { source: Center }) {
  const { name, image, address, id } = source
  console.log(source)
  return (
    <CardFrame>
      <Image src={image} alt={name} />
      <Text
        lignHeight={1.8}
        fontSize={1.5}
        fontWeight={500}
        margin="1.5rem 0 0 0"
      >
        {name}
      </Text>
      <Text color="lightBlack" fontSize={1.25} lignHeight={1.8}>
        {address}
      </Text>
    </CardFrame>
  )
}

export default Card
