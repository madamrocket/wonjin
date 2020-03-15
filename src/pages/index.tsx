import React from 'react'
import { Link } from 'gatsby'

import { SITE_TITLE } from '../constants'
import Layout from '../components/share/layout'
import Head from '../components/seo'
import SectionIntroWonjin from '../components/section-intro-wonjin'

function IndexPage() {
  return (
    <Layout>
      <Head title={SITE_TITLE} />
      <SectionIntroWonjin />
    </Layout>
  )
}

export default IndexPage
