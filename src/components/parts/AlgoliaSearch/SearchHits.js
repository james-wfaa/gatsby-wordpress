import React from 'react'
import EventCard from './cards/EventCard'

const SearchHits = ({ hits }) => {
  let cards = hits.map(hit => {
    return (
      <EventCard
      hit={hit}
      type={hit.type}
      url={hit.url}
      title={hit.title}
      excerpt={hit.excerpt}
    />
    )
  })

  return (
    <>
      {cards}
    </>
  )
}

export default SearchHits
