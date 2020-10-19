import React from "react"
import { graphql } from "gatsby"
import WpEmailPage from "../../components/template-parts/wordpress-email-page"


export default ({ data }) => {
  console.log(data)
  const { page } = data
  return (<WpEmailPage page={page} />)
}

export const query = graphql`
  query email($id: String!) {
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
      HalfPageAd {
        fieldGroupName
        adButtonLink {
          ... on WpPage {
            id
            uri
          }
        }
        adButtonText
        adCopy
        adHeading
        adImage {
          id
        }
      }
    }
  }
`
