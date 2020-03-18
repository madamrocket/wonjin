import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'
import { media } from '../share/media'
import getColor from '../share/color'
import IconButton from '../share/icon-button'

const SectionCenterFrame = styled(Container)`
  background: ${getColor('lightGray')};
`

const SectionCenterContainer = styled(Container)`
  max-width: 81.25rem;
  margin: 0 auto;

  @media ${media.md} {
    max-width: 39.5rem;
  }
`

function SectionIntroCenter() {
  return (
    <SectionCenterFrame>
      <SectionCenterContainer padding="6.5rem 3% 4.5rem 3%">
        SectionCenterContainer
        <IconButton width="19.88rem" color="blue">
          원진물류센터 둘러보기
        </IconButton>
      </SectionCenterContainer>
    </SectionCenterFrame>
  )
}

export default SectionIntroCenter
