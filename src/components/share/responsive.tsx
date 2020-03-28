import styled from 'styled-components'

import Container from './container'
import media from './media'

export default styled(Container)<{ target: 'pc' | 'mo' }>`
  display: inline-block;

  ${({ target }) =>
    target === 'pc'
      ? `
      display: inline-block;
      @media ${media.md} {
        display: none; 
      }
  
  `
      : `
      
      display: none;
      @media ${media.md} {
        display: inline-block; 
      }`}
`
