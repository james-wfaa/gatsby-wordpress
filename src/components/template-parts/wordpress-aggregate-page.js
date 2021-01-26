import React from "react"
import Layout from "../layout"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import WordPressContentBlocks from "../content-blocks/WordPressContentBlocks"

function WordPressPage({ page }) {
  const {  title, excerpt, featuredImage, introButtons, blocks } = page
  const { introButtons: buttons } = introButtons
  const normalizedButtons = (buttons) ? buttons.map(item=>{
    return {
      link: item.link.uri,
      text: item.text
    }

  }
  ) : null





  return (
    <Layout title={title}>
      { featuredImage && (
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroSize="slim"
          redHeading={title}
          excerpt={excerpt}
          buttons={normalizedButtons}
        />
      )}


    <WordPressContentBlocks blocks={blocks} stagger />


    </Layout>
  )
}

export default WordPressPage
