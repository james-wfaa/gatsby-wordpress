import React, { useEffect } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser';
import ContentCard from '../../content-blocks/ContentCard'
import EventContentCard from '../../content-blocks/EventContentCard'
import { breakpoints } from '../../css-variables'

let CardWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 24px;
        grid-row-gap: 48px;
        > * {
            margin: 0 auto;
        }
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
    > * {
        margin: 0 auto;
    }
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
        switch (hit.type) {
            case 'Events':
            case 'Trips':
                //console.log(hit)
                return (
                    <EventContentCard
                        key={hit.objectID}
                        startDate={hit.startDate * 1000}
                        endDate={hit.endDate ? hit.endDate * 1000 : null}
                        title={hit.title}
                        category={hit.category}
                        venue={hit.venue}
                        eventDetails={hit.eventDetails}
                        location={hit.location}
                        img={
                            hit.featuredImage?.node?.localFile
                                ? hit.featuredImage.node.localFile
                                : null
                        }
                        featureImg={
                            hit.featuredImage?.node?.localFile
                                ? hit.featuredImage.node.localFile
                                : null
                        }
                        alt={hit.alt}
                        url={hit.url}
                        products={hit.products}
                        excerpt={hit.excerpt}
                        size='Wide'
                        filterChange={filterChange}     
                    />
                )
            case 'Alumni Notes':
                let parsedNote = parse(hit.content, { trim: true })
                const renderedExcerpt = hit?.excerpt && hit.excerpt !== ''
                        ? hit.excerpt
                        : parsedNote?.props?.children
                            ? parsedNote.props.children
                            : null

               
                    return (
                        <ContentCard
                            key={hit.url}
                            hit={hit}
                            url={hit.url}
                            size="S"
                            title={hit.title}
                            initialBlock={hit.excerpt}
                            img={hit?.featuredImage?.node?.localFile}
                            categories={hit.categories}
                            category="Alumni Note"
                            excerpt={renderedExcerpt}
                            filterChange={filterChange}
                        />
                    )
                
            case 'News & Stories':
            
                
                    const moreLinkText = hit?.linkFormat?.linkAuthor
                        ? <span>Via {hit.linkFormat.linkAuthor} <span className="arrow"></span></span>
                        : hit?.altPostType === "Podcast"
                            ? <nobr>Listen <span className="arrow"></span></nobr>
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
                            excerpt={hit.excerpt}
                            acfAlternatePostType={hit.acfAlternatePostType}
                            postFormats={hit.postFormats}
                            tags={hit.categories}
                            filterChange={filterChange}
                        />
                    )
                
            default:
                return null
        }
    })


    let totalCards = card === "Event" ? <EventCardWrapper key={'EventCardWrapper'}>{cards}</EventCardWrapper> : <CardWrapper key={'CardWrapper'}>{cards}</CardWrapper>

    return <div>{totalCards}</div>
}

export default SearchHits
