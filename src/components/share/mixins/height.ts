import { css } from 'styled-components'

export type Height = number

export default css`
  ${({ height }: { height?: number }) =>
    height &&
    `
    height: ${height}rem;
    `}
`
