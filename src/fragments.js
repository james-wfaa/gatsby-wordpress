import { graphql } from "gatsby"

export const fragments = graphql`
  
  fragment HeroImageNew on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  fragment EventImage on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, width: 1080)
    }
  }
  fragment CardImage on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, width: 712)
    }
  }
  fragment Children on WpPage {
    wpChildren {
      nodes {
        ... on WpPage {
          id
          title
          uri
          dateGmt
          dayYear: date(formatString: "DD, YYYY")
          month: date(formatString: "MM")
          hideFromMenu {
            hideFromMenu
            fieldGroupName
          }
          menuOrder
          wpChildren {
            nodes {
              ... on WpPage {
                id
                title
                uri
                dateGmt
                dayYear: date(formatString: "DD, YYYY")
                month: date(formatString: "MM")
                hideFromMenu {
                  hideFromMenu
                  fieldGroupName
                }
                menuOrder
                wpChildren {
                  nodes {
                    ... on WpPage {
                      id
                      title
                      uri
                      dateGmt
                      dayYear: date(formatString: "DD, YYYY")
                      month: date(formatString: "MM")
                      hideFromMenu {
                        hideFromMenu
                        fieldGroupName
                      }
                      menuOrder
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  fragment ProductEventCards on WpProduct {
    events {
      nodes {
        title
        url: uri
        startDate
        endDate
        eventDetails {
          eventFullSoldOut
          eventFullText
          eventlocationDetails
          fieldGroupName
          questions
          registrationUrl
          timeZoneInfoFreeText
          trip
          virtualEvent
        }
        venue {
          title
          city
          state
        }
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 712)
              }
            }
          }
        }
        eventsCategories {
          nodes {
            name
            url: uri
          }
        }
      }
    }
  }
  fragment ProductPostCards on WpProduct {
    posts {
      nodes {
        title
        url: uri
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 712)
              }
            }
          }
        }
        acfAlternatePostType{
          alternateposttype
        }
        videoFormat {
          vimeoId
        }
        linkFormat {
          linkAuthor
          linkUrl
        }
        categories {
          nodes {
            name
            slug
            id
          }
        }
        products {
          nodes {
            name
            slug
            id
          }
        }

      }
    }
  }
`
