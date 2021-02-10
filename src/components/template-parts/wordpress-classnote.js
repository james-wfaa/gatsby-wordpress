import React from "react"

import Layout from "../layout"
import WordPressBasicContentBlocks from "../content-blocks/WordPressBasicContentBlocks"

import TitleSection from '../parts/WordPressTitleSection'
import SocialShareLinks from '../parts/SocialShareLinks'
import FeaturedImage from "../content-blocks/FeaturedImage"

function BlogPost({ data }) {
  const { page } = data
  //console.log(page)
  const { title, featuredImage, categories, author, date, excerpt, link } = page

  let featSize = featuredImage?.node?.mediaDetails.width ? featuredImage?.node?.mediaDetails.width : null
  let size = featSize 
  
  let image = (featuredImage?.node) ? featuredImage.node : null
  
  return (
    <Layout title={title}>
        <TitleSection heading={title} author={author} categories={categories} date={date} excerpt={excerpt} smImg={(718 > size) ? image : null} size={size} />
        {image && size >= 718 && (
            <FeaturedImage featuredImage={image} size={size}/>
        )}
        <WordPressBasicContentBlocks {...page} />
      <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link}/>
      <a className="button" href="/submit-a-note">Submit a Note</a>
    </Layout>
  )
}

export default BlogPost
