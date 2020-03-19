import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GNB from '../gnb'
import SEO from '../seo'
import ResetStyle from './reset-style'
import Container from './container'
import Footer from '../footer'

interface LayoutProps {
  children: React.ReactNode
  location: Location
}

const Layout = ({ children, location }: LayoutProps) => {
  const { pathname } = location

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ResetStyle />
      <GNB pathname={pathname} />
      <SEO title={data.site.siteMetadata.title} />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
