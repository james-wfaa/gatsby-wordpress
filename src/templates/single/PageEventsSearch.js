import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import ContentCard from "../../components/content-blocks/ContentCard"
import ContentBlockList from "../../components/content-modules/ContentBlockList"
import SearchResults from "../../components/parts/AlgoliaSearch/SearchPageAlgolia"
import PaginationNav from "../../components/parts/PaginationNav"

const EventsList = (props) => {
  const [events, setEvents] = useState([])

  let contentCards = events.map(card => {
    return (
    <ContentCard
      key={`${card.startDate}${card.venue}`}
      startDate={card.startDate}
      endDate={card.endDate ? card.endDate : null}
      title={card.title}
      category={card.category}
      venue={card.venue}
      location={card.location}
      img={card.featuredImage ? card.featuredImage.node.localFile: null}
      featureImg={card.featuredImage ? card.featuredImage.node.localFile : null}
      alt={card.alt}
      url={card.url}
      size={!card.featuredEvent ? "Wide" : "XXL"}
    />)
  })


  return(
  <Layout noborder>
    <SearchResults
      indices={[{name: "All"}]}
      results={false}
      callback={(arr) => setEvents(arr)}
    />
    <PageSection>
      <ContentBlockList>{contentCards}</ContentBlockList>
    </PageSection>
  </Layout>
  )
}

export default EventsList

