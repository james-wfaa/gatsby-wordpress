import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressEventContent from "../content-blocks/WordPressEventContent"
import FeaturedImage from "../content-blocks/FeaturedImage"


function WordPressPage({ page }) {
  const { title, content, featuredImage, date, startDate, endDate, link, venue, cost, organizers } = page

  return (
    <Layout>
        {!!featuredImage?.node?.remoteFile?.childImageSharp && (
            <FeaturedImage featuredImage={featuredImage}  event/>
        )}
        <WordPressEventContent content={content} date={date} link={link} startDate={startDate} endDate={endDate} venue={venue} cost={cost} organizers={organizers} title={title} />
    </Layout>
  )
}

export default WordPressPage
