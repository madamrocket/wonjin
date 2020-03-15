import styled from 'styled-components'

import margin, { Margin } from '../mixins/margin'
import padding, { Padding } from '../mixins/padding'
import maxWidth, { MaxWidth } from '../mixins/max-width'
import overflow, { Overflow } from '../mixins/overflow'
import float, { Float } from '../mixins/float'

export default styled.div<{
  margin?: Margin
  padding?: Padding
  maxWidth?: MaxWidth
  overflow?: Overflow
  float?: Float
}>`
  ${margin}
  ${padding}
  ${maxWidth}
  ${overflow}
  ${float}
`
