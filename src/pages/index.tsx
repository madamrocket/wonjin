import React from 'react'

import Layout from '../components/share/layout'
import SectionIntroWonjin from '../components/section-intro-wonjin'
import SectionExpert from '../components/section-expert'
import SectionIntroCenter from '../components/section-intro-center'

function IndexPage() {
  return (
    <Layout>
      <SectionIntroWonjin />
      <SectionIntroCenter />
      <SectionExpert />
    </Layout>
  )
}

export default IndexPage
