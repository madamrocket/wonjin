import { css } from 'styled-components'

export type MaxWidth = string

export default css`
  ${({ maxWidth }: { maxWidth?: MaxWidth }) =>
    maxWidth &&
    `
        max-width: ${maxWidth};
    `}
`
