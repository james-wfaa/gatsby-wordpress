import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/wordpress-post"
import FlaminglePost from "../../components/template-parts/wordpress-flamingle"

const Post = ({ data }) => {
//console.log('Post.js data:',data)

const isFlamingle = data.page.askFlamingle?.abeQuestioner !== null ? true : false

return isFlamingle ? <FlaminglePost data={data} /> : <BlogPost data={data} />;
}

export default Post

export const query = graphql`
  query post($id: String!) {
    page: wpPost(id: { eq: $id }) {
      id
      title
      content
      blocks {
        name
        isDynamic
        originalContent
        dynamicContent
        innerBlocks {
          name
          isDynamic
          originalContent
          dynamicContent
          innerBlocks {
            name
            isDynamic
            originalContent
            dynamicContent
          }
        }
      }
      uri
      link
      date(formatString: "MMM. DD, YYYY")
      excerpt
      author {
        node {
          firstName
          lastName
          name

        }

      }
      featuredImage {
        node {
          caption
          description
          mediaDetails {
            height
            width
          }
          author{
            node{
              name
            }
          }
          localFile {
            ...HeroImage
          }
        }
      }
      heroImage {
        heroImage {
          caption
          mediaDetails {
            height
            width
          }
          author{
            node{
              name
            }
          }
          localFile{
            ...HeroImage
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      products {
        nodes {
          name
          slug
          pages {
            nodes {
              title
              uri
            }
          }
          posts{
            nodes {
              id
              title
              url: uri
              excerpt
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 712) {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                        src
                        srcSet
                        aspectRatio
                        sizes
                      }
                    }
                  }
                }
              }
              askFlamingle {
                abeQuestioner
              }
              acfAlternatePostType{
                alternateposttype
              }
              videoFormat {
                vimeoId
              }
            }
          }
        }
      }
      askFlamingle {
        abeQuestioner
      }
    }
  }
`
