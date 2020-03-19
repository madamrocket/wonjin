import React, { useCallback, useRef, RefObject, useEffect } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Flicking from '@egjs/react-flicking'
// import { FlickingEvent, FlickingOptions } from '@egjs/flicking'

import { CentersQueryQuery } from '../../__generated__/gatsby-types'
import { Center } from './types'
import Card from './card'
import Container from '../share/container'

const CarouselFrame = styled(Container)`
  overflow: visible;
  width: 752px;

  img {
    pointer-events: none;
  }
`

function Carousel() {
  const {
    allDataJson: { edges },
  } = useStaticQuery<CentersQueryQuery>(query)

  const flickingRef = useRef() as RefObject<Flicking>

  const handleResizeFlicking = useCallback(() => {
    if (!flickingRef || !flickingRef.current) {
      return
    }

    const flicking = flickingRef.current

    flicking.resize()
  }, [flickingRef])

  return (
    <CarouselFrame float="right">
      <Flicking
        ref={flickingRef}
        collectStatistics={false}
        zIndex={1}
        hanger={'0'}
        anchor={'0'}
        defaultIndex={0}
        autoResize={true}
        horizontal={true}
        bound={true}
        duration={100}
        gap={36}
        onMoveStart={handleResizeFlicking}
      >
        {edges.map(({ node }, idx) => (
          <Card
            source={node as Center}
            key={idx}
            imageOnload={handleResizeFlicking}
          />
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
