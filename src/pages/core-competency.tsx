import React from 'react'
import styled from 'styled-components'

import Layout from '../components/share/layout'
import Container from '../components/share/container'
import Text from '../components/share/text'
import Contents from '../components/core-competency/contents'

const CoreCompetencyFrame = styled(Container)``

interface CoreCompetencyPageProps {
  location: Location
}

function CoreCompetencyPage({ location }: CoreCompetencyPageProps) {
  return (
    <Layout location={location}>
      <CoreCompetencyFrame
        maxWidth="40.88rem"
        position="relative"
        width="100%"
        margin="0 auto"
      >
        <Text
          margin="2.25rem 0"
          color="blue"
          fontSize={2}
          fontWeight="bold"
          textAlign="center"
        >
          핵심 역량
        </Text>
        <Contents />
      </CoreCompetencyFrame>
    </Layout>
  )
}

export default CoreCompetencyPage
