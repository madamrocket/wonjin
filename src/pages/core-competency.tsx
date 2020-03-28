import React from 'react'
import styled from 'styled-components'

import Layout from '../components/share/layout'
import Container from '../components/share/container'
import media from '../components/share/media'
import Text from '../components/share/text'
import Contents from '../components/core-competency/contents'

const CoreCompetencyFrame = styled(Container)`
  max-width: 64rem;
  width: 92.09%;
  margin: 0 auto;

  @media ${media.md} {
    width: 100%;
  }
`

interface CoreCompetencyPageProps {
  location: Location
}

const Title = styled(Text)`
  @media ${media.md} {
    display: none;
  }
`

function CoreCompetencyPage({ location }: CoreCompetencyPageProps) {
  return (
    <Layout location={location}>
      <CoreCompetencyFrame position="relative">
        <Title
          margin="2.25rem 0"
          color="blue"
          fontSize={2}
          fontWeight="bold"
          textAlign="center"
        >
          핵심 역량
        </Title>
        <Contents />
      </CoreCompetencyFrame>
    </Layout>
  )
}

export default CoreCompetencyPage
