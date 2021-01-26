import React from "react"

import Layout from "../layout"
import WordPressBasicContentBlocks from "../content-blocks/WordPressBasicContentBlocks"

import TitleSection from '../parts/WordPressTitleSection'
import SocialShareLinks from '../parts/SocialShareLinks'
import FeaturedImage from "../content-blocks/FeaturedImage"

function BlogPost({ data }) {
  const { page } = data
  const { title, content, featuredImage, categories, author, date, excerpt, heroImage, link } = page
  console.log(heroImage, featuredImage)

  let heroSize = heroImage.heroImage && heroImage.heroImage.mediaDetails.width ? heroImage.heroImage.mediaDetails.width : null
  let featSize = featuredImage?.node?.mediaDetails.width ? featuredImage?.node?.mediaDetails.width : null
  let size = featSize > heroSize ? featSize : heroSize
  
  let image = null
  if ((size >= 1080) && featuredImage?.node?.localFile?.childImageSharp.fluid){
    image = featuredImage?.node
  } else if ((718 <= size && size < 1080) && heroImage?.heroImage?.localFile?.childImageSharp){
    image = heroImage.heroImage
  } else if ((718 <= size && size < 1080) && featuredImage?.node?.localFile?.childImageSharp){
    image = featuredImage.node
  } else if((size < 718) && featuredImage){
    image = featuredImage.node
  }
  //console.log(page)
  return (
    <Layout title={title}>
        <TitleSection heading={title} author={author} categories={categories} date={date} excerpt={excerpt} smImg={(718 > size) ? image : null} size={size} />
        {image && size >= 718 && (
            <FeaturedImage featuredImage={image} size={size}/>
        )}
        <WordPressBasicContentBlocks {...page} />
      <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link}/>
    </Layout>
  )
}

export default BlogPost
