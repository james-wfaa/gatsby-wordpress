import React from 'react'
import EventCard from './cards/EventCard'
import PostCard from './cards/PostCard'

const SearchHits = ({ hits }) => {

  let cards = hits.map(hit => {
    switch (hit.type) {
      case "Event":
        return (
          <EventCard
          hit={hit}
          type={hit.type}
          url={hit.url}
          title={hit.title}
          excerpt={hit.excerpt}
          date={hit.date}
          location={hit.venue.address}
        />
        )
      case "Post":
        return (
          <PostCard
          hit={hit}
          url={hit.url}
          title={hit.title}
          initialBlock={hit.blocks[0]}
        />
        )
      default:
        return null
    }
  })

  return (
    <>
      {cards}
    </>
  )
}

export default SearchHits
