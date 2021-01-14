import React from "react"
import { graphql } from "gatsby"
import WpDefaultPage from "../../components/template-parts/wordpress-page"
import WpProductPage from "../../components/template-parts/wordpress-product-page"
import WpAggregatePage from "../../components/template-parts/wordpress-aggregate-page"

export default ({ data }) => {
  const { page } = data
  const { template } = page
  if (template) {
    const { templateName } = template
    switch (templateName ) {
      case "Aggregate (Product) Page":
        return (<WpAggregatePage page={page} />)
        case "Product/General Page":
        case "Product Template":
        case "General Template":
        return (<WpProductPage page={page} />)
    
      case "Default":
      default:
        return (<WpDefaultPage page={page} />)
    }
  }
  return (<WpDefaultPage page={page} />)

}

export const query = graphql`
  query all($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      excerpt
      content
      template {
        ... on WpDefaultTemplate {
          templateName
        }
        ... on WpTemplate_AggregateProductPage {
          templateName
        }
        ... on WpTemplate_HomePage {
          templateName
        }
        ... on WpTemplate_TopLevelPage {
          templateName
        }
        ... on WpProductTemplate {
          templateName
        }
        ... on WpGeneralTemplate {
          templateName
        }
      }
      featuredImage {
        node {
          localFile {
            ...HeroImage
          }
        }
      }
      introButtons {
        introButtons {
          buttonLink {
            ... on WpPage {
              id
              uri
            }
            ... on WpPost {
              id
              uri
            }
            ... on WpEvent {
              id
              uri
            }
          }
          buttonExternalLinkUrl
          buttonText
          goToEvents
        }
      }
      storyCategories {
        storycategoriesinner {
          category {
            slug
            name
            posts {
              nodes {
                title
                url: uri
                excerpt
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 712) {
                          base64
                          tracedSVG
                          srcWebp
                          srcSetWebp
                          originalImg
                          originalName
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          numberToShow
        }
      }
      eventCategories {
        categories {
          categoryEvent: category {
            events {
              nodes {
                id
                title
                url: uri
                excerpt
                featuredEvent
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 712) {
                          base64
                          tracedSVG
                          srcWebp
                          srcSetWebp
                          originalImg
                          originalName
                          aspectRatio
                        }
                      }
                    }
                  }
                }
                date
                startDate
                endDate
                eventsCategories {
                  nodes {
                    name
                    url: uri
                  }
                }
                venue {
                  title
                  state
                  city
                }
              }
            }
            name
          }
        }
      }
      eventListing {
        eventCategory {
          slug
          events {
            nodes {
              title
              startDate
              endDate
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
                      fluid(maxWidth: 712) {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                        aspectRatio
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
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
          saveContent
          innerBlocks {
            name
            originalContent
            dynamicContent
          }
        }

      }
    }
  }
`
