import React from "react"
import Layout from "../layout"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import WordPressContentBlocks from "../content-blocks/WordPressContentBlocks"

function WordPressPage({ page }) {
  const {  excerpt, featuredImage, blocks } = page

  return (
    <Layout>
      <HeroIntroSection  
      heroImage={featuredImage.node.localFile}
      heroSize="slim"
      excerpt={excerpt}
      />

    <WordPressContentBlocks blocks={blocks} />

     
    </Layout>
  )
}

export default WordPressPage
