import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

function CenterDetail({ data }: any) {
  console.log(data)
  return <div>Hello</div>
}

export const query = graphql`
  query DataQuery($slug: String!) {
    dataJson(id: { eq: $slug }) {
      id
      address
      dock
      equipment
      ev_count
      eyepiece
      food_storage
    }
  }
`

export default CenterDetail
