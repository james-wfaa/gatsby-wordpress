import React from "react"
import Layout from "../layout"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import WordPressContent from "../content-blocks/WordPressContent"

function WordPressPage({ page }) {
  const { title, content, excerpt, featuredImage, introButtons } = page
  const { introButtons: buttons } = introButtons
  console.log(buttons)
  console.log(introButtons)
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

    <WordPressContent content={content} />

     
    </Layout>
  )
}

export default WordPressPage
