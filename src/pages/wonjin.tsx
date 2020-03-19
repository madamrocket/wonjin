import React from 'react'

import Layout from '../components/share/layout'

interface WonjinIntroPageProps {
  location: Location
}

function WonjinIntroPage({ location }: WonjinIntroPageProps) {
  return <Layout location={location}>원진 소개 페이지</Layout>
}

export default WonjinIntroPage
