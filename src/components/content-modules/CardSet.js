import React from 'react'
import {  sizes, breakpoints } from '../css-variables'
import StoryContentCard from '../content-blocks/StoryContentCard'
import EventContentCard from '../content-blocks/EventContentCard'

import styled from 'styled-components'

const CardSet = ({className, items, children, num, type }) => {
    console.log(type)
    //const cards = items.map
    // trim array to the max size
    const limitedItems = (items) ? items.slice(0, num) : null

    let cards = (children)
    ? children.map((child) => {
        return (<div dangerouslySetInnerHTML={{__html: child}} />)
    })
    : limitedItems.map((item) => {

        const { featuredEvent, featuredImage: img } = item
        const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null

        console.log('num: ',num)
        return (num === 3)
            ? type === "news" ? (<StoryContentCard size="S" img={cardImg} {...item} />) : (<EventContentCard size="S" img={cardImg} {...item} />)
            : type === "news" ? (<StoryContentCard size="M" img={cardImg} {...item} />) : (<EventContentCard size="M" img={cardImg} {...item} />)
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
