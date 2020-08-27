import React from "react"

import { Link } from "gatsby"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"
import { normalizePath } from "../../utils/get-url-path"

function BlogPost({ data }) {
  console.log( data )
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

  console.log(content)

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
