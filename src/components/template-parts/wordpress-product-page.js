import React from "react"
import Layout from "../layout"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import WordPressContentBlocks from "../content-blocks/WordPressContentBlocks"

function WordPressPage({ page }) {
  const {  excerpt, featuredImage, introButtons, eventListing, blocks } = page
  const { introButtons: buttons } = introButtons
  console.log(blocks)

  /* extract the events to pass along with the blocks as helper data */
  const { eventCategory } = eventListing

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
    <Layout>
      { featuredImage?.node && (
        <HeroIntroSection  
          heroImage={featuredImage.node.localFile}
          heroSize="slim"
          excerpt={excerpt}
          buttons={normalizedButtons}
        />
      )}
      <WordPressContentBlocks blocks={blocks} eventCategory={eventCategory}/>
    </Layout>
  )
}

export default WordPressPage
