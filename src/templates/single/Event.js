import React from "react"
import { graphql } from "gatsby"
import WpDefaultPage from "../../components/template-parts/wordpress-page"
import WpProductPage from "../../components/template-parts/wordpress-product-page"

export default ({ data }) => {
  const { event } = data
  console.log( event )

}

export const query = graphql`
  query event($id: String!) {
    event: wpEvent(id: { eq: $id }) {
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
        ... on WpProductGeneralPageTemplate {
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
      startDate
      endDate
    }
  }
`
