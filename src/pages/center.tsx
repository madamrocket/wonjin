import React, { useMemo, useState, useEffect } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/share/layout'
import Container from '../components/share/container'
import Text from '../components/share/text'
import { CenterAllContentsQuery } from '../__generated__/gatsby-types'
import HeadingSection from '../components/center/heading-section'
import { Center } from '../components/center/types'

interface CenterIntroPageProps {
  location: Location
}

function CenterIntroPage({ location }: CenterIntroPageProps) {
  const {
    allDataJson: { edges },
  } = useStaticQuery<CenterAllContentsQuery>(query)
  const [centers] = useState<Center[]>(edges.map(({ node }) => node as Center))
  const [center, setCenter] = useState<Center | null>(centers[0])

  const handleSelectedCenter = (selectedId: string) => {
    setCenter(centers.find(({ id }) => id === selectedId) || null)
  }

  return (
    <Layout location={location}>
      <HeadingSection
        centers={centers}
        selectedId={center ? center.id : ''}
        onClick={handleSelectedCenter}
      />
    </Layout>
  )
}

export const query = graphql`
  query CenterAllContents {
    allDataJson {
      edges {
        node {
          id
          image
          name
          address
        }
      }
    }
  }
`

export default CenterIntroPage
