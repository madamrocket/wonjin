import React from 'react'
import styled from 'styled-components'

import Heading from './heading'
import History from './history'
import Keyword from './keyword'
import { media } from '../share/media'

const ContentFrame = styled.div`
  display: flex;
  padding: 6.5rem 0 6rem 0;
  max-width: 75.06rem;
  margin: 0 auto;

  @media ${media.md} {
    flex-direction: column;
    padding: 1.813rem 0 4rem 0;
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
