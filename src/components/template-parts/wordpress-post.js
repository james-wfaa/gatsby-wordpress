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
  const image = heroImage && heroImage?.heroImage?.localFile?.childImageSharp 
    ? heroImage.heroImage 
    : featuredImage?.node
      ? featuredImage.node
      : null
  //console.log(page)
  return (
    <Layout>
        <TitleSection heading={title} author={author} categories={categories} date={date} excerpt={excerpt}  />
        {!!featuredImage?.node?.localFile?.childImageSharp && (
            <FeaturedImage featuredImage={image} />
        )}
        <WordPressBasicContentBlocks {...page} />
      <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link}/>
    </Layout>
  )
}

export default BlogPost
