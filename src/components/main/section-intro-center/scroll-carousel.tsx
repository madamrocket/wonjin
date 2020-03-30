import React from 'react'
import styled from 'styled-components'
import data from '../../center/data.json'

import { Center } from './types'
import Card from './card'
import Container from '../../share/container'

const ScrollCarouselFrame = styled(Container)`
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`

function ScrollCarousel() {
  const centers = data as Center[]

  return (
    <ScrollCarouselFrame float="right" position="relative">
      {centers.map((center, idx) => (
        <Card source={center} key={idx} />
      ))}
    </ScrollCarouselFrame>
  )
}

export default ScrollCarousel
