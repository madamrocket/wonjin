import styled from 'styled-components'

import margin, { Margin } from './mixins/margin'
import padding, { Padding } from './mixins/padding'
import maxWidth, { MaxWidth } from './mixins/max-width'
import overflow, { Overflow } from './mixins/overflow'
import float, { Float } from './mixins/float'
import position, { Position } from './mixins/position'
import height, { Height } from './mixins/height'
import width, { Width } from './mixins/width'
import textAlign, { TextAlign } from './mixins/text-align'

export default styled.div<{
  margin?: Margin
  padding?: Padding
  maxWidth?: MaxWidth
  overflow?: Overflow
  float?: Float
  position?: Position
  height?: Height
  width?: Width
  textAlign?: TextAlign
}>`
  box-sizing: border-box;
  ${margin}
  ${padding}
  ${maxWidth}
  ${overflow}
  ${float}
  ${position}
  ${height}
  ${width}
  ${textAlign}
`
