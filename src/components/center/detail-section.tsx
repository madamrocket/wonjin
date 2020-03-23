import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
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
  const { image, description } = center

  return (
    <DetailFrame>
      <Image src={image} />
      {description && (
        <Text color="lightBlack" lignHeight={1.75}>
          {description}
        </Text>
      )}
    </DetailFrame>
  )
}

export default DetailSection
