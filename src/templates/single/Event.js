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
