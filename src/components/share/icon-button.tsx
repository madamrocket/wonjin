import styled from 'styled-components'
import getColor, { Color } from './color'

export default styled.button<{
  width: string
  color: Color
  margin?: string
}>`
  position: relative;
  font-size: 1.5rem;
  ${({ color }) => `
    background: ${getColor(color === 'blue' ? 'blue' : 'white')};
    color: ${getColor(color === 'blue' ? 'white' : color)};
    border: 1px solid ${getColor(color === 'blue' ? 'white' : color)};
  `};
  width: ${({ width }) => width};
  height: 3.75rem;
  padding-left: 1.5rem;
  text-align: left;
  ${({ margin }) => margin && `margin: ${margin};`}

  &:before {
    content: '';
    background-image: url(/images/ic-arrow-right${({ color }) =>
        color === 'blue' ? '-w' : ''}@3x.png);
    background-size: 2rem;
    width: 2rem;
    height: 2rem;
    display: block;
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
`
