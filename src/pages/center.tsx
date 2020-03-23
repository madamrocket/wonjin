import React, { useState, useEffect } from 'react'
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
  const [center, setCenter] = useState<Center | null>(null)

  useEffect(() => {
    const match = location.search.match(/id=([^&]*)/)

    setCenter(
      match
        ? (centers.find(({ id }) => id === Number(match[1])) as Center)
        : centers[0],
    )
  }, [])

  const handleSelectedCenter = (selectedId: number) => {
    setCenter(centers.find(({ id }) => id === selectedId) as Center)
  }

  if (!center) {
    return null
  }

  return (
    <Layout location={location}>
      <HeadingSection
        centers={data}
        selectedId={center ? center.id : 0}
        onClick={handleSelectedCenter}
      />
      <DetailSection center={center} />
    </Layout>
  )
}

export default CenterIntroPage
