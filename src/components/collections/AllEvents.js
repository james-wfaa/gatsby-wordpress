import { useStaticQuery, graphql } from "gatsby"

const AllEvents = () => {
    const { allWpEvent } = useStaticQuery(
      graphql`
        query {
          allWpEvent(limit: 200, sort: {order: DESC, fields: date}) {
            nodes {
                databaseId
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
                featuredEvent
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
                    slug
                    url: uri
                    events {
                        nodes {
                        title
                        excerpt
                        content
                        eventsCategories {
                          nodes {
                            name
                            url: uri
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
                        link
                        url
                        date(formatString: "dddd, MMM. D")
                        endDate
                        startDate
                        }
                    }
                    }
                }
                products {
                  nodes {
                    slug
                    name
                  }
                }
                eventDetails {
                    eventFullSoldOut
                    eventFullText
                    eventlocationDetails
                    registrationUrl
                    questions
                    virtualEvent
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
        }
      `
    )
    return (
      allWpEvent
    )
  }
  
  
  export default AllEvents
  