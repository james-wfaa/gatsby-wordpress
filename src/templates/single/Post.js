import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/wordpress-post"

const Post = ({ data }) => {
//console.log('Post.js data:',data)

return (<BlogPost data={data} />)
}

export default Post

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
          mediaDetails {
            height
            width
          }
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
          mediaDetails {
            height
            width
          }
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
        }
      }
    }
  }
`
