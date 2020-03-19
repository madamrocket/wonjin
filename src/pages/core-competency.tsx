import React from 'react'

import Layout from '../components/share/layout'

interface CoreCompetencyPageProps {
  location: Location
}

function CoreCompetencyPage({ location }: CoreCompetencyPageProps) {
  return <Layout location={location}>핵심역량 페이지</Layout>
}

export default CoreCompetencyPage
