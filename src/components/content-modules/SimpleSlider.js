import React from "react";
import Slider from "react-slick";
import LeftArrow from "../parts/SliderArrowLeft"
import RightArrow from "../parts/SliderArrowRight"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderStyles from "../slider.css"

class SimpleSlider extends React.Component {

  static defaultProps = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  }

  render() {
    return (
        <Slider {...this.props}>
            {this.props.children}
        </Slider>
    );
  }
}


export default SimpleSlider