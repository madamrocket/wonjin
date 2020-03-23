import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/share/layout'
import { CenterAllContentsQuery } from '../__generated__/gatsby-types'
import HeadingSection from '../components/center/heading-section'
import DetailSection from '../components/center/detail-section'
import { Center } from '../components/center/types'

interface CenterIntroPageProps {
  location: Location
}

function CenterIntroPage({ location }: CenterIntroPageProps) {
  const {
    allDataJson: { edges },
  } = useStaticQuery<CenterAllContentsQuery>(query)
  const [centers] = useState<Center[]>(edges.map(({ node }) => node as Center))
  const [center, setCenter] = useState<Center>(centers[0])

  const handleSelectedCenter = (selectedId: string) => {
    setCenter(centers.find(({ id }) => id === selectedId) as Center)
  }

  console.log('centers', centers)

  return (
    <Layout location={location}>
      <HeadingSection
        centers={centers}
        selectedId={center ? center.id : ''}
        onClick={handleSelectedCenter}
      />
      <DetailSection center={center} />
    </Layout>
  )
}

export const query = graphql`
  query CenterAllContents {
    allDataJson(sort: { fields: order }) {
      edges {
        node {
          id
          image
          name
          address
          description
        }
      }
    }
  }
`

export default CenterIntroPage
