import React from "react"
import styled from "styled-components"

import Layout from "../layout"
import WordPressBasicContentBlocks from "../content-blocks/WordPressBasicContentBlocks"
import { breakpoints } from '../css-variables'


import TitleSection from '../parts/WordPressTitleSection'
import SocialShareLinks from '../parts/SocialShareLinks'
import FeaturedImage from "../content-blocks/FeaturedImage"
import Button from '../parts/Button'


function BlogPost({ data }) {
  const { page } = data
  const { title, content, featuredImage, categories, author, date, excerpt, link, alumniNotesFields, classnoteNotes } = page
  const StyledButtonWrapper = styled.div`
    min-width: 300px;
    width: 80%;
    max-width: 712px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 58px;
    @media screen and ${breakpoints.tabletS} {
      margin-bottom: 88px;
    }
`

  let featSize = featuredImage?.node?.mediaDetails.width ? featuredImage?.node?.mediaDetails.width : null
  let size = (featSize > 344) ? 344 : featSize
  
  let image = (featuredImage?.node) ? featuredImage.node : null
  let classCategory = classnoteNotes.nodes[0] ? classnoteNotes.nodes[0] : ''

  
  return (
    <Layout title={title}>
        <TitleSection heading={title} category={classCategory} date={date} smImg={(718 > size) ? image : null} size={size} />
        {image && size >= 718 && (
            <FeaturedImage featuredImage={image} size={size}/>
        )}
        <WordPressBasicContentBlocks {...page} />
      <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link} tight/>
      <StyledButtonWrapper>
        <Button link="/submit-a-note" text="Submit a Note" external />
      </StyledButtonWrapper>
    </Layout>
  )
}

export default BlogPost
