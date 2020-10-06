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
      link
      url
      featuredImage {
        node {
          remoteFile {
            ...HeroImage
          }
        }
      }
      eventDetails {
        eventFullSoldOut
        eventFullText
        eventlocationDetails
        registrationUrl
      }
      date(formatString: "dddd, MMM. D")
      endDate
      startDate
      cost
      organizers {
        nodes {
          title
        }
      }
      timezone
      venue {
        address
        city
        state
        zip
        title
      }    
    }
  }
`
