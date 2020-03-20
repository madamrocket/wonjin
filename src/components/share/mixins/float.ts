import CSS from 'csstype'
import { css } from 'styled-components'

export type Float = CSS.FloatProperty

export default css`
  ${({ float }: { float?: Float }) =>
    float &&
    `
    float: ${float};
    `}
`
