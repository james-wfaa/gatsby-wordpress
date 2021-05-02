import React from 'react'
import CardSet from './CardSet'
import StyledTextLink from '../parts/StyledTextLink'
import SimpleSliderItems from './SimpleSliderItems'


const CardHandler = ({ items, sliderSize="S", size="M", type }) => {

    if (items.length && items.length > 0) {
        switch(items.length) {
            case 1:
            case 2:
                return (<CardSet items={items} num="2" type={type} size={size} />)
            case 3:
                return (<CardSet items={items} num="3" type={type} size="S" />)
            default:
                return (<SimpleSliderItems items={items} size={sliderSize} type={type} />)
        }
    } else {
        return type === "event"
            ? (<div>Check out <StyledTextLink to="/events/all">all upcoming WAA events.</StyledTextLink></div>)
            : (<div><StyledTextLink to="/news/all">Read all</StyledTextLink> stories from WAA.</div>)
    }
}

export default CardHandler
