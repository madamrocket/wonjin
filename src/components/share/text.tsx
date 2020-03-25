import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

import margin, { Margin } from './mixins/margin'
import padding, { Padding } from './mixins/padding'
import fontWeight, { FontWeight } from './mixins/font-weight'
import getColor, { Color } from './color'
import textAlign, { TextAlign } from './mixins/text-align'
import media from './media'

interface TextProps {
  margin?: Margin
  padding?: Padding
  fontWeight?: FontWeight
  fontSize?: number
  mobileFontSize?: number
  inlineBlock?: boolean
  lignHeight?: number | string
  color?: Color
  textAlign?: TextAlign
  mobileineHeight?: number
}

const BaseText = styled.div<TextProps>`
  ${margin}
  ${padding}
  ${fontWeight}
  ${textAlign}
  ${({ fontSize }) => `font-size: ${fontSize || 1}rem;`}
  ${({ inlineBlock }) => inlineBlock && `display: inline-block;`}
  ${({ lignHeight }) => `line-height: ${lignHeight || 1.5};`}
  ${({ color }) => `color: ${getColor(color || 'black')};`}

  @media ${media.md} {
    ${({ mobileFontSize }) => `font-size: ${mobileFontSize || 1}rem;`}
    ${({ mobileineHeight }) => `line-height: ${mobileineHeight || 1.5};`}
  }

  &:last-child {
    margin: 0;
  }
`

export default function Text({
  children,
  ...props
}: PropsWithChildren<TextProps>) {
  const texts = ((children as string) || '').split('\n')
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
