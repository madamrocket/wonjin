import React from 'react'

import Layout from '../components/share/layout'
import HeadingSection from '../components/service/heading-section'
import SolutaionSection from '../components/service/solution-section'

interface ServicePageProps {
  location: Location
}

function ServiceIntroPage({ location }: ServicePageProps) {
  return (
    <Layout location={location}>
      <HeadingSection />
      <SolutaionSection />
    </Layout>
  )
}

export default ServiceIntroPage
