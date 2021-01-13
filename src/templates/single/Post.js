import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/wordpress-post"

export default ({ data }) => {
//console.log('Post.js data:',data)

return (<BlogPost data={data} />)
}

export const query = graphql`
  query post($id: String!) {
    page: wpPost(id: { eq: $id }) {
      title
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
      uri
      link
      date(formatString: "MMM. DD, YYYY")
      excerpt
      author {
        node {
          firstName
          lastName
          name

        }

      }
      featuredImage {
        node {
          caption
          author{
            node{
              name
            }
          }
          localFile {
            ...HeroImage
          }
        }
      }
      heroImage {
        heroImage {
          caption
          author{
            node{
              name
            }
          }
          localFile{
            ...HeroImage
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`
