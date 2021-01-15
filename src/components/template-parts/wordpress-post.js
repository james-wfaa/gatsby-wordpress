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
  //if featuredImage is at least 1080px
  //otherwise heroImage from old site if it's at least 718px (render at 712)
  //else featured image from the old site (render at natural width)
  let heroSize = heroImage.heroImage && heroImage.heroImage.mediaDetails.width ? heroImage.heroImage.mediaDetails.width : null
  let featSize = featuredImage?.node?.mediaDetails.width ? featuredImage?.node?.mediaDetails.width : null
  let size = featSize > heroSize ? featSize : heroSize
  console.log(size)
  
  let image = null
  if ((size >= 1080) && featuredImage?.node?.localFile?.childImageSharp.fluid){
    image = featuredImage?.node
    //console.log('using 1080, wfeat')
  } else if ((718 <= size < 1080) && heroImage?.heroImage?.localFile?.childImageSharp){
    image = heroImage.heroImage
    //console.log('using 718 hero')
  } else if ((718 <= size < 1080) && featuredImage?.node?.localFile?.childImageSharp){
    image = featuredImage.node
    //console.log('using 718 feat', featuredImage?.node?.localFile?.childImageSharp)
  } else if(size < 718){
    image = featuredImage.node
    //console.log('using less than 718 feat')
  }
  //old image logic
  /*const image = heroImage && heroImage?.heroImage?.localFile?.childImageSharp 
    ? heroImage.heroImage 
    : featuredImage?.node
      ? featuredImage.node
      : null*/
  //console.log(page)
  return (
    <Layout>
        <TitleSection heading={title} author={author} categories={categories} date={date} excerpt={excerpt}  />
        {!!featuredImage?.node?.localFile?.childImageSharp && (
            <FeaturedImage featuredImage={image} size={size}/>
        )}
        <WordPressBasicContentBlocks {...page} />
      <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link}/>
    </Layout>
  )
}

export default BlogPost
