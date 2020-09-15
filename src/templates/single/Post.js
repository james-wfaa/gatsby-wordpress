import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/wordpress-post"

export default ({ data }) => {
console.log(data)

return (<BlogPost data={data} />)
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM Do")
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
          remoteFile {
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
