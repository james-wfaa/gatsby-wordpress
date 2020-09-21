import React from "react"

import { Link } from "gatsby"
import Layout from "../layout"
import { normalizePath } from "../../utils/get-url-path"
import WordPressContent from "../content-blocks/WordPressPostContent"
import StorySectionHeader from '../parts/StorySectionHeader'
import SocialShareLinks from '../parts/SocialShareLinks'
import PageSection from "../page-sections/PageSection"
import FeaturedImage from "../content-blocks/FeaturedImage"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage, categories, author, date, excerpt } = page

  return (
    <Layout>
      <PageSection>
        <StorySectionHeader heading={title} author={author} categories={categories} date={date} excerpt={excerpt}  />
        {!!featuredImage?.node?.remoteFile?.childImageSharp && (
            <FeaturedImage featuredImage={featuredImage} />
        )}
        <WordPressContent content={content} />
      </PageSection>


      <br />
      {!!nextPage && (
        <Link to={normalizePath(nextPage.uri)}>Next: {nextPage.title} --
      </Link>
       
      )}
      <br />
      {!!previousPage && (
        <Link to={normalizePath(previousPage.uri)}>
          Previous: {previousPage.title}
        </Link>
      )}
      <SocialShareLinks/>
    </Layout>
  )
}

export default BlogPost
