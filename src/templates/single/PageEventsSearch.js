import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import ContentCard from "../../components/content-blocks/ContentCard"
import ContentBlockList from "../../components/content-modules/ContentBlockList"
import AccordianSearch from "../../components/parts/AccordianSearch"
import PaginationNav from "../../components/parts/PaginationNav"

class EventsList extends React.Component {
  
  render() {
    console.log('PageEventsSearch - props - ',this.props)

    const baseUri = '/events/search/'
    const { events } = this.props.data

    const { page, totalPages } = this.props.pageContext
    const isFirst = page === 1
    const isLast = page === totalPages
    const prevPage = page - 1 === 1 ? baseUri : (page - 1).toString()
    const nextPage = (page + 1).toString()
    console.log('prev:', prevPage)
    console.log('next:', nextPage)

    const { edges: eventEdges } = events
    let allEvents = eventEdges.map((event) => {
      console.log('event.node:',event.node)
      const { featuredEvent, featuredImage: img } = event.node
      const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
      console.log( 'featuredEvent:',featuredEvent )
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

    return(
   
    <Layout noborder>
        <AccordianSearch />
        <PageSection>
          <ContentBlockList>{allEvents}</ContentBlockList>
          <PaginationNav basepath={baseUri} page={page} totalPages={totalPages} isFirst={isFirst} isLast={isLast} />
        </PageSection>
      
    </Layout>
    )
  }
}

export default EventsList


export const query = graphql`
  query eventsSearch($offset: Int!, $eventsPerPage: Int!) {
    events: allWpEvent(
      limit: $eventsPerPage, 
      skip: $offset,
      sort: {order: ASC, fields: startDate}) {
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
