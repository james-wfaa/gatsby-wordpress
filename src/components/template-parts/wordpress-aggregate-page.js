import React from "react"
import Layout from "../layout"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import WordPressContentBlocks from "../content-blocks/WordPressContentBlocks"

function WordPressPage({ page }) {
  const {  title, excerpt, featuredImage,  heroIntroSection, introButtons, products, blocks } = page
  const { introButtons: buttons } = introButtons
  const { heroHeading, introExcerpt } = heroIntroSection
  const heroIntroExcerpt = (introExcerpt) ? introExcerpt : excerpt
  const heroOverlayHeading = (heroHeading) ? `<span>${heroHeading}</span> ON` : null

  const normalizedButtons = (buttons) ? buttons.map(item=>{
    return {
      key: item.link.url,
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
          heroHeading={heroOverlayHeading}
          redHeading={title}
          excerpt={heroIntroExcerpt}
          buttons={normalizedButtons}
          productPage
        />
      )}


    <WordPressContentBlocks products={products} blocks={blocks} stagger />


    </Layout>
  )
}

export default WordPressPage
