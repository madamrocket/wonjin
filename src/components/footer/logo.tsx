import styled from 'styled-components'

import getColor from '../share/color'

export default styled.span<{ type: 'naver' | 'facebook' }>`
  background: ${({ type }) => `url(/images/logo-${type}-white@3x.png)`}
    no-repeat;
  background-size: 2.25rem;
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${getColor('darkGray')};
  border-radius: 100%;
  background-position: center;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`
