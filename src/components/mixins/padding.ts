import { css } from 'styled-components'

export type Padding = string

export default css`
  ${({ padding }: { padding?: Padding }) =>
    padding &&
    `
    padding: ${padding};
    `}
`
