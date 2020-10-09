import React from "react"
import { graphql } from "gatsby"
import WpDefaultPage from "../../components/template-parts/wordpress-page"
import WpProductPage from "../../components/template-parts/wordpress-product-page"
import WpEmailPage from "../../components/template-parts/wordpress-email-page"
import WpEventsPage from "../../components/template-parts/wordpress-events-page"
import WpNewsPage from "../../components/template-parts/wordpress-news-page"

export default ({ data }) => {
  const { page, events } = data
  const { template } = page
  console.log(page)
  if (template) {
    const { templateName } = template
    switch (templateName ) {
      case "Product/General Page":
        return (<WpProductPage page={page} />)
      case "Email Login Page":
        return (<WpEmailPage page={page} />)
      case "Events Main Page":
        return (<WpEventsPage page={page} events={events.edges} />)
      case "News And Stories Page":
        return (<WpNewsPage page={page} />)
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
          remoteFile {
            ...HeroImage
          }
        }
      }
      introButtons {
        introButtons {
          text: buttonText
          link: buttonLink {
            ... on WpPage {
              uri
            }
            ... on WpPost {
              uri
            }
          }
        }
      }
      storyCategories {
        categories {
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
                    remoteFile {
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
          category {
            events {
              nodes {
                id
                title
                url: uri
                excerpt
                featuredEvent
                featuredImage {
                  node {
                    remoteFile {
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
    },
    events: allWpEvent(limit: 100, sort: {order: ASC, fields: startDate}) {
      edges {
        node {
          id
          title
          url: uri
          excerpt
          featuredEvent
          featuredImage {
            node {
              remoteFile {
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
    }
    
  }
`
