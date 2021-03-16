import React from "react"
import { graphql } from "gatsby"

function WpOrganizerPage({ data }) {

  return (
    <div>Organizer template</div>
  )
}
export default WpOrganizerPage

export const query = graphql`
  query organizer($id: String!) {
    organizer: wpOrganizer(id: { eq: $id }) {
      title
    }
  }
`
