import React, { useEffect } from "react"
import EventCard from './cards/EventCard'
import PostCard from './cards/PostCard'
import PageCard from './cards/PageCard'

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
            key={hit.url}
            hit={hit}
            type={hit.type}
            url={hit.url}
            title={hit.title}
            excerpt={hit.excerpt}
            date={hit.date}
            city={hit.venue?.city}
            state={hit.venue?.state}
            topResult={topResult}
          />
        )
      case "Post":
        if (hit?.categories[0]?.name === 'Classnote') {
            return (
                <PostCard
                    key={hit.url}
                    hit={hit}
                    url={hit.url}
                    title={hit.title}
                    initialBlock={hit.excerpt}
                    topResult={topResult}
                    categories={hit.categories}
                />
            )
        } else {
            return (
                <PostCard
                    key={hit.url}
                    hit={hit}
                    url={hit.url}
                    title={hit.title}
                    initialBlock={hit.blocks[0]}
                    categories={hit.categories}
                    topResult={topResult}
                />
            )
        }
      case "Page":
        return (
          <PageCard
          key={hit.url}
          hit={hit}
          url={hit.url}
          title={hit.title}
          // initialBlock={hit.blocks[0]}
          topResult={topResult}
          excerpt={hit.excerpt}
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
