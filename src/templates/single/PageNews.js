import React from "react"
import { graphql } from "gatsby"
import WpNewsPage from "../../components/template-parts/wordpress-news-page"

export default ({ data }) => {
  const { page } = data
  console.log(page)
  return (<WpNewsPage page={page} />)

}

export const query = graphql`
  query news($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      excerpt
      content
      featuredImage {
        node {
          localFile {
            ...HeroImage
          }
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
