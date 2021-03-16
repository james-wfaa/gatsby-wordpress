import { useStaticQuery, graphql } from "gatsby"

const AllChaptersData = () => {
  const { allWpChapter } = useStaticQuery(
    graphql`
      query {
        allWpChapter(limit: 200, sort: { order: DESC, fields: date }) {
          nodes {
            title
            content
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
