import CSS from 'csstype'
import { css } from 'styled-components'

export type FontWeight = CSS.FontWeightProperty

export default css`
  ${({ fontWeight }: { fontWeight?: FontWeight }) =>
    fontWeight &&
    `
        font-weight: ${fontWeight};
    `}
`
