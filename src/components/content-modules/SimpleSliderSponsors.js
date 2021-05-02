import React from 'react'
import SimpleSlider from './SimpleSlider'
import LeftArrow from "../parts/SliderArrowLeft"
import RightArrow from "../parts/SliderArrowRight"

const SimpleSliderSponsors = ({ items, size, type }) => {
    
    const settings = {
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
      }

    return (
        <SimpleSlider 
            className="center"
            slidesToShow="1"
            infinite="false"
            variableWidth
            centerPadding="100px"
            {...settings}
          >{items}
        </SimpleSlider>
    )
}
export default SimpleSliderSponsors
