import styled from 'styled-components'
import {
  width,
  maxWidth,
  minWidth,
  Width,
  centered,
  Centered,
  flex,
  Flex,
} from '../style-box'

interface ContainerProps {
  width?: Width
  maxWidth?: Width
  minWidth?: Width
  centered?: Centered
  flex?: Flex
}

const Container = styled.div<ContainerProps>`
  ${width()}
  ${maxWidth()}
  ${minWidth()}
  ${centered()}
  ${flex()}
`

export default Container
