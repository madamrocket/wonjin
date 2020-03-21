import React from 'react'

import Layout from '../components/share/layout'
import HeadingSection from '../components/wonjin/heading-section'

interface WonjinIntroPageProps {
  location: Location
}

function WonjinIntroPage({ location }: WonjinIntroPageProps) {
  return (
    <Layout location={location}>
      <HeadingSection />
    </Layout>
  )
}

export default WonjinIntroPage
