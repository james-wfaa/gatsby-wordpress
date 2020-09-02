import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
class SimpleSlider extends React.Component {

  static defaultProps = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1
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