import React from "react"
import Layout from "../layout"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import WordPressContentBlocks from "../content-blocks/WordPressContentBlocks"

function WordPressPage({ page }) {
  const {  excerpt, featuredImage, introButtons, blocks } = page
  const { introButtons: buttons } = introButtons
  console.log(blocks)
  

  return (
    <Layout>

    <div>Aggregate Template</div>
    <WordPressContentBlocks blocks={blocks} />

     
    </Layout>
  )
}

export default WordPressPage
