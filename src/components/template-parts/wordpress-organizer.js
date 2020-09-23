import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"

function WpOrganizer({ organizer }) {
  console.log(organizer)
  const { 
    title,
   
  } = organizer


  return (
    <Layout>
      <PageSection heading={title} pageTitle><div>Organizer template</div>
     
        <WordPressContent content={title} />
      </PageSection>
    </Layout>
  )
}

export default WpOrganizer
