import React, { useEffect } from 'react'
import styled from 'styled-components'
import ContentCard from '../../content-blocks/ContentCard'
import EventContentCard from '../../content-blocks/EventContentCard'
import { breakpoints } from '../../css-variables'

let CardWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 24px;
        grid-row-gap: 48px;
        @media screen and ${breakpoints.tabletS} {
            grid-template-columns: 1fr 1fr
        }
        @media screen and ${breakpoints.tabletL} {
            grid-template-columns: 1fr 1fr 1fr
        }
    `
let EventCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 48px;
`

const SearchHits = ({ hits, hitHandler, card, filterChange}) => {
    useEffect(() => {
        if (hits.length > 0) {
            let firstHit = hits[0].__position
            let secondHit = hits[hits.length - 1].__position
            hitHandler(firstHit, secondHit)
        }
    }, [hits])

    let cards = hits.map(hit => {
        let topResult = false
        if (hit.__position === 1) {
            topResult = true
        }
        console.log(hit)
        switch (hit.type) {
            case 'Event':
                
                return (
                    <EventContentCard
                        key={hit.url}
                        startDate={hit.startDate * 1000}
                        endDate={hit.endDate ? hit.endDate * 1000 : null}
                        title={hit.title}
                        category={hit.category}
                        venue={hit.venue}
                        location={hit.location}
                        img={
                            hit.featuredImage
                                ? hit.featuredImage.node.localFile
                                : null
                        }
                        featureImg={
                            hit.featuredImage
                                ? hit.featuredImage.node.localFile
                                : null
                        }
                        alt={hit.alt}
                        url={hit.url}
                        size={!hit.featuredEvent ? 'Wide' : 'XXL'}
                        filterChange={filterChange}
                    />
                )
            case 'Post':
                if (hit?.categories[0]?.name === 'Classnote') {
                    return (
                        <ContentCard
                            key={hit.url}
                            hit={hit}
                            url={hit.url}
                            size="S"
                            title={hit.title}
                            initialBlock={hit.excerpt}
                            img={hit?.featuredImage?.node?.localFile}
                            topResult={topResult}
                            categories={hit.categories}
                            filterChange={filterChange}
                        />
                    )
                } else {
                    const moreLinkText = hit?.linkFormat?.linkAuthor
                        ? <span>Via {hit.linkFormat.linkAuthor} <span class="arrow"></span></span>
                        : hit?.altPostType === "Podcast"
                            ? <nobr>Listen <span class="arrow"></span></nobr>
                            : hit?.urlText
                                ? <nobr>{hit.urlText} &gt;</nobr>
                                : <nobr>Read More &gt;</nobr>
                    return (
                        <ContentCard
                            key={hit.url}
                            hit={hit}
                            size="S"
                            url={hit.url}
                            urlText={moreLinkText}
                            linkFormat={hit.linkFormat}
                            img={hit?.featuredImage?.node?.localFile}
                            title={hit.title}
                            initialBlock={hit.blocks[0]}
                            topResult={topResult}
                            excerpt={hit.excerpt}
                            acfAlternatePostType={hit.acfAlternatePostType}
                            postFormats={hit.postFormats}
                            tags={hit.categories}
                            filterChange={filterChange}
                        />
                    )
                }
            default:
                return null
        }
    })


    let totalCards = card === "Event" ? <EventCardWrapper key={'EventCardWrapper'}>{cards}</EventCardWrapper> : <CardWrapper key={'CardWrapper'}>{cards}</CardWrapper>

    return <div>{totalCards}</div>
}

export default SearchHits
