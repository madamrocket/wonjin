import CSS from 'csstype'
import { css } from 'styled-components'

export type Position = CSS.PositionProperty

export default css`
  ${({ position }: { position?: Position }) =>
    position &&
    `
    position: ${position};
    `}
`
