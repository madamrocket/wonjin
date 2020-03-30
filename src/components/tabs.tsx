import React from 'react'
import styled from 'styled-components'

import Container from './share/container'
import media from './share/media'
import getColor from './share/color'

const Tab = styled.div<{
  active: boolean
  bottomSpancing?: number
  sideSpancing?: number
  mobileSideSpancing?: number
  mobileBottomSpancing?: number
}>`
  position: relative;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 400;
  cursor: pointer;
  margin: 0 ${({ sideSpancing }) => sideSpancing || 1}rem;

  ${({ active }) =>
    active &&
    `
        font-weight: bold;
        color: ${getColor('green')};
  
        &:after {
            position: absolute;
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: ${getColor('green')};
            margin-top: 5px;
        }
      `}

   ${({ bottomSpancing }) =>
     bottomSpancing &&
     `
    margin-bottom: ${bottomSpancing}rem;
  `}   

   @media ${media.md} {
     font-size: 0.8125rem;     
     margin: 0 ${({ mobileSideSpancing }) => mobileSideSpancing || 1}rem;

     ${({ mobileBottomSpancing }) =>
       mobileBottomSpancing &&
       `
    margin-bottom: ${mobileBottomSpancing}rem;
  `}  
   }   

 
`

export default function Tabs<T>({
  options,
  onChange,
  value,
  bottomSpancing,
  sideSpancing,
  mobileSideSpancing,
  mobileBottomSpancing,
}: {
  value: T
  options: {
    value: T
    label: string
  }[]
  onChange: (value: T) => void
  sideSpancing?: number
  bottomSpancing?: number
  mobileSideSpancing?: number
  mobileBottomSpancing?: number
}) {
  return (
    <Container>
      {options.map(({ value: optionValue, label }, idx) => (
        <Tab
          key={idx}
          active={optionValue === value}
          onClick={() => onChange(optionValue)}
          bottomSpancing={bottomSpancing}
          sideSpancing={sideSpancing}
          mobileSideSpancing={mobileSideSpancing}
          mobileBottomSpancing={mobileBottomSpancing}
        >
          {label}
        </Tab>
      ))}
    </Container>
  )
}
