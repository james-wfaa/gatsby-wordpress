import React from "react";
import Slider from "react-slick";
import styled, { css } from "styled-components"
import BackgroundImage from 'gatsby-background-image'
import { mixins } from '../css-variables'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const HeroCarousel = (props) => {
  let size = props.width > 655 ? "calc(100vh - 118px)" : "calc(100vh - 86px)"
  const ImageDiv = styled.div`
    width: 100%;
  `

let headingCss = css`
  ${mixins.introHeading}
  top: calc(${size} / 2) !important;
`

  const sliderSettings = {
    dots:true,
    arrows:false,
    infinite:true,
    autoplay:true,
    autoplaySpeed:4000,
    speed:1000,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    dotsClass: "slick-dots carousel-dots"
  }

  const slides = props?.carouselItems?.map(item => {
    return (
      <BackgroundImage
          Tag="div"
          fluid={item.childImageSharp.fluid}
          preserveStackingContext
        >
          <ImageDiv style={{height: size}} />
      </BackgroundImage>
    )
  })

  return (
    <div className="heroCarousel">
      <Slider
        {...sliderSettings}
      >
        {slides}
        {props.children}
      </Slider>
      {props.heroHeading && (
        <div
          className="heading--video"
          css={headingCss}
          dangerouslySetInnerHTML={{ __html: props.heroHeading }}
        />
          )}
    </div>
  )
}

export default HeroCarousel
