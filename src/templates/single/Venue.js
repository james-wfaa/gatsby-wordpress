import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import WordPressContent from "../../components/content-blocks/WordPressBasicContentBlocks"

function WpVenue({ data }) {
  const { venue } = data
  const {
    title,
    content
  } = venue

  return (
    <Layout>
      <PageSection heading={title} pageTitle><div>Venue template</div>
        <WordPressContent content={content} />
      </PageSection>
    </Layout>
  )
}

export default WpVenue

export const query = graphql`
  query venue($id: String!) {
    venue: wpVenue(id: { eq: $id }) {
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
