import React, { useCallback, useRef, RefObject, useState } from 'react'
import styled from 'styled-components'
import Flicking from '@egjs/react-flicking'
import data from '../../center/data.json'

import { Center } from './types'
import Card from './card'
import Container from '../../share/container'
import getColor from '../../share/color'
import media from '../../share/media'

const CarouselFrame = styled(Container)`
  overflow: visible;
  width: 100%;

  img {
    pointer-events: none;
  }

  @media ${media.md} {
    width: 100%;
  }
`

const ControllButton = styled.span<{ type: 'prev' | 'next' }>`
  ${({ type }) =>
    type === 'prev'
      ? `
    background: ${getColor('green')} url(/images/ic-arrow-left-w@3x.png)
    no-repeat;
    left: -1rem;
`
      : `
    background: ${getColor('green')} url(/images/ic-arrow-right-w@3x.png)
      no-repeat;
    right: -1rem;
  `}

  z-index: 3;
  width: 1.125rem;
  height: 1.125rem;
  position: absolute;
  top: 3.5rem;
  background-position: center;
  padding: 0.4375rem;
  background-size: 1.125rem;
  z-index: 2;
`

const EmptyArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`

function Carousel() {
  const centers = data as Center[]
  const [currentIndex, setCurrentIndex] = useState(0)

  const flickingRef = useRef() as RefObject<Flicking>

  const handleResizeFlicking = useCallback(() => {
    if (!flickingRef || !flickingRef.current) {
      return
    }

    const flicking = flickingRef.current

    flicking.resize()
  }, [flickingRef])

  const handleMove = (index: number) => {
    if (!flickingRef || !flickingRef.current) {
      return
    }

    const flicking = flickingRef.current

    setCurrentIndex(index)
    flicking.moveTo(index * 3)
  }

  const hasPrevPage = currentIndex >= 1
  const hasNextPage = currentIndex + 1 < centers.length / 3

  return (
    <CarouselFrame float="right" position="relative">
      <EmptyArea />
      <Flicking
        ref={flickingRef}
        collectStatistics={false}
        zIndex={1}
        hanger={'0'}
        anchor={'0'}
        defaultIndex={currentIndex}
        autoResize={true}
        horizontal={true}
        bound={true}
        duration={100}
        gap={16}
        onMoveStart={handleResizeFlicking}
      >
        {centers.map((center, idx) => (
          <Card source={center} key={idx} imageOnload={handleResizeFlicking} />
        ))}
      </Flicking>
      {hasPrevPage && (
        <ControllButton
          type="prev"
          onClick={() => handleMove(currentIndex - 1)}
        />
      )}
      {hasNextPage && (
        <ControllButton
          type="next"
          onClick={() => handleMove(currentIndex + 1)}
        />
      )}
    </CarouselFrame>
  )
}

export default Carousel
