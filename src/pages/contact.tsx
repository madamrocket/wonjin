import React from 'react'

import Layout from '../components/share/layout'
import Banner from '../components/contact/banner'
import Map from '../components/contact/map'
import CompanyInfoSection from '../components/contact/company-info-section'

interface ContactPageProps {
  location: Location
}

function ContactPage({ location }: ContactPageProps) {
  return (
    <Layout location={location}>
      <Banner />
      <Map />
      <CompanyInfoSection />
    </Layout>
  )
}

export default ContactPage
