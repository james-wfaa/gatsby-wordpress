import React from "react"
import Layout from "../layout"
import WordPressEventContent from "../content-blocks/WordPressEventContent"
import FeaturedImage from "../content-blocks/FeaturedImage"


function WordPressPage({ page }) {
  const { title, content, featuredImage, date, startDate, endDate, link, venue, cost, organizers, eventDetails } = page

  return (
    <Layout>
        {!!featuredImage?.node?.localFile?.childImageSharp && (
            <FeaturedImage featuredImage={featuredImage} event/>
        )}
        <WordPressEventContent content={content} date={date} link={link} startDate={startDate} endDate={endDate} venue={venue} cost={cost} organizers={organizers} title={title} eventDetails={eventDetails} />
    </Layout>
  )
}

export default WordPressPage
