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
  margin: 0 auto;
`

const InfoContainer = styled.div`
  vertical-align: top;
`

const LogoContainer = styled.div`
  position: absolute;
  top: 2.563rem;
  right: 0;
`

function Footer() {
  return (
    <FooterFrame>
      <FooterContainer
        maxWidth="49.25rem"
        margin="0 auto"
        position="relative"
        padding="2.5rem 0"
      >
        <InfoContainer>
          <Info label="본사" description="경기도 용인시 원삼면 죽양대로 1566" />
          <Info
            label="판교 사무실"
            description="경기도 성남시 수정구 창업로 54 221~223호"
          />
          <Info label="이메일" description="info@wonjinlogis.com" />
          <Info label="대표번호" description="1588-0714" />
          <Info label="팩스" description="02- 557- 3496" />

          <Info
            description="Copyright © Wonjin Logisitcs Corporation. All Rights Reserved."
            full
          />
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