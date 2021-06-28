import React, { useEffect } from "react"
import EventCard from './cards/EventCard'
import TripCard from './cards/TripCard'
import PostCard from './cards/PostCard'
import PageCard from './cards/PageCard'
import ChapterCard from './cards/ChapterCard'


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
      case "Trips":
        console.log(hit)
        return (
          <TripCard
            key={hit.objectID}
            hit={hit}
            type={hit.type}
            url={hit.url}
            title={hit.title}
            excerpt={hit.excerpt}
            startDate={hit.startDate * 1000}
            parsedStartDate={hit.parsedStartDate}
            endDate={hit.endDate ? hit.endDate * 1000 : null}
            city={hit.venue?.city}
            state={hit.venue?.state}
          />
        )
      case "Events":
        return (
          <EventCard
            key={hit.objectID}
            hit={hit}
            type={hit.type}
            url={hit.url}
            title={hit.title}
            excerpt={hit.excerpt}
            startDate={hit.startDate}
            endDate={hit.endDate ? hit.endDate : null}
            city={hit.venue?.city}
            state={hit.venue?.state}
          />
        )
      case "Alumni Notes":
        return (
          <PostCard
            key={hit.objectID}
              hit={hit}
              url={hit.url}
              title={hit.title}
              excerpt={hit.excerpt}
              initialBlock={hit.excerpt}
              categories={hit.categories}
          />
      )
      case "News & Stories":

          const moreLinkText = hit?.linkFormat?.linkAuthor
                        ? <span>Via {hit.linkFormat.linkAuthor} <span className="arrow"></span></span>
                        : hit?.altPostType === "Podcast"
                            ? <nobr>Listen <span className="arrow"></span></nobr>
                            : hit?.urlText
                                ? <nobr>{hit.urlText} &gt;</nobr>
                                : <nobr>Read More &gt;</nobr>
            return (
                <PostCard
                    key={hit.objectID}
                    hit={hit}
                    url={hit.url}
                    urlText={moreLinkText}
                    linkFormat={hit.linkFormat}
                    title={hit.title}
                    initialBlock={hit.blocks[0]}
                    categories={hit.categories}
                    excerpt={hit.excerpt}
                    acfAlternatePostType={hit.acfAlternatePostType}
                    postFormats={hit.postFormats}
                    tags={hit.categories}
                />
            )
      case "Pages":
        return (
          <PageCard
          key={hit.objectID}
          hit={hit}
          url={hit.url}
          title={hit.title}
          // initialBlock={hit.blocks[0]}
          excerpt={hit.excerpt}
        />
        )
        case "Chapters":
          return (
            <ChapterCard
            key={hit.objectID}
            hit={hit}
            url={hit.url}
            title={hit.title}
            // initialBlock={hit.blocks[0]}
            excerpt={hit.content}
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
