import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import ContentCard from "../content-blocks/ContentCard"
import ContentCardD from "../content-blocks/ContentCardD"
import GridCardD from "../content-modules/GridCardD"
import SimpleSlider from "../content-modules/SimpleSlider"
import LeftArrow from "../parts/SliderArrowLeft"
import RightArrow from "../parts/SliderArrowRight"
import CardSet from "../content-modules/CardSet"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"
import AccordianSearch from "../../components/parts/AccordianSearch"




function WordPressPage({ page, events }) {
  const { title, featuredImage, eventCategories, excerpt, gridDetails  } = page
  const { categories } = eventCategories

  const { backgroundImage } = gridDetails
  console.log(backgroundImage)

  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/events/calendar",
      text: "Calendar",
    },
  ]

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
    <Layout noborder>
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroSize="jumbo"
          heroHeading="<span>Badger</span> ON"
          redHeading={title}
          excerpt={excerpt}
        />
        <AccordianSearch />
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
      <PageSection heading="At a Glance" bgImage={gridBgImage} buttons={moreButton}>
        <GridCardD>{eventCards}</GridCardD>
      </PageSection>
      
    </Layout>
  )
}

export default WordPressPage
