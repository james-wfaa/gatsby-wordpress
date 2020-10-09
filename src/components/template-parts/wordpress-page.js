import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"

function WordPressPage({ page }) {
  const { title, content, featuredImage } = page

  console.log(page)


  return (
    <Layout>
      <PageSection heading={title} pageTitle><div>Default template</div>
      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
          <FeaturedImage featuredImage={featuredImage} />
      )}
        <WordPressContent content={content} />
      </PageSection>
    </Layout>
  )
}

export default WordPressPage
