import React, { useEffect } from 'react'
import styled from 'styled-components'
import ContentCard from '../../content-blocks/ContentCard'
import { breakpoints } from '../../css-variables'

const SearchHits = ({ hits, hitHandler }) => {
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
            case 'Event':
                console.log(hit)
                return (
                    <ContentCard
                        key={hit.url}
                        hit={hit}
                        type={hit.type}
                        size="S"
                        url={hit.url}
                        img={hit?.featuredImage?.node?.localFile}
                        title={hit.title}
                        excerpt={hit.excerpt}
                        date={hit.date}
                        city={hit.venue?.city}
                        state={hit.venue?.state}
                        topResult={topResult}
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
                        />
                    )
                } else {
                    return (
                        <ContentCard
                            key={hit.url}
                            hit={hit}
                            size="S"
                            url={hit.url}
                            img={hit?.featuredImage?.node?.localFile}
                            title={hit.title}
                            initialBlock={hit.blocks[0]}
                            categories={hit.categories}
                            topResult={topResult}
                        />
                    )
                }
            default:
                return null
        }
    })

    let CardWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 24px;
        grid-row-gap: 48px;
        @media screen and ${breakpoints.tabletS} {
            grid-template-columns: 1fr 1fr;
        }
        @media screen and ${breakpoints.tabletL} {
            grid-template-columns: 1fr 1fr 1fr;
        }
    `

    return <CardWrapper>{cards}</CardWrapper>
}

export default SearchHits
