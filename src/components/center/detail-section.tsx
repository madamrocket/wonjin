import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import InfoTable from './info-table'
import Text from '../share/text'
import { Center } from './types'

const DetailFrame = styled(Container)`
  max-width: 40.5rem;
  margin: 0 auto;
  padding: 2.5rem 0 4rem 0;
`

const Image = styled.img`
  width: 100%;
  margin-bottom: 1.5rem;
`

function DetailSection({ center }: { center: Center }) {
  const { image, description, info, name } = center

  return (
    <DetailFrame>
      <Image src={image} />
      {description && (
        <Text color="lightBlack" lignHeight={1.75}>
          {description}
        </Text>
      )}
      <Text
        fontSize={1.25}
        margin="2.5rem 0 0.5rem 1.5rem"
        fontWeight="bold"
        lignHeight={1.2}
      >
        {name}
      </Text>
      <InfoTable info={info} />
    </DetailFrame>
  )
}

export default DetailSection
