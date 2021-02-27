import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ContentCard from "../content-blocks/ContentCard"
import SimpleSlider from "../content-modules/SimpleSlider"

const AllChaptersData = () => {
  const { allWpChapter } = useStaticQuery(
    graphql`
      query {
        allWpChapter(limit: 200, sort: {order: DESC, fields: date}) {
          nodes {
            title
            chapterDetails {
              csCountry
              csFacebook
              csInstagram
              csLatitude
              csLinkedin
              csLongitude 
              csSnapchat  
              csState
              csTwitter
              csUrl
              csWechat
            }
          }
        }
      }
    `
  )
  return (
    allWpChapter
  )
}


export default AllChaptersData
