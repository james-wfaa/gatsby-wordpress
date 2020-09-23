import React from "react"
import { graphql } from "gatsby"
import WpOrganizer from "../../components/template-parts/wordpress-organizer"

export default ({ data }) => {
  const { organizer } = data
  console.log(organizer)
  return (<WpOrganizer organizer={organizer} />)
}

export const query = graphql`
  query organizer($id: String!) {
    organizer: wpOrganizer(id: { eq: $id }) {
      title
    }
  }
`
