import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import AllEvents from "../../components/collections/AllEvents"
import EventCardD from "../../components/content-blocks/EventCardD"
import GridCardD from "../../components/content-modules/GridCardD"
import CardHandler from "../../components/content-modules/CardHandler"
import CardSet from "../../components/content-modules/CardSet"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"
import Accordian from "../../components/parts/Accordian"
import AccordianSearchBox from "../../components/parts/AccordianSearchBox"

function WordPressPage({ data }) {

  const { page } = data
  const allevents = AllEvents()
  const { nodes: eventEdges } = allevents
  const { title, featuredImage, eventCategories, excerpt, gridDetails  } = page
  const { categories } = eventCategories

  const { backgroundImage } = gridDetails
  //console.log(backgroundImage)

  console.log(allevents)

  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/events/search",
      text: "All Events",
    },
  ]
  console.log(categories)
  let displayCategories = []
  
categories.forEach((item) => {
  console.log(item)
    const { categoryEvent, numberToShow } = item
    const { slug } = categoryEvent
    let categoryEvents = []
    allevents.nodes.forEach((event) => {
      console.log(event)
      if (event?.eventsCategories?.nodes) {
        event.eventsCategories.nodes.forEach((cat) => {
          console.log(cat)
          if (cat.slug === slug) {
            console.log('match')
            categoryEvents.push(event)
          }
        })
      }
      
    })

    console.log(categoryEvents)

    if (categoryEvents) {
      displayCategories.push(
        <PageSection key={item.slug} heading={categoryEvent.name} stagger>
          <CardSet items={categoryEvents} num={numberToShow} type="event"/>
        </PageSection>
      )
    }
})
    
  let featuredEventItems = []
  eventEdges.forEach((event) => {
    console.log(event)
    const { featuredEvent, featuredImage: img } = event
    if (featuredEvent) {
        featuredEventItems.push(
          event
        )
    }
  })
  console.log(featuredEventItems)

  const cardGridEvents = eventEdges.slice(0,9)
  let eventCards = cardGridEvents.map((event) => {
    console.log(event)
    console.log(event.link)
    return (
      <EventCardD key={event.url} {...event} url={event.link} />
    )
  })

  return (
    <Layout title={title} noborder>
      { featuredImage && featuredImage.node && (
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroHeading="<span>Badger</span> ON"
          redHeading={title}
          excerpt={excerpt}
        />)}
        <Accordian opentext="SEARCH" closetext="CLOSE SEARCH">
          <AccordianSearchBox navigationURL="/events/search" />
        </Accordian>
        <PageSection>
          <CardHandler items={featuredEventItems} type="event" size="L" />
        </PageSection>
      <>{displayCategories}</>
      <PageSection heading="At a Glance" bgImage={gridBgImage} buttons={moreButton}>
        <GridCardD>{eventCards}</GridCardD>
      </PageSection>

    </Layout>
  )
}

export default WordPressPage




export const query = graphql`
  query events($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      excerpt
      content
      featuredImage {
        node {
          localFile {
            ...HeroImage
          }
        }
      }

      eventCategories {
        categories {
          categoryEvent: category {
            name
            slug
          }
          numberToShow
        }
      }
      blocks {
        name
        originalContent
        dynamicContent
        innerBlocks {
          name
          originalContent
          dynamicContent
          innerBlocks {
            name
            originalContent
            dynamicContent
          }
        }
      }
      gridDetails {
        backgroundImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 712) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                src
                srcSet
                aspectRatio
                sizes
              }
            }
          }
        }
      }
    }
  }
`
