import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import ContentCard from "../../components/content-blocks/ContentCard"
import ContentBlockList from "../../components/content-modules/ContentBlockList"
import AccordianSearch from "../../components/parts/AccordianSearch"

function WordPressPage({ data }) {
  const { page, events, allWp } = data
  const { edges: eventEdges } = events
  const { siteOptions } = allWp.nodes[0]
  const { ads } = siteOptions
  const { sponsorUrl, sponsorAd21, sponsorAd31 } = ads

  const { title,  excerpt } = page

  let allEvents = eventEdges.map((event) => {
    const { featuredEvent, featuredImage: img } = event.node
    const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
    if (!featuredEvent) {
      return (
        <ContentCard size="Wide" img={cardImg} {...event.node} />
      )
    } else {
      return (
        <ContentCard size="XXL" img={cardImg} {...event.node} />
      )
    }
  })
  allEvents = allEvents.filter(function( element ) {
    return element !== undefined;
 })
  return (
    <Layout noborder>
        <AccordianSearch />
        <PageSection>
          <ContentBlockList>{allEvents}</ContentBlockList>
        </PageSection>

    </Layout>
  )
}

export default WordPressPage




export const query = graphql`
  query eventsCalendar($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      excerpt
      content
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
    },
    allWp {
      nodes {
        siteOptions {
          ads {
            sponsorUrl
            sponsorAd21 {
              localFile {
                ...HeroImage
              }
            }
            sponsorAd31 {
              localFile {
                ...HeroImage
              }
            }
          }
        }
      }
    }

  }
`
