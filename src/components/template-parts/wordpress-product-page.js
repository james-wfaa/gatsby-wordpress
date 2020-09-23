import React from "react"
import Layout from "../layout"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import WordPressContent from "../content-blocks/WordPressContent"
import WordPressContentBlocks from "../content-blocks/WordPressContentBlocks"

function WordPressPage({ page }) {
  const { content, excerpt, featuredImage, introButtons, blocks } = page
  const { introButtons: buttons } = introButtons
  console.log(blocks)
  const normalizedButtons = buttons.map(item=>{
    return {
      link: item.link.uri,
      text: item.text
    }
  
  }
  )


  console.log(buttons)
  console.log(normalizedButtons)

  return (
    <Layout>
      <HeroIntroSection  
      heroImage={featuredImage.node.remoteFile}
      heroSize="slim"
      excerpt={excerpt}
      buttons={normalizedButtons}
      />

    <WordPressContentBlocks blocks={blocks} />

     
    </Layout>
  )
}

export default WordPressPage
