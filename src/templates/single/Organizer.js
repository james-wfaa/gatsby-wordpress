import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import WordPressContent from "../../components/content-blocks/WordPressBasicContentBlocks"

function WpOrganizerPage({ data }) {
  const { organizer } = data
  const {
    title,
  } = organizer

  return (
    <Layout>
      <PageSection heading={title} pageTitle><div>Organizer template</div>
        <WordPressContent content={title} />
      </PageSection>
    </Layout>
  )
}
export default WpOrganizerPage

export const query = graphql`
  query organizer($id: String!) {
    organizer: wpOrganizer(id: { eq: $id }) {
      title
    }
  }
`
