import React from "react"
import Layout from "../layout"
import PageIntro from "../page-sections/HeroIntroSection"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"
import ContentCardD from "../content-blocks/ContentCardD"
import GridCardD from "../content-modules/GridCardD"

function WordPressPage({ page, events }) {
  const { title, content, featuredImage, blocks } = page

  const eventCards = events.map((event) => {
    console.log(event)
    return (
      <ContentCardD {...event.node} />
    )
  })

  return (
    <Layout>
      
      <PageSection heading={title} pageTitle><div>Events Main template</div>
      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
          <FeaturedImage featuredImage={featuredImage} />
      )}
      </PageSection>
      <WordPressContent content={content} />
      <PageSection heading="At a Glance">
        <GridCardD>{eventCards}</GridCardD>
      </PageSection>
      
    </Layout>
  )
}

export default WordPressPage
