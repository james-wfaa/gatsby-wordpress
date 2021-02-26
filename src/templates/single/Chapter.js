import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

function WpChapter({ data }) {
  const { venue } = data
  const {
    title,
    content
  } = venue

  return (
    <Layout>
      chapter
    </Layout>
  )
}

export default WpChapter

export const query = graphql`
  query chapter($id: String!) {
    chapter: wpChapter(id: { eq: $id }) {
      chapterDetails {
        csUrl
        csTwitter
        csState
        csLongitude
        csLinkedin
        csLatitude
        csInstagram
        csFacebook
        csCountry
      }
    }
  }
`
