import React from 'react'
import ContentCard from "../../components/content-blocks/ContentCard"
import SimpleSlider from './SimpleSlider'
import StoryContentCard from '../content-blocks/StoryContentCard'
import EventContentCard from '../content-blocks/EventContentCard'
import LeftArrow from "../../components/parts/SliderArrowLeft"
import RightArrow from "../../components/parts/SliderArrowRight"

const SimpleSliderItems = ({ items, size, type }) => {
  //console.log(items)
    let myItems = []
    items.forEach((item) => {
        //console.log(item)
        const { featuredImage: img } = item
        const cardImg = (img ?.node?.localFile) ? img.node.localFile : null

        switch (type) {
          case 'news': 
            myItems.push(
              <StoryContentCard size={size} img={cardImg} {...item} />
            )
            break
          case 'event':
            myItems.push(
              <EventContentCard size={size} img={cardImg} {...item} />
            )
            break
          default: 
            myItems.push(
              <ContentCard size={size} img={cardImg} {...item} />
            )
            break
        }
      })
    myItems = myItems.filter(function( element ) {
        return element !== undefined;
    })
    const settings = {
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
      }

    return (
        <SimpleSlider 
            className="center"
            slidesToShow="1"
            dots
            centerMode
            variableWidth
            centerPadding="100px"
            {...settings}
          >{myItems}
        </SimpleSlider>
    )
}
export default SimpleSliderItems
