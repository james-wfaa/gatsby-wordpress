import React, {useState, useEffect} from 'react'
import EventCard from './cards/EventCard'
import PostCard from './cards/PostCard'

const SearchHits = ({ hits, hitHandler }) => {

  useEffect(() => {
    if (hits.length > 0) {
      let firstHit = hits[0].__position
      let secondHit = hits[hits.length - 1].__position
      hitHandler(firstHit, secondHit)
    }
  }, [hits])

  let cards = hits.map(hit => {
    let topResult = false;
    if (hit.__position === 1) {
      topResult = true;
    }
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
          city={hit.venue.city}
          state={hit.venue.state}
          topResult={topResult}
        />
        )
      case "Post":
        return (
          <PostCard
          hit={hit}
          url={hit.url}
          title={hit.title}
          initialBlock={hit.blocks[0]}
          topResult={topResult}
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
