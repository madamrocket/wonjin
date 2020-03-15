import styled from 'styled-components'

import margin, { Margin } from '../mixins/margin'
import padding, { Padding } from '../mixins/padding'
import maxWidth, { MaxWidth } from '../mixins/max-width'

export default styled.div<{
  margin?: Margin
  padding?: Padding
  maxWidth?: MaxWidth
}>`
  ${margin}
  ${padding}
  ${maxWidth}
`
