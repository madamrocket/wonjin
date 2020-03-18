import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import { media } from '../share/media'
import getColor from '../share/color'
import Info from './info'
import Logo from './logo'

const FooterFrame = styled(Container)`
  background: ${getColor('lightGray')};
`

const FooterContainer = styled(Container)`
  max-width: 81.25rem;
  margin: 0 auto;
  background: ${getColor('lightGray')};

  @media ${media.md} {
    max-width: 39.5rem;
  }
`

const InfoContainer = styled.div`
  width: 45.61%;
  display: inline-block;
  vertical-align: top;

  &:first-child {
    margin-right: 1.875rem;
  }
`

const LogoContainer = styled.div`
  position: absolute;
  top: 2.563rem;
  right: 3%;
`

function Footer() {
  return (
    <FooterFrame>
      <FooterContainer position="relative" padding="2.563rem 3%">
        <InfoContainer>
          <Info label="본사" description="경기도 용인시 원삼면 죽양대로 1566" />
          <Info
            label="판교 사무실"
            description="경기도 성남시 수정구 창업로 54 221~223호"
          />
          <Info
            description="Copyright © Wonjin Logisitcs Corporation. All Rights Reserved."
            full
          />
        </InfoContainer>
        <InfoContainer>
          <Info label="대표번호" description="1588-0714" />
          <Info label="팩스" description="02- 557- 3496" />
          <Info label="이메일" description="info@wonjinlogis.com" />
        </InfoContainer>
        <LogoContainer>
          <Logo type="naver" />
          <Logo type="facebook" />
        </LogoContainer>
      </FooterContainer>
    </FooterFrame>
  )
}

export default Footer
