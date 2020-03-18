import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Flicking from '@egjs/react-flicking'
// import { FlickingEvent, FlickingOptions } from '@egjs/flicking'
// import Flicking, { FlickingProps } from '@egjs/react-flicking'

import { CentersQueryQuery } from '../../__generated__/gatsby-types'
import { Center } from './types'
import Card from './card'
import Container from '../share/container'

const CarouselFrame = styled(Container)`
  overflow: visible;

  img {
    pointer-events: none;
  }
`

function Carousel() {
  const {
    allDataJson: { edges },
  } = useStaticQuery<CentersQueryQuery>(query)

  const p = {
    zIndex: 1,
    defaultIndex: 0,
    autoResize: true,
    horizontal: true,
    bounce: [0, 0],
    duration: 100,
    hanger: 0,
    collectStatistics: false,
  }

  return (
    <CarouselFrame>
      <Flicking {...(p as any)}>
        {edges.map(({ node }, idx) => (
          <Card source={node as Center} key={idx} />
        ))}
      </Flicking>
    </CarouselFrame>
  )
}

export const query = graphql`
  query CentersQuery {
    allDataJson {
      edges {
        node {
          id
          image
          name
        }
      }
    }
  }
`

export default Carousel
