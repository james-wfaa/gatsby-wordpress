import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import StoryContentCard from "../content-blocks/StoryContentCard"
import SimpleSlider from "../content-modules/SimpleSlider"

const RecentPosts = () => {
  const { allWpPost } = useStaticQuery(
    graphql`
      query {
        allWpPost(limit: 10, sort: {order: DESC, fields: date}) {
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

  let postCards = allWpPost.nodes.map((post) => {
    const { featuredImage: img } = post
    const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
    return (
      <StoryContentCard key={post.url} img={cardImg} {...post} />
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

export default RecentPosts
