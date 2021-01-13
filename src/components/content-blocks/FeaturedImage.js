import React from "react"
import styled from 'styled-components'
import { sizes, colors, fonts, breakpoints } from '../css-variables'

import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const FeaturedImage = ({ className, featuredImage, event }) => {
  const classes = (event) ? `${className} ${className}--event` : className

  return (
    <div className={classes}>
      <Img fluid={featuredImage.node.localFile.childImageSharp.fluid} />
      { featuredImage.caption && (
        <div className={`${className}__captionSection`}>
          <div className={`${className}__caption`} dangerouslySetInnerHTML={{ __html: featuredImage.caption }} />
          <div className={`${className}__author`} dangerouslySetInnerHTML={{ __html: featuredImage.author.node.name }} />
        </div>
      )}
    </div>
  )
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

@media screen and ${breakpoints.tabletS} {
  &--event {
    max-width: 536px;
    margin: 0 auto;
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
  min-width: 300px;
  max-width: 712px;
  width: 80%;

  text-align: left;

  @media screen and ${breakpoints.tabletS} {
    width: 536px;
  }
  @media screen and ${breakpoints.laptopL} {
    width: 160px;
    min-width: 160px;
    float: right;
    margin-left: ${sizes.s24};
  }

}

&__caption{
  p{
    margin-bottom: ${sizes.s12};
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
