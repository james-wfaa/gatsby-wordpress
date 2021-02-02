import React from "react"
import Layout from "../layout"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import WordPressContentBlocks from "../content-blocks/WordPressContentBlocks"
import ProductMenu from "../parts/ProductMenu"

function WordPressPage({ page }) {
  const {  excerpt, featuredImage, introButtons, eventListing, blocks, title, wpChildren } = page
  const { introButtons: buttons } = introButtons
  //console.log({page})

  /* extract the events to pass along with the blocks as helper data */
  const { eventCategory } = eventListing

  const navContents = (wpChildren.nodes[0]) ? wpChildren.nodes.map((node) => {
    console.log("Nav: " +  node.uri);
    return node;
  }
  ) : ''

  const normalizedButtons = (buttons) ? buttons.map(item=>{
    let buttonLink = "";
    if(item.goToEvents){
      buttonLink = "#event-listing";
    }
    else{
      buttonLink = item.buttonLink.uri;
    }
    return {
      link: buttonLink,
      text: item.buttonText
    }

  }
  ) : ''
  return (
    <Layout title={title}>
      { featuredImage?.node && (
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroSize="slim"
          redHeading={title}
          excerpt={excerpt}
          buttons={normalizedButtons}
          productPage
        />
      )}
      { navContents && (
          <ProductMenu className = "productmenu" items={navContents} menuTitle={title} />
      )}
      <WordPressContentBlocks blocks={blocks} eventCategory={eventCategory}/>
    </Layout>
  )
}

export default WordPressPage
