import React, { useState } from 'react'
import data from '../components/center/data.json'

import Layout from '../components/share/layout'
import HeadingSection from '../components/center/heading-section'
import DetailSection from '../components/center/detail-section'
import { Center } from '../components/center/types'

interface CenterIntroPageProps {
  location: Location
}

function CenterIntroPage({ location }: CenterIntroPageProps) {
  const centers = data as Center[]
  const [center, setCenter] = useState<Center>(centers[0])

  const handleSelectedCenter = (selectedId: number) => {
    setCenter(centers.find(({ id }) => id === selectedId) as Center)
  }

  return (
    <Layout location={location}>
      <HeadingSection
        centers={data}
        selectedId={center ? center.id : ''}
        onClick={handleSelectedCenter}
      />
      <DetailSection center={center} />
    </Layout>
  )
}

export default CenterIntroPage
