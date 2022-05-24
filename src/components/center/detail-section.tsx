import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import InfoTable from './info-table'
import Text from '../share/text'
import media from '../share/media'
import { Center } from './types'

const DetailFrame = styled(Container)`
  @media ${media.md} {
    padding: 0.25rem 0 2.25rem 0;
  }
`
const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 56%;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

function DetailSection({ center }: { center: Center }) {
  const { image, description, info, name } = center

  return (
    <DetailFrame
      maxWidth="40.5rem"
      width="92.09%"
      margin="0 auto"
      padding="1rem 0 4rem 0"
    >
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <Text
        fontSize={1.25}
        margin="2.625rem 0 0.5rem 1.5rem"
        mobileineMargin="1.5rem 0 0.625rem 0.5rem"
        fontWeight="bold"
        mobileFontSize={0.8125}
        lignHeight={1.2}
      >
        {name}
      </Text>
      <InfoTable info={info} />
      {description && (
        <Text
          fontSize={0.9375}
          mobileFontSize={0.8125}
          color="lightBlack"
          lignHeight={1.75}
        >
          {description}
        </Text>
      )}
    </DetailFrame>
  )
}

export default DetailSection
