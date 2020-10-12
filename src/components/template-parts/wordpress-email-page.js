import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"

function WordPressEmailPage({ page }) {
  const { title, content, featuredImage } = page

  console.log(page)


  return (
    <Layout>
      <PageSection heading={title} pageTitle><div>Email login template</div>
      {!!featuredImage?.node?.localFile?.childImageSharp && (
          <FeaturedImage featuredImage={featuredImage} />
      )}
        <WordPressContent content={content} />
      </PageSection>
    </Layout>
  )
}

export default WordPressEmailPage
