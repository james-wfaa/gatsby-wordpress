import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import ContentCard from "../content-blocks/ContentCard"
import ContentCardD from "../content-blocks/ContentCardD"
import GridCardD from "../content-modules/GridCardD"
import SimpleSlider from "../content-modules/SimpleSlider"
import CardSet from "../content-modules/CardSet"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"
import AccordianSearchAlgolia from "../../components/parts/AlgoliaSearch/AccordianSearchAlgolia"




function WordPressPage({ page, events }) {
  const { title, featuredImage, eventCategories, excerpt, gridDetails  } = page
  const { categories } = eventCategories

  const { backgroundImage } = gridDetails


  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/events/calendar",
      text: "Calendar",
    },
  ]

  const cats = categories.map((item) => {
    const { categoryEvent, numberToShow } = item
    return (
      <PageSection heading={categoryEvent.name} stagger>
        <CardSet items={categoryEvent.events.nodes} num={numberToShow} />
      </PageSection>
    )
  }
  )

  let featuredEvents = events.map((event) => {
    const { featuredEvent, featuredImage: img } = event.node
    const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
    if (featuredEvent) {
        return (
          <ContentCard size="L" img={cardImg} {...event.node} />
        )
    }
  })
  featuredEvents = featuredEvents.filter(function( element ) {
    return element !== undefined;
 });




  const cardGridEvents = events.slice(0,9)
  let eventCards = cardGridEvents.map((event) => {
    return (
      <ContentCardD {...event.node} />
    )
  })

  return (
    <Layout noborder>
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroHeading="<span>Badger</span> ON"
          redHeading={title}
          excerpt={excerpt}
        />
        <AccordianSearchAlgolia
          index="All"
          results={true}
        />
        <PageSection>
        <SimpleSlider
            className="center"
            slidesToShow="1"
            dots
            centerMode
            variableWidth
            centerPadding="100px"
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
