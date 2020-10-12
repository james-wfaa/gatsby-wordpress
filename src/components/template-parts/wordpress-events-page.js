import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import FeaturedImage from "../content-blocks/FeaturedImage"
import ContentCard from "../content-blocks/ContentCard"
import ContentCardD from "../content-blocks/ContentCardD"
import GridCardD from "../content-modules/GridCardD"
import SimpleSlider from "../content-modules/SimpleSlider"
import LeftArrow from "../parts/SliderArrowLeft"
import RightArrow from "../parts/SliderArrowRight"
import CardSet from "../content-modules/CardSet"


function WordPressPage({ page, events }) {
  const { title, featuredImage, eventCategories } = page
  const { categories } = eventCategories

  const cats = categories.map((item) => {
    const { categoryEvent, numberToShow } = item
    console.log(categoryEvent)
    return (
      <PageSection heading={categoryEvent.name} stagger>
        <CardSet items={categoryEvent.events.nodes} num={numberToShow} />
      </PageSection>
    )
  }
  )


  const settings = {
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }
  console.log(events)
  let featuredEvents = events.map((event) => {
    console.log(event.node)
    const { featuredEvent, featuredImage: img } = event.node
    const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
    console.log( featuredEvent )
    if (featuredEvent) {
        return (
          <ContentCard size="L" img={cardImg} {...event.node} />
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
      <>{cats}</>
      <PageSection heading="At a Glance">
        <GridCardD>{eventCards}</GridCardD>
      </PageSection>
      
    </Layout>
  )
}

export default WordPressPage
