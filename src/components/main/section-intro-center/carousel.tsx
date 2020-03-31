import React, { useCallback, useRef, RefObject, useState } from 'react'
import styled from 'styled-components'
import Flicking from '@egjs/react-flicking'
import data from '../../center/data.json'

import { Center } from './types'
import Card from './card'
import Container from '../../share/container'
import getColor from '../../share/color'
import media from '../../share/media'

const DotContainer = styled(Container)`
  @media ${media.md} {
    margin: 5.8% 0 0 0;
  }
  @media ${media.sm} {
    margin: 0;
  }
`

const Dot = styled.div<{ active?: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  background: ${getColor('darkGray')};
  display: inline-block;
  border-radius: 100%;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 0.75rem;
  }

  ${({ active }) =>
    active &&
    `
    background: ${getColor('blue')};
  `}

  @media ${media.md} {
    width: 0.5rem;
    height: 0.5rem;
  }
`

const CarouselFrame = styled(Container)`
  overflow: visible;

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
    left: -1rem;
`
      : `
    background: ${getColor('green')} url(/images/ic-arrow-right-w@3x.png)
      no-repeat;
    right: -1rem;
  `}

  cursor: pointer;
  width: 1.125rem;
  height: 1.125rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateY(-67px);
  background-position: center;
  padding: 0.4375rem;
  background-size: 1.125rem;
  z-index: 2;
`

function Carousel() {
  const centers = data as Center[]
  const [currentIndex, setCurrentIndex] = useState(0)
  const pageCount = centers.length / 3

  const flickingRef = useRef() as RefObject<Flicking>

  const handleResizeFlicking = useCallback(() => {
    if (!flickingRef || !flickingRef.current) {
      return
    }

    const flicking = flickingRef.current

    flicking.resize()
    flicking.disableInput()
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
  const hasNextPage = currentIndex + 1 < pageCount

  return (
    <CarouselFrame width="100%" float="right" position="relative">
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
      <DotContainer textAlign="center" margin="2.25rem 0 0 0">
        {[...new Array(pageCount)].map((_, idx) => (
          <Dot
            key={idx}
            active={idx === currentIndex}
            onClick={() => handleMove(idx)}
          />
        ))}
      </DotContainer>
    </CarouselFrame>
  )
}

export default Carousel
