import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ContentCard from "../content-blocks/ContentCard"
import SimpleSlider from "../content-modules/SimpleSlider"

const RecentNotes = () => {
  const { allWpClassnote } = useStaticQuery(
    graphql`
      query {
        allWpClassnote(limit: 10, sort: {order: DESC, fields: date}) {
          nodes {
            title
            excerpt
            featuredImage {
              node {
                localFile {
                  ...HeroImage
                }
              }
            }
            url: uri
          }
        }
      }
    `
  )

  let postCards = allWpClassnote.nodes.map((post) => {
    const { featuredImage: img } = post
    const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
    return (
      <ContentCard key={post.url} img={cardImg} {...post} />
    )
  })

  return (
    <div>
       <SimpleSlider
          className="center"
          slidesToShow="1"
          centerMode
          variableWidth>
            {postCards}
          </SimpleSlider>
    </div>
  )
}

export default RecentNotes
