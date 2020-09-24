import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"
import StorySectionHeader from '../parts/StorySectionHeader'
import EventRegistration from "../content-blocks/EventRegistration"



function WordPressPage({ page }) {
  const { title, content, featuredImage, date, startDate, endDate, link } = page

  return (
    <Layout>
      <PageSection>
      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
          <FeaturedImage featuredImage={featuredImage} />
      )}
        <StorySectionHeader heading={title} />
        <EventRegistration date={date} registrationLink={link}></EventRegistration>
        <WordPressContent content={content} />
      </PageSection>
    </Layout>
  )
}

export default WordPressPage
