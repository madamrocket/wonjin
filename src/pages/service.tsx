import React from 'react'

import Layout from '../components/share/layout'

interface ServicePageProps {
  location: Location
}

function ServiceIntroPage({ location }: ServicePageProps) {
  return <Layout location={location}>서비스 소개 페이지</Layout>
}

export default ServiceIntroPage
