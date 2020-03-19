import React, { useCallback, useRef, RefObject, useEffect } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Flicking from '@egjs/react-flicking'

import { CentersQueryQuery } from '../../__generated__/gatsby-types'
import { Center } from './types'
import Card from './card'
import Container from '../share/container'
import getColor from '../share/color'

const CarouselFrame = styled(Container)`
  overflow: visible;
  width: 752px;

  img {
    pointer-events: none;
  }
`

const ControllButton = styled.span<{ type: 'prev' | 'next' }>`
  ${({ type }) =>
    type === 'prev'
      ? `
    background: ${getColor('green')} url(/images/ic-arrow-left-w@3x.png)
    no-repeat;
    left: -1.5rem;
`
      : `
  background: ${getColor('green')} url(/images/ic-arrow-right-w@3x.png)
    no-repeat;
  right: 0.7rem;
`}

  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 5.875rem;
  transform: translateY(-50%);
  background-position: center;
  padding: 0.625rem;
  background-size: 2rem;
  z-index: 2;
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
    <CarouselFrame float="right" position="relative">
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
      <ControllButton type="prev" />
      <ControllButton type="next" />
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
