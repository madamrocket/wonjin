import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

import margin, { Margin } from '../mixins/margin'
import padding, { Padding } from '../mixins/padding'
import fontWeight, { FontWeight } from '../mixins/font-weight'
import getColor, { Color } from './color'

interface TextProps {
  margin?: Margin
  padding?: Padding
  fontWeight?: FontWeight
  fontSize?: number
  inlineBlock?: boolean
  lignHeight?: number | string
  color?: Color
}

const BaseText = styled.div<TextProps>`
  ${margin}
  ${padding}
  ${fontWeight}
  ${({ fontSize }) => `font-size: ${fontSize || 1}rem;`}
  ${({ inlineBlock }) => inlineBlock && `display: inline-block;`}
  ${({ lignHeight }) => `line-height: ${lignHeight || 1.5};`}
  ${({ color }) => `color: ${getColor(color || 'black')};`}
`

export default function Text({
  children,
  ...props
}: PropsWithChildren<TextProps>) {
  const texts = ((children as string) || '').split('\n')
  console.log(props)
  return (
    <>
      {texts.map((text: string, i: number) => (
        <BaseText key={i} {...props}>
          {text}
        </BaseText>
      ))}
    </>
  )
}
