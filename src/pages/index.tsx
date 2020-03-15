import React from 'react'
import { Link, PageRendererProps } from 'gatsby'

import { SITE_TITLE } from '../constants'
import Layout from '../components/layout'
import Head from '../components/head'

function IndexPage({ location }: PageRendererProps) {
  return (
    <Layout location={location}>
      <Head title={SITE_TITLE} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
