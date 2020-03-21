import React from 'react'
import styled from 'styled-components'

import getColor from './share/color'

const Tab = styled.div<{
  active: boolean
}>`
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  ${({ active }) =>
    active &&
    `
        font-weight: bold;
        color: ${getColor('green')};
  
        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 3px;
            background-color: ${getColor('green')};
            margin-top: 4px;
        }
      `}
`

interface Option {
  value: string | number
  label: string
}

export default function Tabs({
  options,
  onChange,
  value,
}: {
  value: string | number
  options: Option[]
  onChange: (value: string | number) => void
}) {
  return (
    <>
      {options.map(({ value: optionValue, label }, idx) => (
        <Tab
          key={idx}
          active={optionValue === value}
          onClick={() => onChange(optionValue)}
        >
          {label}
        </Tab>
      ))}
    </>
  )
}
