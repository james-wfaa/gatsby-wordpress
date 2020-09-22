import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"
import StorySectionHeader from '../parts/StorySectionHeader'


function WordPressPage({ page }) {
  const { title, content, featuredImage } = page


  return (
    <Layout>
      <PageSection>
      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
          <FeaturedImage featuredImage={featuredImage} />
      )}
        <StorySectionHeader heading={title} />
        <WordPressContent content={content} />
      </PageSection>
    </Layout>
  )
}

export default WordPressPage
