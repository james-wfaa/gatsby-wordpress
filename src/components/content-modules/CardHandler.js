import React from 'react'
import CardSet from './CardSet'
import SimpleSliderItems from './SimpleSliderItems'

const CardHandler = ({ items, size }) => {

    if (items.length && items.length > 0) {
        switch(items.length) {
            case 1:
            case 2:
                /* we don't pass "size" to CardSet because size is determined by 
                number of cards */
                return (<CardSet items={items} num="2" />)
            default:
                return (<SimpleSliderItems items={items} size={size} />)
        }
    } else {
        return (<div>No items found</div>)
    }
}

export default CardHandler
