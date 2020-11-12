import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import ContentCard from "../../components/content-blocks/ContentCard"
import ContentCardD from "../../components/content-blocks/ContentCardD"
import GridCardD from "../../components/content-modules/GridCardD"
import SimpleSlider from "../../components/content-modules/SimpleSlider"
import LeftArrow from "../../components/parts/SliderArrowLeft"
import RightArrow from "../../components/parts/SliderArrowRight"
import CardSet from "../../components/content-modules/CardSet"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"
import AccordianSearch from "../../components/parts/AccordianSearch"

function WordPressPage({ data }) {
  const { page, events } = data
  const { edges: eventEdges } = events
  const { title, featuredImage, eventCategories, excerpt, gridDetails  } = page
  const { categories } = eventCategories

  const { backgroundImage } = gridDetails

  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/events/search",
      text: "All Events",
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


  const settings = {
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }
  console.log('events page events:',events)
  let featuredEvents = eventEdges.map((event) => {
    console.log('featuredEvents event.node:',event.node)
    const { featuredEvent, featuredImage: img } = event.node
    const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
    console.log( 'featuredEvent:',featuredEvent )
    if (featuredEvent) {
        return (
          <ContentCard size="L" img={cardImg} {...event.node} />
        )
    }
  })
  featuredEvents = featuredEvents.filter(function( element ) {
    return element !== undefined;
 })

 
  console.log('featuredEvents:',featuredEvents)



  const cardGridEvents = eventEdges.slice(0,9)
  let eventCards = cardGridEvents.map((event) => {
    console.log('building event tiles')
    return (
      <ContentCardD {...event.node} />
    )
  })
  console.log('eventCards:',eventCards)

  return (
    <Layout noborder>
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
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




export const query = graphql`
  query events($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      excerpt
      content
      template {
        ... on WpEventsMainPageTemplate {
          templateName
        }
      }
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
            events {
              nodes {
                id
                title
                url: uri
                excerpt
                featuredEvent
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 712) {
                          base64
                          tracedSVG
                          srcWebp
                          srcSetWebp
                          originalImg
                          originalName
                          aspectRatio
                        }
                      }
                    }
                  }
                }
                date
                startDate
                endDate
                eventsCategories {
                  nodes {
                    name
                    url: uri
                  }
                }
                venue {
                  title
                  state
                  city
                }
              }
            }
            name
          }
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
              }
            }
          }
        }
      }
    },
    events: allWpEvent(limit: 100, sort: {order: ASC, fields: startDate}) {
      edges {
        node {
          id
          title
          url: uri
          excerpt
          featuredEvent
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 712) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                    aspectRatio
                  }
                }
              }
            }
          }
          date
          startDate
          endDate
          eventsCategories {
            nodes {
              name
              url: uri
            }
          }
          venue {
            title
            state
            city
          }
        }
      }
    }
    
  }
`
