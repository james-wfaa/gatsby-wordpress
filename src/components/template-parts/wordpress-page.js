import React from "react"

import { Link } from "gatsby"
import { Box } from "@chakra-ui/core"
import Img from "gatsby-image"
import Layout from "../../../components/Layout"
import PageSection from "../../../components/page-sections/PageSection"
import WordPressContent from "../../../components/content-blocks/WordPressContent"
import { normalizePath } from "../../utils/get-url-path"

function BlogPost({ data }) {
  console.log( data )
  const { nextPage, previousPage, page } = data
  const { title, content, blocks, featuredImage } = page

  console.log(content)

  return (
    <Layout>
      <PageSection heading={title} pageTitle>
      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
        <Box mb={5}>
          <Img fluid={featuredImage.node.remoteFile.childImageSharp.fluid} />
        </Box>
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
