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
        ... on WpAggregateProductPageTemplate {
          templateName
        }
        ... on WpHomePageTemplate {
          templateName
        }
        ... on WpTopLevelPageTemplate {
          templateName
        }
        ... on WpEmailLoginPageTemplate {
          templateName
        }
        ... on WpProductGeneralPageTemplate {
          templateName
        }
        ... on WpNewsAndStoriesPageTemplate {
          templateName
        }
        ... on WpEventsMainPageTemplate {
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
      blocks {
        name
        originalContent
        dynamicContent
        innerBlocks {
          name
          originalContent
          dynamicContent
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
