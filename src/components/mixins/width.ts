import { css } from 'styled-components'

export type Width = string | number

export default css`
  ${({ width }: { width?: Width }) =>
    width &&
    `
    width: ${typeof width === 'number' ? `${width}rem` : width};
    `}
`
