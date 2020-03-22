import React from 'react'
import styled from 'styled-components'

import Container from './share/container'
import getColor from './share/color'

const Tab = styled.div<{
  active: boolean
  bottomSpancing?: number
}>`
  position: relative;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  ${({ bottomSpancing }) =>
    bottomSpancing &&
    `
    margin-bottom: ${bottomSpancing}rem;
  `}

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
            height: 3px;
            background-color: ${getColor('green')};
            margin-top: 4px;
        }
      `}
`

export default function Tabs<T>({
  options,
  onChange,
  value,
  bottomSpancing,
}: {
  value: T
  options: {
    value: T
    label: string
  }[]
  onChange: (value: T) => void
  bottomSpancing?: number
}) {
  return (
    <Container>
      {options.map(({ value: optionValue, label }, idx) => (
        <Tab
          key={idx}
          active={optionValue === value}
          onClick={() => onChange(optionValue)}
          bottomSpancing={bottomSpancing}
        >
          {label}
        </Tab>
      ))}
    </Container>
  )
}
