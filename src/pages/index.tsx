import React from 'react'

import Layout from '../components/share/layout'
import SectionIntroWonjin from '../components/section-intro-wonjin'
import SectionExpert from '../components/section-expert'
import SectionIntroCenter from '../components/section-intro-center'

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
