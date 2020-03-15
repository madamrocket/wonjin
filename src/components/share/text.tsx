import styled from 'styled-components'

import margin, { Margin } from '../mixins/margin'
import padding, { Padding } from '../mixins/padding'
import fontWeight, { FontWeight } from '../mixins/font-weight'

export default styled.div<{
  margin?: Margin
  padding?: Padding
  fontWeight?: FontWeight
  fontSize?: number
  inlineBlock?: boolean
}>`
  ${margin}
  ${padding}
  ${fontWeight}
  ${({ fontSize }) => `font-size: ${fontSize || 1}rem;`}
  ${({ inlineBlock }) => inlineBlock && `display: inline-block;`}
`
