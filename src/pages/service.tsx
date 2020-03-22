import React from 'react'

import Layout from '../components/share/layout'
import HeadingSection from '../components/service/heading-section'
import SolutaionSection from '../components/service/solution-section'
import Banner from '../components/service/banner'
import ServiceSeciton from '../components/service/service-section'

interface ServicePageProps {
  location: Location
}

function ServiceIntroPage({ location }: ServicePageProps) {
  return (
    <Layout location={location}>
      <HeadingSection />
      <SolutaionSection />
      <Banner />
      <ServiceSeciton />
    </Layout>
  )
}

export default ServiceIntroPage
