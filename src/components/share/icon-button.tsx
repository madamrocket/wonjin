import styled from 'styled-components'
import getColor, { Color } from './color'

export default styled.button<{
  width: string
  color: Color
  margin?: string
  size?: string
}>`
  position: relative;
  font-size: ${({ size }) => size || '0.75rem'};

  ${({ color }) => `
    background: ${getColor(color === 'blue' ? 'blue' : 'white')};
    color: ${getColor(color === 'blue' ? 'white' : color)};
    border: 1px solid ${getColor(color === 'blue' ? 'white' : color)};
  `};

  width: ${({ width }) => width};
  height: 2rem;
  padding-left: 0.75rem;
  text-align: left;
  line-height: 1.6;

  ${({ margin }) => margin && `margin: ${margin};`}

  &:before {
    content: '';
    background-image: url(/images/ic-arrow-right${({ color }) =>
        color === 'blue' ? '-w' : ''}@3x.png);
    background-size: 1.125rem;
    width: 1.125rem;
    height: 1.125rem;
    display: block;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`
