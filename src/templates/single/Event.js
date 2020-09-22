import React from "react"
import { graphql } from "gatsby"
import WpEvent from "../../components/template-parts/wordpress-event"

export default ({ data }) => {
  const { event } = data
  console.log( event )
  return (<WpEvent page={event} />)
}

export const query = graphql`
  query event($id: String!) {
    event: wpEvent(id: { eq: $id }) {
      title
      excerpt
      content
      featuredImage {
        node {
          remoteFile {
            ...HeroImage
          }
        }
      }
      startDate
      endDate
    }
  }
`
