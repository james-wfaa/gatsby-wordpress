import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ContentCard from "../content-blocks/ContentCard"
import SimpleSlider from "../content-modules/SimpleSlider"

const UpcomingEvents = () => {
  const { allWpEvent } = useStaticQuery(
    graphql`
      query {
        allWpEvent(limit: 10, sort: {order: DESC, fields: date}) {
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

  let postCards = allWpEvent.nodes.map((post) => {
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
          dots
          centerMode
          variableWidth>
            {postCards}
          </SimpleSlider>
    </div>
  )
}

export default UpcomingEvents
