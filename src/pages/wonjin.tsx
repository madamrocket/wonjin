import React from 'react'

import Layout from '../components/share/layout'
import Heading from '../components/heading'

interface WonjinIntroPageProps {
  location: Location
}

function WonjinIntroPage({ location }: WonjinIntroPageProps) {
  return (
    <Layout location={location}>
      <Heading
        title="물류의 새로운 길,"
        emphasis="지금 원진물류를 만나보세요."
        Linebreak
        image="/images/wonjin-intro-cover.png"
        textAlign="left"
      />
    </Layout>
  )
}

export default WonjinIntroPage
