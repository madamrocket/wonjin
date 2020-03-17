import React from 'react'

import Layout from '../components/share/layout'
import SectionIntroWonjin from '../components/section-intro-wonjin'
import SectionExpert from '../components/section-expert'

function IndexPage() {
  return (
    <Layout>
      <SectionIntroWonjin />
      <SectionExpert />
    </Layout>
  )
}

export default IndexPage
