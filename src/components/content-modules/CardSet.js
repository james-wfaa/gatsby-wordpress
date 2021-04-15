import React from 'react'
import { sizes, breakpoints } from '../css-variables'
import StoryContentCard from '../content-blocks/StoryContentCard'
import EventContentCard from '../content-blocks/EventContentCard'

import styled from 'styled-components'

const CardSet = ({className, items, children, num, size="M", type="news" }) => {

    const limitedItems = (items) ? items.slice(0, num) : null
    const resolvedSize = num === 3
        ? "S"
        : size

    let cards = (children)
    ? children.map((child) => {
        return (<div dangerouslySetInnerHTML={{__html: child}} />)
    })
    : limitedItems.map((item) => {
        const { featuredImage: img } = item
        const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
        
        return (type === "news" )
            ? (<StoryContentCard key={item.id} size={resolvedSize} img={cardImg} {...item} />) 
            : (<EventContentCard key={item.id} size={size} img={cardImg} {...item} url={item.link} />)
        })
    
    return (
        <div className={className}>{cards}
        </div>
    )
}

const StyledCardSet = styled(CardSet)`
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
> * {
    margin: 0 auto ${sizes.s24};
    &:last-child {
        margin-bottom: 0;
    }

}
@media screen and ${breakpoints.tabletL} {
    flex-direction: row;
    > * {
        margin: 0 ${sizes.s24} 0 0;
        &:last-child {
            margin-right: 0;
        }
    }
}


`

export default StyledCardSet
