import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressBasicContentBlocks"
import FeaturedImage from "../content-blocks/FeaturedImage"

function WordPressPage({ page }) {
  const { title, content, featuredImage, blocks } = page


  return (
    <Layout>
      <PageSection heading={title} pageTitle><div>Default template</div>
      {!!featuredImage?.node?.localFile?.childImageSharp && (
          <FeaturedImage featuredImage={featuredImage} />
      )}
        <WordPressContent blocks={blocks} />
      </PageSection>
    </Layout>
  )
}

export default WordPressPage
