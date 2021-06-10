import React from "react"
import { graphql } from "gatsby"
import WpDefaultPage from "../../components/template-parts/wordpress-page"
import WpGroupPage from "../../components/template-parts/wordpress-group-page"
import WpProductPage from "../../components/template-parts/wordpress-product-page"
import WpAggregatePage from "../../components/template-parts/wordpress-aggregate-page"

const Page = ({ data }) => {
  if (typeof window !== "undefined" && window.location.href.includes('chapters.uwalumni.com')) {
    const fixedUrl = window.location.href.replace('chapters.uwalumni.com','www.uwalumni.com')
    window.location.replace(fixedUrl)
  }
  const { page, allWp } = data
  const { template, ancestors } = page

  if (ancestors) { // this page has a parent

    const groupSlug = 'groups'
    
    const topParent = ancestors.nodes[ancestors.nodes.length -1]
    if (topParent?.slug && topParent.slug === groupSlug) {
      //console.log('this is a group page or subpage')
      if (ancestors.nodes.length > 1) {
        //console.log('this is a group sub page')
      } else {
        //console.log('this is a group main page')
        const siteOptions = (allWp?.nodes) ? allWp.nodes[0].siteOptions : null
        const  chapterHomeFields = (siteOptions?.chapterHomeFields) ? siteOptions.chapterHomeFields : null
        return <WpGroupPage page={page} options={chapterHomeFields} />
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
      link
      heroIntroSection {
        introHeading
        introExcerpt
        heroHeading
      }
      content
      slug
      menuOrder
      hideFromMenu {
        hideFromMenu
        fieldGroupName
      }
      ancestors {
        nodes {
          id
          slug
          link
          ... on WpPage {
            id
            title
            link
            hideFromMenu {
              hideFromMenu
              fieldGroupName
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
          mediaDetails {
            width
          }
          localFile {
            ...HeroImageNew
            publicURL
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
          namedAnchor
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
                          srcWebp
                          srcSetWebp
                          originalImg
                          originalName
                          src
                          srcSet
                          aspectRatio
                          sizes
                        }
                      }
                      publicURL
                    }
                  }
                }
                acfAlternatePostType{
                  alternateposttype
                }
                videoFormat {
                  vimeoId
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
                          srcWebp
                          srcSetWebp
                          originalImg
                          originalName
                          src
                          srcSet
                          aspectRatio
                          sizes
                        }
                      }
                      publicURL
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
          product {
            slug
            name
            posts {
              nodes {
                title
                url: uri
                excerpt
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
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 712) {
                          base64
                          srcWebp
                          srcSetWebp
                          originalImg
                          originalName
                          aspectRatio
                          base64
                          src
                          srcSet
                          sizes
                        }
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
              url
              link
              venue {
                title
                city
                state
              }
              excerpt
              products {
                nodes {
                  name
                }
              }
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 712) {
                        base64
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                        src
                        srcSet
                        aspectRatio
                        sizes
                      }
                    }
                    publicURL
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
            innerBlocks {
              name
              originalContent
              dynamicContent
              saveContent
            }
          }
        }
      }
      products {
        nodes {
          slug
          name
          ...ProductEventCards
          ...ProductPostCards
        }
      }
      chapterLevel {
        chapterLevel
      }
      chapterSponsors {
        sponsors {
          sponsorName
          sponsorText
          sponsorLogo {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 312) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
        }
      }
    }
    allWp {
      nodes {
        siteOptions {
          chapterHomeFields {
            chapters
            bascomChapterText
            recognizedChapterText
            varsityChapterText
            affinityGroupText
            affinityGroupPositioningStatement
          }
        }
      }
    }
  }
`
