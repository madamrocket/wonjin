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
  z-index: 3;

  > img {
    width: 100%;
    height: 100%;
  }

  @media ${media.md} {
    display: inline-block;
    width: 18.44rem;

    &:first-child {
      margin-left: 1.25rem;
    }

    &:last-child {
      margin-right: 1.25rem;
    }

    &:not(:last-child) {
      margin-right: 1.25rem;
    }
  }
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

const Link = styled(BaseLink)`
  display: block;
  width: 100%;
  height: 100%;
`

const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 56%;
`

function Card({
  source,
  imageOnload,
}: {
  source: Center
  imageOnload?: () => void
}) {
  const { id, name, image, address } = source

  return (
    <CardFrame width="33.3%">
      <Link to={`/center?id=${id}`}>
        <ImageContainer>
          <Image src={image} alt={name} onLoad={imageOnload} />
        </ImageContainer>
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
