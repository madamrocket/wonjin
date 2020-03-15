import React from 'react'
import styled from 'styled-components'

import Container from '../share/container'

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  rigth: 0;
  bottom: 0;
  max-width: 100%;
`

function SectionIntroWonjin() {
  return (
    <div>
      <Container position="relative" overflow="hidden" height={30}>
        <CoverImage src="/images/main.png" />
      </Container>
    </div>
  )
}

export default SectionIntroWonjin
