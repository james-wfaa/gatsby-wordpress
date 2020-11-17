import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/wordpress-post"

export default ({ data }) => {
console.log('Post.js data:',data)

return (<BlogPost data={data} />)
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM Do")
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
      categories {
        nodes {
          name
          slug
        }
      }
    }

    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
