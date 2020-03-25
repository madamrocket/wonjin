import React, {
  useCallback,
  useRef,
  RefObject,
  useState,
  useEffect,
} from 'react'
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

  @media ${media.md} {
    width: 0.63rem;
    height: 0.63rem;
    background-size: 0.875rem;
    top: 23%;
    transform: translateY(-23%);

    ${({ type }) =>
      type === 'prev'
        ? `
    left: -0.63rem;
`
        : `
    right: -0.63rem;
  `}
  }

  @media (max-width: 410px) {
    top: 21%;
    transform: translateY(-21%);
  }
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
    <CarouselFrame float="right" position="relative">
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
      <DotContainer textAlign="center" margin="2.125rem 0 0 0">
        {[...new Array(pageCount)].map((_, idx) => (
          <Dot active={idx === currentIndex} onClick={() => handleMove(idx)} />
        ))}
      </DotContainer>
    </CarouselFrame>
  )
}

export default Carousel
