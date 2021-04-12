import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import AllEvents from "../../components/collections/AllEvents"
import EventCardD from "../../components/content-blocks/EventCardD"
import PromoCardD from "../../components/content-blocks/PromoCardD"
import GridCardD from "../../components/content-modules/GridCardD"
import CardHandler from "../../components/content-modules/CardHandler"
import CardSet from "../../components/content-modules/CardSet"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"
import Accordian from "../../components/parts/Accordian"
import AccordianSearchBox from "../../components/parts/AccordianSearchBox"

function WordPressPage({ data }) {

  const { page, tileAds } = data
  const adList = tileAds?.nodes?.[0]?.siteOptions?.TileAds?.adList?.[0]
    ? tileAds.nodes[0].siteOptions.TileAds.adList
    : null
  const [ads] = useState(adList)
  const [currentAd, setCurrentAd] = useState(null)


  const randomAdGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min) - 1
  }

  useEffect(() => {
    let filteredAds = (ads) 
      ? ads.filter(ad => {
          return ad.adActive
        })
      : null
    let adSpot = (filteredAds) 
      ? randomAdGenerator(1, (filteredAds.length))
      : null
    if (filteredAds && adSpot) {
      setCurrentAd(filteredAds[adSpot])
    } 
  }, [ads])

  const allevents = AllEvents()
  const { nodes: eventEdges } = allevents
  const { title, featuredImage, heroIntroSection, eventCategories, excerpt, gridDetails  } = page
  const { categories } = eventCategories

  const { backgroundImage } = gridDetails
  //console.log(backgroundImage)


  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/events/all",
      text: "All Events",
    },
  ]
  let displayCategories = []
  
categories.forEach((item) => {
    const { categoryEvent, numberToShow } = item
    const { slug } = categoryEvent
    let categoryEvents = []
    allevents.nodes.forEach((event) => {
      if (event?.eventsCategories?.nodes) {
        event.eventsCategories.nodes.forEach((cat) => {
          if (cat.slug === slug) {
            categoryEvents.push(event)
          }
        })
      }
      
    })


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
    const { featuredEvent } = event
    if (featuredEvent) {
        featuredEventItems.push(
          event
        )
    }
  })

  const cardGridEvents = eventEdges.slice(0,9)
  let eventCards = cardGridEvents.map((event) => {
    return (
      <EventCardD key={event.url} {...event} url={event.link} />
    )
  })
  const eventCards1 = eventCards.slice(0,5)
  const eventCards2 = eventCards.slice(5,5+eventCards.length)

  const heroHeading = heroIntroSection?.heroHeading ? `<span>${heroIntroSection.heroHeading}</span> ON` : null

  console.log(currentAd)

  return (
    <Layout title={title} noborder>
      { featuredImage && featuredImage.node && (
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          videoURL="https://player.vimeo.com/external/524440389.hd.mp4?s=ebee9d64e105fc60c3075fe901ed7a6e50aeebf8&profile_id=174"
          redHeading={title}
          excerpt={excerpt}
          mobileHeroImage={heroIntroSection.heroImageMobile.localFile}
          heroHeading={heroHeading}
        />)}
        <Accordian opentext="SEARCH" closetext="CLOSE SEARCH">
          <AccordianSearchBox navigationURL="/events/search" />
        </Accordian>
        <PageSection>
          <CardHandler items={featuredEventItems} type="event" size="L" />
        </PageSection>
      <>{displayCategories}</>
      <PageSection heading="At a Glance" bgImage={gridBgImage} buttons={moreButton}>
        <GridCardD>
          {eventCards1}
          {currentAd && (
              <PromoCardD title={currentAd.adText} url={currentAd.adLink} />
            )}
          {eventCards2}</GridCardD>
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
      heroIntroSection {
        heroImageMobile {
          altText
          localFile {
            ...HeroImage
          }
        }
        heroHeading
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
    tileAds: allWp {
      nodes {
        siteOptions {
          TileAds {
            adList {
              adText
              adLink
              adActive
            }
          }
        }
      }
    }
  }
`
