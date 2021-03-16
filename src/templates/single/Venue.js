import React from "react"
import { graphql } from "gatsby"

function WpVenue({ data }) {
  return (
    <div>Venue template</div>
  )
}

export default WpVenue

export const query = graphql`
  query venue($id: String!) {
    venue: wpVenue(id: { eq: $id }) {
      title
      address
      city
      state
      country
      zip
      content
    }
  }
`
