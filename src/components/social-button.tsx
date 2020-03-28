import React from 'react'
import styled from 'styled-components'

import getColor from './share/color'
import media from './share/media'

const Icon = styled.span<{ type: 'naver' | 'facebook' }>`
  background: ${({ type }) => `url(/images/logo-${type}-gray@2x.png)`} no-repeat;
  background-size: 1.625rem;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${getColor('lightBlack')};
  border-radius: 100%;
  background-position: center;

  &:not(:last-child) {
    margin-right: 0.75rem;
  }

  @media ${media.md} {
    width: 1.313rem;
    height: 1.313rem;
    background-size: 0.8125rem;
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
