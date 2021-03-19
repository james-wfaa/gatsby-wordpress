import React from "react"
import { graphql } from "gatsby"
import WpEvent from "../../components/template-parts/wordpress-event"

const Event = ({ data }) => {
  const { event } = data
  //console.log( 'event object:',event )
  return (<WpEvent page={event} />)
}
export default Event

export const query = graphql`
  query event($id: String!) {
    event: wpEvent(id: { eq: $id }) {
      title
      excerpt
      content
      blocks {
        name
        isDynamic
        originalContent
        dynamicContent
        innerBlocks {
          name
          isDynamic
          originalContent
          dynamicContent
          innerBlocks {
            name
            isDynamic
            originalContent
            dynamicContent
          }
        }
      }
      link
      url
      featuredImage {
        node {
          localFile {
            ...HeroImage
          }
        }
      }
      eventsCategories {
        nodes {
          name
          url: uri
          events {
            nodes {
              title
              excerpt
              content
              link
              url
              date(formatString: "dddd, MMM. D")
              endDate
              startDate
            }
          }
        }
      }
      eventDetails {
        eventFullSoldOut
        eventFullText
        eventlocationDetails
        registrationUrl
        questions
        virtualEvent
        trip
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
        content
        latitude
        longitude
      }

    }
  }
`
