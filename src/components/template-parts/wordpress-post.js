import React from "react"

import { Link } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"
import Img from "gatsby-image"
import Layout from "../Layout"
import { normalizePath } from "../../utils/get-url-path"
import WordPressContent from "../content-blocks/WordPressPostContent"
import PageSection from "../page-sections/PageSection"
import FeaturedImage from "../content-blocks/FeaturedImage"



function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

  return (
    <Layout>
      <PageSection heading={title} pageTitle>
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
    </Layout>
  )
}

export default BlogPost
