import React from 'react'
import {  sizes, breakpoints } from '../css-variables'
import ContentCard from '../content-blocks/ContentCard'

import styled from 'styled-components'

const CardSet = ({className, items, children, num }) => {

    console.log(children)
    console.log(num)
    //const cards = items.map
    // trim array to the max size
    const limitedItems = (items) ? items.slice(0, num) : null
    console.log(limitedItems)

    let cards = (children) 
        ? children.map((child) => {
            return (<div dangerouslySetInnerHTML={{__html: child}} />)
        })
        : limitedItems.map((item) => {
            console.log(item)
            const { featuredEvent, featuredImage: img } = item
            const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
            console.log(cardImg)
            return (num === 3) 
                ? (<ContentCard size="S" img={cardImg} {...item} />)
                : (<ContentCard size="M" img={cardImg} {...item} />)
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
@media screen and ${breakpoints.laptopS} {
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
