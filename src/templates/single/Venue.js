import React from "react"
import { graphql } from "gatsby"
import WpDefaultPage from "../../components/template-parts/wordpress-page"
import WpProductPage from "../../components/template-parts/wordpress-product-page"

export default ({ data }) => {
  const { page } = data
  const { template } = page
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
  query venue($id: String!) {
    page: wpVenue(id: { eq: $id }) {
      title
      address
      city
      state
      country
      zip
      content
    }
  }
`
