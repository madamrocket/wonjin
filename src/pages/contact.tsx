import React from 'react'

import Layout from '../components/share/layout'

interface ContactPageProps {
  location: Location
}

function ContactPage({ location }: ContactPageProps) {
  return <Layout location={location}>문의 페이지</Layout>
}

export default ContactPage
