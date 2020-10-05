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
        return (<ContentCard size="M" {...item} />)
        
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
    @media screen and ${breakpoints.laptopS} {
        margin-right: ${sizes.s24};
        &:last-child {
            margin-right: 0;
        }
    }
    
    
}


`

export default StyledCardSet
