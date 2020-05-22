import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderStyles from "../../components/slider.css"
 
class SimpleSlider extends React.Component {

  static defaultProps = {
    dots: false,
    infinite: true,
    speed: 1000,
    initialSlide: 2,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  
  render() {
  
    console.log(this.props)
    return (
        <Slider {...this.props}>
            {this.props.children}
        </Slider>
      
    );
  }
}


export default SimpleSlider