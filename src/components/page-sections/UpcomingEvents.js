import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import EventContentCard from "../content-blocks/EventContentCard"
import SimpleSlider from "../content-modules/SimpleSlider"
import AllEvents from "../../components/collections/AllEvents"


const UpcomingEvents = () => {
  
  const allevents = AllEvents()
  const { nodes: eventEdges } = allevents


  let eventCards = eventEdges.map((event) => {
    const { featuredImage: img } = event
    const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
    return (
      <EventContentCard key={event.url} img={cardImg} {...event} url={event.link} />
    )
  })

  return (
    <div>
       <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth>
            {eventCards}
          </SimpleSlider>
    </div>
  )
}

export default UpcomingEvents
