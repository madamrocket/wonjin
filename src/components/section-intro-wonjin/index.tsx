import React from 'react'
import styled from 'styled-components'

import Heading from './heading'
import History from './history'
import Keyword from './keyword'
import { media } from '../share/media'

const ContentFrame = styled.div`
  display: flex;
  padding-top: 6.5rem;

  @media ${media.md} {
    flex-direction: column;
  }
`

function SectionIntroWonjin() {
  return (
    <>
      <Heading />
      <ContentFrame>
        <Keyword />
        <History />
      </ContentFrame>
    </>
  )
}

export default SectionIntroWonjin
