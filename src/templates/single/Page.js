import React from "react"
import { graphql } from "gatsby"
import WpDefaultPage from "../../components/template-parts/wordpress-page"
import WpProductPage from "../../components/template-parts/wordpress-product-page"

export default ({ data }) => {
  const { page } = data
  const { template } = page
  console.log(page)
  if (template) {
    const { templateName } = template
    switch (templateName ) {
      case "Product/General Page":
        return (<WpProductPage page={page} />)
      case "Default":
      default:
        return (<WpDefaultPage page={page} />)
    }
  }
  return (<WpDefaultPage page={page} />)

}

export const query = graphql`
  query page($id: String!) {
    page: wpPage(id: { eq: $id }) {
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
      introButtons {
        introButtons {
          text: buttonText
          link: buttonLink {
            ... on WpPage {
              uri
            }
            ... on WpPost {
              uri
            }
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
    }
  }
`
