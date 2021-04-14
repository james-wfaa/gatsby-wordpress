import React from 'react'
import CardSet from './CardSet'
import SimpleSliderItems from './SimpleSliderItems'

const CardHandler = ({ items, sliderSize="S", size="M", type }) => {

    if (items.length && items.length > 0) {
        switch(items.length) {
            case 1:
            case 2:
                return (<CardSet items={items} num="2" type={type} size={size} />)
            default:
                return (<SimpleSliderItems items={items} size={sliderSize} type={type} />)
        }
    } else {
        return (<div>No items found</div>)
    }
}

export default CardHandler
