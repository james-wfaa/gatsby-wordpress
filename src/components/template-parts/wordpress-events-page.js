import React from "react"
import Layout from "../layout"
import PageIntro from "../page-sections/HeroIntroSection"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"
import ContentCard from "../content-blocks/ContentCard"
import ContentCardD from "../content-blocks/ContentCardD"
import GridCardD from "../content-modules/GridCardD"
import SimpleSlider from "../content-modules/SimpleSlider"
import LeftArrow from "../parts/SliderArrowLeft"
import RightArrow from "../parts/SliderArrowRight"


function WordPressPage({ page, events }) {
  const { title, content, featuredImage, blocks } = page


  const settings = {
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }
  console.log(events)
  let featuredEvents = events.map((event) => {
    console.log(event.node)
    const { featuredEvent, featuredImage: img } = event.node
    console.log( featuredEvent )
    if (featuredEvent) {
        return (
          <ContentCard size="L" img={img.node.remoteFile} {...event.node} />
        )
    }
  })
  featuredEvents = featuredEvents.filter(function( element ) {
    return element !== undefined;
 });
  console.log(featuredEvents)

  

  const cardGridEvents = events.slice(0,9)
  let eventCards = cardGridEvents.map((event) => {
    return (
      <ContentCardD {...event.node} />
    )
  })
  console.log(eventCards)

  return (
    <Layout>
      
      <PageSection heading={title} pageTitle><div>Events Main template</div>
      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
          <FeaturedImage featuredImage={featuredImage} />
      )}
      </PageSection>
        <PageSection>
        <SimpleSlider
            className="center"
            slidesToShow="1"
            dots
            centerMode
            variableWidth
            centerPadding="100px"
            {...settings}
          >{featuredEvents}
        </SimpleSlider>
      </PageSection>
     
      <WordPressContent content={content} />
      <PageSection heading="At a Glance">
        <GridCardD>{eventCards}</GridCardD>
      </PageSection>
      
    </Layout>
  )
}

export default WordPressPage
