import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GNB from '../gnb'
import SEO from '../seo'
import ResetStyle from './reset-style'
import Container from './container'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
      <GNB />
      <SEO title={data.site.siteMetadata.title} />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
