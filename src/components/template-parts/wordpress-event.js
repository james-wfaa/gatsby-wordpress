import React from "react"
import Layout from "../layout"
import WordPressEventContentBlocks from "../content-blocks/WordPressEventContentBlocks"

import FeaturedImage from "../content-blocks/FeaturedImage"


function WordPressPage({ page }) {
  const {  featuredImage, title } = page
  const noborder = (featuredImage !== null)
  //console.log('page part of event', page)
  //console.log('blocks part of event', blocks)

  // TODO: filter out the array of blocks to remove all the default Event ones and only show the content ones
  // TODO: then pass that filtered list of blocks in lieu of the content

  return (
    <Layout title={title} noborder={noborder}>
        {!!featuredImage?.node?.localFile?.childImageSharp && (
            <FeaturedImage featuredImage={featuredImage.node} event/>
        )}
        <WordPressEventContentBlocks {...page} />
    </Layout>
  )
}

export default WordPressPage
