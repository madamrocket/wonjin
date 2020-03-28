import React from 'react'
import styled from 'styled-components'
import { Link as BaseLink } from 'gatsby'

import Container from '../../share/container'
import Text from '../../share/text'
import { Center } from './types'
import media from '../../share/media'

const CardFrame = styled(Container)`
  left: -10000px;
  display: block;
  width: 33.3%;
  z-index: 3;

  > img {
    width: 100%;
    height: 100%;
  }

  @media ${media.md} {
    width: 50%;
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
          lignHeight={2}
          fontSize={1.25}
          fontWeight={500}
          mobileFontSize={0.9375}
          margin="0.75rem 0 0 0"
        >
          {name}
        </Text>
        <Text
          color="gray"
          fontSize={0.875}
          lignHeight={2}
          mobileFontSize={0.75}
        >
          {address}
        </Text>
      </Link>
    </CardFrame>
  )
}

export default Card
