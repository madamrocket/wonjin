import React from 'react'
import styled from 'styled-components'
import data from '../../center/data.json'

import { Center } from './types'
import Card from './card'
import Container from '../../share/container'

const ScrollCarouselFrame = styled(Container)`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`

function ScrollCarousel() {
  return (
    <ScrollCarouselFrame width="100%" float="right" position="relative">
      {(data as Center[]).map((center, idx) => (
        <Card source={center} key={idx} />
      ))}
    </ScrollCarouselFrame>
  )
}

export default ScrollCarousel
