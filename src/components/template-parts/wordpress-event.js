import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressEventContent from "../content-blocks/WordPressEventContent"
import FeaturedImage from "../content-blocks/FeaturedImage"
import StorySectionHeader from '../parts/StorySectionHeader'



function WordPressPage({ page }) {
  const { title, content, featuredImage, date, startDate, endDate, link, venue, cost, organizers } = page

  return (
    <Layout>
      <PageSection>
        {!!featuredImage?.node?.remoteFile?.childImageSharp && (
            <FeaturedImage featuredImage={featuredImage} />
        )}
        <StorySectionHeader heading={title} />
        <WordPressEventContent content={content} date={date} link={link} startDate={startDate} endDate={endDate} venue={venue} cost={cost} organizers={organizers} />
      </PageSection>
    </Layout>
  )
}

export default WordPressPage
