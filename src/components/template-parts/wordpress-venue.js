import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"

function WpVenue({ venue }) {
  console.log(venue)
  const { 
    title,
    address,
    city,
    state,
    country,
    zip,
    content 
  } = venue


  return (
    <Layout>
      <PageSection heading={title} pageTitle><div>Venue template</div>
     
        <WordPressContent content={content} />
      </PageSection>
    </Layout>
  )
}

export default WpVenue
