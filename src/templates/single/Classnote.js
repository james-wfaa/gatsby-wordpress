import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/wordpress-post"

export default ({ data }) => {
//console.log('Post.js data:',data)

return (<BlogPost data={data} />)
}

export const query = graphql`
  query classnote($id: String!) {
    page: wpClassnote(id: { eq: $id }) {
      title
      content
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
    }
  }
`
