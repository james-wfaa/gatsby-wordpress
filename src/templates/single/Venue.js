import React from "react"
import { graphql } from "gatsby"
import WpVenue from "../../components/template-parts/wordpress-venue"

export default ({ data }) => {
  const { venue } = data
  console.log(venue)
  return (<WpVenue venue={venue} />)
}

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
