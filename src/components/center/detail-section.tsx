import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import InfoTable from './info-table'
import Text from '../share/text'
import { Center } from './types'

const DetailFrame = styled(Container)`
  max-width: 40.5rem;
  margin: 0 auto;
  padding: 1rem 0 4rem 0;
`

const Image = styled.img`
  width: 100%;
`

function DetailSection({ center }: { center: Center }) {
  const { image, description, info, name } = center

  return (
    <DetailFrame>
      <Image src={image} />
      <Text
        fontSize={1.25}
        margin="2.625rem 0 0.5rem 1.5rem"
        fontWeight="bold"
        lignHeight={1.2}
      >
        {name}
      </Text>
      <InfoTable info={info} />
      {description && (
        <Text fontSize={0.9375} color="lightBlack" lignHeight={1.75}>
          {description}
        </Text>
      )}
    </DetailFrame>
  )
}

export default DetailSection
