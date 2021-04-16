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
        order
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
      dayYear: date(formatString: "DD, YYYY")
      month: date(formatString: "MM")
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
          id
          name
          slug
        }
      }
      products {
        nodes {
          id
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
              categories {
                nodes {
                  name
                  slug
                  id
                }
              }
              products {
                nodes {
                  name
                  slug
                  id
                }
              }
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 712) {
                        base64
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
              postExternalAuthors {
                nodes {
                  name
                  slug
                }
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
      postExternalAuthors {
        nodes {
          name
          slug
        }
      }

    }
  }
`
