import React from 'react'

import Layout from '../components/share/layout'
import Banner from '../components/contact/banner'

interface ContactPageProps {
  location: Location
}

function ContactPage({ location }: ContactPageProps) {
  return (
    <Layout location={location}>
      <Banner />
    </Layout>
  )
}

export default ContactPage
