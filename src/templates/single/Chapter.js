import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"


function WpChapter({ data }) {
  if (typeof window !== "undefined" && window.location.includes('chapters.uwalumni.com')) {
    const fixedUrl = window.location.replace('chapters.uwalumni.com','www.uwalumni.com');
  }
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
        csWechat
        csSnapchat
      }
    }
  }
`
