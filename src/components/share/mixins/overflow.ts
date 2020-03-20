import CSS from 'csstype'
import { css } from 'styled-components'

export type Overflow = CSS.OverflowProperty

export default css`
  ${({ overflow }: { overflow?: Overflow }) =>
    overflow &&
    `
        overflow: ${overflow};
    `}
`
