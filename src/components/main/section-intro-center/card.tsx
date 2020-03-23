import React from 'react'
import styled from 'styled-components'
import { Link as BaseLink } from 'gatsby'

import Container from '../../share/container'
import Text from '../../share/text'
import { Center } from './types'

const CardFrame = styled(Container)`
  left: -10000px;
  display: block;
  width: 15.75rem;
  z-index: 3;

  > img {
    width: 100%;
    height: 100%;
  }
`

const Image = styled.img`
  width: 100%;
`

const Link = styled(BaseLink)`
  display: block;
  width: 100%;
  height: 100%;
`

function Card({
  source,
  imageOnload,
}: {
  source: Center
  imageOnload: () => void
}) {
  const { id, name, image, address } = source

  return (
    <CardFrame>
      <Link to={`/center?id=${id}`}>
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
      </Link>
    </CardFrame>
  )
}

export default Card
