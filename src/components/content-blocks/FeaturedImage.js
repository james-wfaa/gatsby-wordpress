import React from "react"
import styled from 'styled-components'  
import { breakpoints, sizes } from '../css-variables'

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

const FeaturedImage = ({ className, featuredImage }) => {
  
  return (
    <div className={className}>
      <Img fluid={featuredImage.node.remoteFile.childImageSharp.fluid} />
    </div>
  )
}

const StyledFeaturedImage = styled(FeaturedImage)`

width: auto;
min-width: 375px;
margin: 0; 

@media screen and ${breakpoints.tabletS} {
  width: 536px;
  margin: ${sizes.s58} auto; 
}
@media screen and ${breakpoints.laptopS} {
  width: 815px;
  margin: ${sizes.s58} auto; 

}
@media screen and ${breakpoints.laptopL} {
  width: 1080px;
  margin: ${sizes.s58} auto; 

}
`

export default StyledFeaturedImage
