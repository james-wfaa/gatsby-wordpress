import React from "react"

import Layout from "../layout"
import WordPressBasicContentBlocks from "../content-blocks/WordPressBasicContentBlocks"

import TitleSection from '../parts/WordPressTitleSection'
import SocialShareLinks from '../parts/SocialShareLinks'
import FeaturedImage from "../content-blocks/FeaturedImage"
import Button from '../parts/Button'


function BlogPost({ data }) {
  const { page } = data
  //console.log(page)
  const { title, content, featuredImage, categories, author, date, excerpt, link, alumniNotesFields, classnoteNotes } = page
  console.log("Alumni Author: " + alumniNotesFields.classnotesAuthor);

  let featSize = featuredImage?.node?.mediaDetails.width ? featuredImage?.node?.mediaDetails.width : null
  let size = (featSize > 344) ? 344 : featSize
  
  let image = (featuredImage?.node) ? featuredImage.node : null
  let classCategories = classnoteNotes.nodes ? classnoteNotes.nodes : ''
  
  return (
    <Layout title={title}>
        <TitleSection heading={title} categories={classCategories} date={date} smImg={(718 > size) ? image : null} size={size} />
        {image && size >= 718 && (
            <FeaturedImage featuredImage={image} size={size}/>
        )}
        <WordPressBasicContentBlocks {...page} />
      <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link}/>
      <Button link="/submit-a-note" text="Submit a Note" external />
    </Layout>
  )
}

export default BlogPost
