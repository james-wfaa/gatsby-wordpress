import React from "react"
import { graphql } from "gatsby"
import WpEvent from "../../components/template-parts/wordpress-event"

const Event = ({ data }) => {
  if (typeof window !== "undefined" && window.location.href.includes('chapters.uwalumni.com')) {
    const fixedUrl = window.location.href.replace('chapters.uwalumni.com','www.uwalumni.com')
    window.location.replace(fixedUrl)
  }
  const { event } = data
  return (<WpEvent page={event} />)
}
export default Event

export const query = graphql`
  query event($id: String!) {
    event: wpEvent(id: { eq: $id }) {
      id
      title
      excerpt
      content
      link
      url
      featuredImage {
        node {
          altText
          localFile {
            ...EventImage
          }
        }
      }
      eventsCategories {
        nodes {
          name
          slug
          url: uri
          events {
            nodes {
              id
              slug
              title
              url: uri
              excerpt
              eventDetails {
                eventFullSoldOut
                eventFullText
                eventlocationDetails
                registrationUrl
                questions
                virtualEvent
                trip
              }
              featuredImage {
                node {
                  localFile {
                    ...CardImage
                  }
                }
              }
              content
              link
              date(formatString: "dddd, MMM. D")
              endDate
              startDate
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
              eventsCategories {
                nodes {
                  name
                  url: uri
                }
              }
              products {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
      products {
        nodes {
          name
          slug
          pages {
            nodes {
              title
              uri
            }
          }
          events{
            nodes {
              id
              slug
              title
              url: uri
              excerpt
              eventDetails {
                eventFullSoldOut
                eventFullText
                eventlocationDetails
                registrationUrl
                questions
                virtualEvent
                trip
                timeZoneInfoFreeText
              }
              eventsCategories {
                nodes {
                  name
                  url: uri
                }
              }
              products {
                nodes {
                  name
                }
              }
              featuredImage {
                node {
                  localFile {
                    ...CardImage
                  }
                }
              }
              content
              link
              date(formatString: "dddd, MMM. D")
              endDate
              startDate
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
        timeZoneInfoFreeText
      }
      eventsCategories {
        nodes {
          name
          url: uri
        }
      }
      products {
        nodes {
          name
        }
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
