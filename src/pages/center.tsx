import React from 'react'

import Layout from '../components/share/layout'

interface CenterIntroPageProps {
  location: Location
}

function CenterIntroPage({ location }: CenterIntroPageProps) {
  return <Layout location={location}>센터 소개 페이지</Layout>
}

export default CenterIntroPage
