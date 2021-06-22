import React from "react"
import styled from 'styled-components'
import { sizes, colors, breakpoints } from '../css-variables'

import { GatsbyImage, getImage } from "gatsby-plugin-image"


const FeaturedImage = ({ className, featuredImage, event, size }) => {
  const classes = (event) ? `${className} ${className}--event` : className
  const imgSizeClass = (718 <= size && size < 1080) ? `mediumImg` : (size < 718) ? `smallImg` : ''

  //console.log(featuredImage)
  const image = featuredImage?.localFile
    ? getImage(featuredImage.localFile)
    : null
  //console.log(image)

  return (featuredImage?.localFile?.childImageSharp) 
    ?(
    <div className={`${classes} ${imgSizeClass}`} >
      <GatsbyImage alt={featuredImage.altText} image={image} />
      { featuredImage?.caption && (
        <div className={`${className}__captionSection`}>
          <div className={`${className}__caption`} dangerouslySetInnerHTML={{ __html: featuredImage.caption }} />
        </div>
      )}
    </div>
  )
  : featuredImage?.localFile?.publicURL
        ? <img src={featuredImage.localFile.publicURL} />
        : null
}

const StyledFeaturedImage = styled(FeaturedImage)`

width: auto;
min-width: 375px;
margin: 0;
position: relative;
margin: ${sizes.s58} 0;
&--event {
  margin: 0 0 48px;
}
&.mediumImg {
  max-width:712px;
  margin: 3.222rem auto;
}
&.smallImg{
  max-width: 280px;
  min-width: 280px;
  width: 280px;
  margin: 12px auto;
  @media screen and ${breakpoints.tablet} {
    float: left; 
    margin: 5px 24px 12px 0;
  }
  @media screen and ${breakpoints.tabletL} {
    &:before {
      display: none;
    }
    &:after {
      display: none;
    }
  }
}

@media screen and ${breakpoints.tabletS} {
  &--event {
    max-width: 536px;
    margin: 0 auto;
  }
}

@media screen and ${breakpoints.tabletL} {
  &--event {
    max-width: 814px;
    margin: 0 auto;
    &:before {
      position: absolute;
      bottom: 0px;
      left: 0;
      height: 30px;
      width: 100%;
      background-color: ${colors.featureImageGrey};
      mix-blend-mode: multiply;
      opacity: 0.7;
      z-index: 1;
      width: calc(100% - 122px);
      content: '';

    }

    &:after {
      position: absolute;
      bottom: 0;
      right: -33px;
      height: 30px;
      width: 300px;
      z-index: 2;
      content: '';
      background-color: ${colors.bgWhite} !important;
      transform: skew(135deg);
    }

  }
}

@media screen and ${breakpoints.laptopS} {
  max-width: 1080px;
  margin: ${sizes.s58} auto;
  &--event {
    margin: 0 auto 52px;
  }
}

@media screen and ${breakpoints.laptopL} {
  width: 1080px;

  &:before {
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 30px;
    width: 100%;
    background-color: ${colors.featureImageGrey};
    mix-blend-mode: multiply;
    opacity: 0.7;
    z-index: 1;
    width: calc(100% - 122px);
    content: '';

  }

  &:after {
    position: absolute;
    bottom: 0;
    right: -50px;
    height: 30px;
    width: 222px;
    z-index: 2;
    content: '';
    background-color: ${colors.bgWhite} !important;
    transform: skew(135deg);
  }
  &--event {
    &:after {
      right: -33px;
      width: 300px;
    }
  }

}


&__captionSection{
  font-size: ${sizes.s16};
  line-height: ${sizes.s22};
  margin-top: ${sizes.s16};
  font-weight: bold;
  color: ${colors.captionGrey};
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  text-align: left;
  @media screen and ${breakpoints.tablet} {
    width: 100%;
  }

  @media screen and ${breakpoints.laptopL} {
    float: right;
    margin-left: ${sizes.s24};
  }

}

&__caption{
  p{
    margin-bottom: ${sizes.s12};
    @media screen and ${breakpoints.laptopL} {
      margin-bottom: ${sizes.s58};
    }
  }
}
&__author{
  font-size: ${sizes.s12};
  line-height: ${sizes.s12};
  font-weight: bold;
  text-transform: uppercase;

}
`


export default StyledFeaturedImage
