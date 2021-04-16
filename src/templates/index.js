import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"

const Index = ({ data }) => (
  <Layout>
    <h1>this template has been cleaned out</h1>
  </Layout>
)
export default Index

export const query = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  query HomePage($offset: Int!, $perPage: Int!) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: ["Post", "Page", "Event"] } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        uri
        title
        featuredImage {
          node {
            localFile {
              ...Thumbnail
            }
          }
        }
      }
    }
  }
`
