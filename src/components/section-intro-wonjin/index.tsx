import React from 'react'
import styled from 'styled-components'

import Heading from './heading'
import History from './history'
import Keyword from './keyword'
import { media } from '../share/media'

const ContentFrame = styled.div`
  display: flex;
  padding-top: 6.5rem;
  max-width: 53.06rem;
  margin: 0 auto;

  @media ${media.md} {
    flex-direction: column;
    padding-top: 1.813rem;
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
