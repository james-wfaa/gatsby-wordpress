import React from "react"
import styled from "styled-components"

import Layout from "../layout"
import WordPressBasicContentBlocks from "../content-blocks/WpStoryContentBlocks"
import { breakpoints, mixins } from '../css-variables'


import TitleSection from '../parts/WordPressTitleSection'
import SocialShareLinks from '../parts/SocialShareLinks'
import FeaturedImage from "../content-blocks/FeaturedImage"
import RecentNotes from "../../components/page-sections/RecentNotes"
import PageSection from "../page-sections/PageSection"
import Button from '../parts/Button'


function BlogPost({ data }) {
  const { page } = data
  const { title, featuredImage, date, excerpt, link, classnoteNotes, alumniNotesFields } = page
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

  const StyledExternalLink = styled.div`
      min-width: 300px;
      width: 80%;
      max-width: 303px;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      margin-bottom: 40px;
      margin-left: auto;
      margin-right: auto;
      a{
        ${mixins.a}
      }
      @media screen and ${breakpoints.tabletS} {
        max-width: 536px;
      }
      @media screen and ${breakpoints.laptopS}{
        max-width: 712px;
      }
  `

  let featSize = featuredImage?.node?.mediaDetails.width ? featuredImage?.node?.mediaDetails.width : null
  let size = (featSize > 344) ? 344 : featSize
  
  let image = (featuredImage?.node) ? featuredImage.node : null
  let classCategory = classnoteNotes.nodes[0] ? classnoteNotes.nodes[0] : ''
  
  //Remove slug from Category until Archive links are set up
  classCategory.slug = ''

  
  return (
    <Layout title={title}>
        <TitleSection heading={title} category={classCategory} date={date} smImg={(718 > size) ? image : null} size={size} largeSpace/>
        {image && size >= 718 && (
            <FeaturedImage featuredImage={image} size={size}/>
        )}
        <WordPressBasicContentBlocks {...page} />
      {alumniNotesFields?.classnotesUrl && (
        <StyledExternalLink>
          <div>For more information, visit <a href={alumniNotesFields.classnotesUrl}>{alumniNotesFields.classnotesUrlname}</a>.</div>
        </StyledExternalLink>
      )}
      <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link} tight/>
      
      <StyledButtonWrapper>
        <Button link="/alumni-notes/submit/" text="Submit a Note" external />
      </StyledButtonWrapper>

      <PageSection
          heading="More Alumni Notes"
          buttons={[
            {
              link: "/alumninote/all",
              text: "SEE ALL ALUMNI NOTES",
            },
          ]}
          topBorder
        >
            <RecentNotes />
        </PageSection>
    </Layout>
  )
}

export default BlogPost
