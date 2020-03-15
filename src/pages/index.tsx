import React from 'react'

import Layout from '../components/share/layout'
import SectionIntroWonjin from '../components/section-intro-wonjin'
import SectionIntroService from '../components/section-intro-service'

function IndexPage() {
  return (
    <Layout>
      <SectionIntroWonjin />
      <SectionIntroService />
    </Layout>
  )
}

export default IndexPage
