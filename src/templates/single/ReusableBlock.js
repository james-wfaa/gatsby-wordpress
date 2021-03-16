import React from "react"
import { graphql } from "gatsby"

function WpReusableBlock({ data }) {  
  return (
    <div>Reusable Block template</div>
  )
}

export default WpReusableBlock

export const query = graphql`
  query resusableBlock($id: String!) {
    reusableBlock: wpReusableBlock(id: { eq: $id }) {
      title
    }
  }
`
