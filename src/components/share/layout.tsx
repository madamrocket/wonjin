import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GlobalNavigationBar from './global-navigation-bar'
import Header from './header'
import Reset from './reset'
import { Container } from './share'

interface LayoutProps {
  children: React.ReactNode
  location: Location
}

const Layout = ({ children, location }: LayoutProps) => {
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
    <Container maxWidth={720} centered>
      <Reset />
      <GlobalNavigationBar location={location} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Container>
  )
}

export default Layout
