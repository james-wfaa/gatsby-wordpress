import React from 'react'
import {  sizes, breakpoints } from '../css-variables'
import ContentCard from '../content-blocks/ContentCard'

import styled from 'styled-components'

const CardSet = ({className, items, num }) => {

    //const cards = items.map
    // trim array to the max size
    items.slice(0, num)

    let cards = items.map((item) => {
        console.log(item)
        const { featuredEvent, featuredImage: img } = item
        const cardImg = (img && img.node && img.node.remoteFile) ? img.node.remoteFile : null
        return (<ContentCard size="M" img={cardImg} {...item} />)
        
    })

    if (num === 3) {
        cards = items.map((item) => {
            return (<ContentCard size="S" {...item} />)
            
        })
    }
    

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
