import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/wordpress-post"
import FlaminglePost from "../../components/template-parts/wordpress-flamingle"

const Post = ({ data }) => {
  const { page } = data
  const { linkFormat } = page

  /** if this is a "link" post, we should never even get here, but if we do, this renders 
   * a browser redirect
   */
  if (typeof window !== "undefined" && window.location && linkFormat?.linkUrl) {
    window.location.replace(linkFormat.linkUrl)
  }
  if (typeof window !== "undefined" && window.location.href.includes('chapters.uwalumni.com')) {
    const fixedUrl = window.location.href.replace('chapters.uwalumni.com','www.uwalumni.com')
    window.location.replace(fixedUrl)
  }

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
      linkFormat {
        linkAuthor
        linkUrl
      }
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
            ...HeroImageNew
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
            ...HeroImageNew
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
              template {
                ... on WpDefaultTemplate {
                  templateName
                }
                ... on WpTemplate_AggregateProductPage {
                  templateName
                }
                ... on WpTemplate_HomePage {
                  templateName
                }
                ... on WpTemplate_TopLevelPage {
                  templateName
                }
                ... on WpProductTemplate {
                  templateName
                }
                ... on WpGeneralTemplate {
                  templateName
                }
              }
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
                      gatsbyImageData(layout: CONSTRAINED, width: 1080)
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
