import React from 'react'
import styled from 'styled-components'

import getColor from './share/color'

const Icon = styled.span<{ type: 'naver' | 'facebook' }>`
  background: ${({ type }) => `url(/images/logo-${type}-white@3x.png)`}
    no-repeat;
  background-size: 1.625rem;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${getColor('darkGray')};
  border-radius: 100%;
  background-position: center;

  &:not(:last-child) {
    margin-right: 0.75rem;
  }
`

export default function SocialButton() {
  return (
    <>
      <Icon type="naver" />
      <Icon type="facebook" />
    </>
  )
}