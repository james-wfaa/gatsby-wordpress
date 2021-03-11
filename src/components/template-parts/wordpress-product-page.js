import React from "react"
import Layout from "../layout"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import WordPressContentBlocks from "../content-blocks/WordPressContentBlocks"
import ProductMenu from "../parts/ProductMenu"

function WordPressPage({ page }) {
  const {  excerpt, featuredImage, introButtons, heroIntroSection, products, blocks, title, wpChildren } = page
  const { introButtons: buttons } = introButtons
  const { heroHeading, introExcerpt, introHeading } = heroIntroSection

  const heroIntroExcerpt = (introExcerpt) ? introExcerpt : excerpt
  const heroOverlayHeading = (heroHeading) ? `<span>${heroHeading}</span> ON` : null

  const product = (products?.nodes) ? products.nodes[0] : null
  //console.log(product)

  const navContents = (wpChildren.nodes[0])
    ? wpChildren.nodes.map((node) => {
      //console.log("Nav: " +  node.uri);
      return node
    })
    : ''

  if (navContents.length > 0) {
    navContents.sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
  }

  const normalizedButtons = (buttons)
    ? buttons.map(item=>{
      let buttonLink = (item?.buttonLink?.uri)
      ? item.buttonLink.uri
      : (item.buttonExternalLinkUrl)
        ? item.buttonExternalLinkUrl
        : ''

      if (item?.namedAnchor) {
        buttonLink = buttonLink + item.namedAnchor
      }
      return {
        link: buttonLink,
        text: item.buttonText
      }
    })
  : ''
  return (
    <Layout title={title}>
      { featuredImage?.node ? (
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroSize="slim"
          heroHeading={heroOverlayHeading}
          redHeading={title}
          excerpt={heroIntroExcerpt}
          buttons={normalizedButtons}
          productPage
        />
      ) : (
        <HeroIntroSection
          redHeading={title}
          heroHeading={heroOverlayHeading}
          excerpt={heroIntroExcerpt}
          buttons={normalizedButtons}
          productPage
        />
      )}
      { navContents && (
          <ProductMenu items={navContents} menuTitle={title} />
      )}
      <WordPressContentBlocks products={products} blocks={blocks} />
    </Layout>
  )
}

export default WordPressPage
