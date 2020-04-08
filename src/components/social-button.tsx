import React from 'react'
import styled from 'styled-components'

import getColor from './share/color'
import media from './share/media'

const LINKS = {
  naver: 'https://blog.naver.com/wonjinlogis',
  facebook: 'https://www.facebook.com/wonjinlogis',
}

const Icon = styled.span<{ type: 'naver' | 'facebook' }>`
  background: ${({ type }) => `url(/images/logo-${type}-gray@2x.png)`} no-repeat;
  background-size: 1.625rem;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${getColor('lightBlack')};
  border-radius: 100%;
  background-position: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 0.75rem;
  }

  @media ${media.md} {
    width: 1.313rem;
    height: 1.313rem;
    background-size: 0.8125rem;

    &:not(:last-child) {
      margin-right: 0.3125rem;
    }
  }
`

export default function SocialButton() {
  const handleOpenLink = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <>
      <Icon type="naver" onClick={() => handleOpenLink(LINKS.naver)} />
      <Icon type="facebook" onClick={() => handleOpenLink(LINKS.facebook)} />
    </>
  )
}
