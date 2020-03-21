import React from 'react'

import Layout from '../components/share/layout'
import HeadingSection from '../components/wonjin/heading-section'
import HistorySection from '../components/wonjin/history-section'
import CustomerSection from '../components/wonjin/customer-section'

interface WonjinIntroPageProps {
  location: Location
}

function WonjinIntroPage({ location }: WonjinIntroPageProps) {
  return (
    <Layout location={location}>
      <HeadingSection />
      <HistorySection />
      <CustomerSection />
    </Layout>
  )
}

export default WonjinIntroPage
