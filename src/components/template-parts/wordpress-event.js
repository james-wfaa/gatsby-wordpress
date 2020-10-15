import React from "react"
import Layout from "../layout"
import WordPressEventContent from "../content-blocks/WordPressEventContent"
import FeaturedImage from "../content-blocks/FeaturedImage"


function WordPressPage({ page }) {
  const { title, content, featuredImage, date, startDate, endDate, link, venue, cost, organizers, eventDetails, blocks } = page
  const noborder = (featuredImage !== null)
  console.log(blocks)

  // TODO: filter out the array of blocks to remove all the default Event ones and only show the content ones
  // TODO: then pass that filtered list of blocks in lieu of the content
  
  return (
    <Layout noborder={noborder}>
        {!!featuredImage?.node?.localFile?.childImageSharp && (
            <FeaturedImage featuredImage={featuredImage} event/>
        )}
        <WordPressEventContent content={content} date={date} link={link} startDate={startDate} endDate={endDate} venue={venue} cost={cost} organizers={organizers} title={title} eventDetails={eventDetails} />
    </Layout>
  )
}

export default WordPressPage
