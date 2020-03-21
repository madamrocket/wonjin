import React from 'react'

import Layout from '../components/share/layout'
import HeadingSection from '../components/wonjin/heading-section'
import HistorySection from '../components/wonjin/history-section'

interface WonjinIntroPageProps {
  location: Location
}

function WonjinIntroPage({ location }: WonjinIntroPageProps) {
  return (
    <Layout location={location}>
      <HeadingSection />
      <HistorySection />
    </Layout>
  )
}

export default WonjinIntroPage
