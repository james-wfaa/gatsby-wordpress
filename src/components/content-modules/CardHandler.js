import React from 'react'
import CardSet from './CardSet'
import SimpleSliderItems from './SimpleSliderItems'

const CardHandler = ({ items, size, sliderSize="S", type }) => {

    console.log(size)
    if (items.length && items.length > 0) {
        switch(items.length) {
            case 1:
            case 2:
                /* we don't pass "size" to CardSet because size is determined by 
                number of cards */
                return (<CardSet items={items} num="2" type={type}/>)
            default:
                return (<SimpleSliderItems items={items} size={sliderSize} type={type} />)
        }
    } else {
        return (<div>No items found</div>)
    }
}

export default CardHandler
