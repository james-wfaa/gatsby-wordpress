import React from "react"
import { graphql } from "gatsby"
import WpDefaultPage from "../../components/template-parts/wordpress-page"
import WpGroupPage from "../../components/template-parts/wordpress-group-page"
import WpProductPage from "../../components/template-parts/wordpress-product-page"
import WpAggregatePage from "../../components/template-parts/wordpress-aggregate-page"

const Page = ({ data }) => {
  const { page } = data
  const { template, ancestors } = page


  if (ancestors) { // this page has a parent

    const groupSlug = 'groups'
    
    const topParent = ancestors.nodes[ancestors.nodes.length -1]
    if (topParent?.slug && topParent.slug === groupSlug) {
      console.log('this is a group page or subpage')
      if (ancestors.nodes.length > 1) {
        //console.log('this is a group sub page')
      } else {
        //console.log('this is a group main page')
        return <WpGroupPage page={page} />
      }
    }
    
  }
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

export default Page

export const query = graphql`
  query all($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      excerpt
      content
      ancestors {
        nodes {
          id
          slug
          link
          ... on WpPage {
            id
            title
            link
          }
          ... Children
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
        }
      }
      ... Children
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
      groups {
        nodes {
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
            saveContent
          }
        }
      }
      products {
        nodes {
          name
        }
      }
    }
  }
`
