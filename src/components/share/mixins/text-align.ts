import CSS from 'csstype'
import { css } from 'styled-components'

export type TextAlign = CSS.TextAlignProperty

export default css`
  ${({ textAlign }: { textAlign?: TextAlign }) =>
    textAlign &&
    `
        text-align: ${textAlign};
    `}
`
