import React from 'react'
import styled from 'styled-components'

import Container from '../../share/container'
import Text from '../../share/text'
import { Center } from './types'

const CardFrame = styled(Container)`
  left: -10000px;
  display: block;
  width: 15.75rem;

  > img {
    width: 100%;
    height: 100%;
  }
`

const Image = styled.img`
  width: 100%;
`

function Card({
  source,
  imageOnload,
}: {
  source: Center
  imageOnload: () => void
}) {
  const { name, image, address } = source

  return (
    <CardFrame>
      <Image src={image} alt={name} onLoad={imageOnload} />
      <Text
        lignHeight={1.8}
        fontSize={1.25}
        fontWeight={500}
        margin="1rem 0 0 0"
      >
        {name}
      </Text>
      <Text color="gray" fontSize={0.875} lignHeight={2}>
        {address}
      </Text>
    </CardFrame>
  )
}

export default Card
