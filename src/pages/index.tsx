import React from 'react'

import Layout from '../components/share/layout'
import SectionIntroWonjin from '../components/main/section-intro-wonjin'
import SectionExpert from '../components/main/section-expert'
import SectionIntroCenter from '../components/main/section-intro-center'

interface IndexPageProps {
  location: Location
}

function IndexPage({ location }: IndexPageProps) {
  return (
    <Layout location={location}>
      <SectionIntroWonjin />
      <SectionIntroCenter />
      <SectionExpert />
    </Layout>
  )
}

export default IndexPage
