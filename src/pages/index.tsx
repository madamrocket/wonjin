import React from 'react'
import { Link } from 'gatsby'

import { SITE_TITLE } from '../constants'
import Layout from '../components/share/layout'
import Head from '../components/seo'

function IndexPage() {
  return (
    <Layout>
      <Head title={SITE_TITLE} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
