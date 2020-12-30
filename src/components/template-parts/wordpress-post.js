import React from "react"

import { Link } from "gatsby"
import Layout from "../layout"
import { normalizePath } from "../../utils/get-url-path"
import WordPressContent from "../content-blocks/WordPressPostContent"
import TitleSection from '../parts/WordPressTitleSection'
import SocialShareLinks from '../parts/SocialShareLinks'
import FeaturedImage from "../content-blocks/FeaturedImage"

function BlogPost({ data }) {
  const { page } = data
  const { title, content, featuredImage, categories, author, date, excerpt } = page

  return (
    <Layout>

        <TitleSection heading={title} author={author} categories={categories} date={date} excerpt={excerpt}  />
        {!!featuredImage?.node?.localFile?.childImageSharp && (
            <FeaturedImage featuredImage={featuredImage} />
        )}
        <WordPressContent content={content} />



      <br />

      <SocialShareLinks text="Share This Story"/>
    </Layout>
  )
}

export default BlogPost
