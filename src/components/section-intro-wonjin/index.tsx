import React from 'react'
import styled from 'styled-components'

import Heading from './heading'
import History from './history'
import Keyword from './keyword'

const ContentFrame = styled.div`
  padding: 4.188rem 0 3rem 0;
  max-width: 81.25rem;
  margin: 0 auto;
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
