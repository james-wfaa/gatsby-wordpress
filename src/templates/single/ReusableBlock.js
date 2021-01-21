import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import WordPressContent from "../../components/content-blocks/WordPressBasicContentBlocks"

function WpReusableBlock({ data }) {
  const { reusableBlock } = data
  const {
    title,
    content
  } = reusableBlock

  return (
    <Layout>
      <PageSection heading={title} pageTitle><div>Reusable Block template</div>
        <WordPressContent content={content} />
      </PageSection>
    </Layout>
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
