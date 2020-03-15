import { css } from 'styled-components'

export type Margin = string

export default css`
  ${({ margin }: { margin?: Margin }) =>
    margin &&
    `
        margin: ${margin};
    `}
`
