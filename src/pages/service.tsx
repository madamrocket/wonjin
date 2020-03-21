import React from 'react'

import Layout from '../components/share/layout'
import HeadingSection from '../components/service/heading-section'

interface ServicePageProps {
  location: Location
}

function ServiceIntroPage({ location }: ServicePageProps) {
  return (
    <Layout location={location}>
      <HeadingSection />
    </Layout>
  )
}

export default ServiceIntroPage
