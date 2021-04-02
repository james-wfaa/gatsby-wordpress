import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import WordPressContent from "../../components/content-blocks/WordPressContentBlocks"
import CardSet from "../../components/content-modules/CardSet"
import StoryCardD from "../../components/content-blocks/StoryCardD"
import GridCardD from "../../components/content-modules/GridCardD"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"

function WordPressPage({ data }) {
  const { page, posts } = data
  const { title, excerpt, blocks, featuredImage, storyCategories, product, gridDetails } = page

  const { storycategoriesinner: categories } = storyCategories
  const { backgroundImage } = gridDetails

  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/news/all",
      text: "See More",
    },
  ]

  const cats = categories.map((item) => {
    const { category, numberToShow } = item
    let linkPath
    if (category?.slug) {
      switch(category.slug) {
        case 'news':
          linkPath = 'all'
          break
        case 'askflamingle':
        case 'badger-insider':
        case 'badger-vibes':
        case 'on-wisconsin':
          linkPath = `all?pub=${category.slug}`
          break
        default:
          linkPath = `all?filter=${category.slug}`
          break
      }
    }
    
    if (category?.name) {
      const catButton = [
        {
          link: `/news/${linkPath}`,
          text: `See All ${category.name}`,
        },
      ]
    }
    const cardItems = (category?.name && category?.posts?.nodes) 
      ? category.posts.nodes
      : (!category && product?.name && product?.posts?.nodes)
        ? product.posts.nodes
        : null

    if (cardItems) {
      return (
        <PageSection heading={category.name} stagger>
          <CardSet items={cardItems} num={numberToShow} type="news"/>
        </PageSection>
      )
    } 
    return (<div/>)
  })
  //console.log(posts)
  const cardGridPosts = posts.nodes.slice(0,9)
  //console.log('cardGridPosts:',cardGridPosts)
  let postCards = cardGridPosts.map((post) => {
    console.log('post tiles post: ',post)
    return (
      <StoryCardD {...post} />
    )
  })



  return (
    <Layout title={title} noborder>
      { featuredImage && featuredImage.node && (
      <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          videoURL="https://player.vimeo.com/external/524412999.hd.mp4?s=1fc14eaf00fbfe6d5453b7a3bdda0b11487479cb&profile_id=175"
          redHeading={title}
          excerpt={excerpt}
      />)}
      <WordPressContent blocks={blocks} />
      <>{cats}</>
      <PageSection heading="Most Recent" bgImage={gridBgImage} buttons={moreButton}>
        <GridCardD>{postCards}</GridCardD>
      </PageSection>
    </Layout>
  )
}

export default WordPressPage


export const query = graphql`
  query news($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      excerpt
      content
      featuredImage {
        node {
          localFile {
            ...HeroImage
          }
        }
      }
      storyCategories {
        storycategoriesinner {
          category {
            slug
            name
            posts {
              nodes {
                title
                url: uri
                excerpt
                linkFormat {
                  linkUrl
                  linkAuthor
                }
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
                          aspectRatio
                          base64
                          src
                          srcSet
                          sizes
                        }
                      }
                    }
                  }
                }
                postFormats {
                  nodes {
                    name
                    link
                    uri
                    slug
                  }
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
          product {
            slug
            name
            posts {
              nodes {
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
                          aspectRatio
                          base64
                          src
                          srcSet
                          sizes
                        }
                      }
                    }
                  }
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
          numberToShow
        }
      }
      blocks {
        name
        originalContent
        dynamicContent
        innerBlocks {
          name
          originalContent
          dynamicContent
          innerBlocks {
            name
            originalContent
            dynamicContent
          }
        }

      }
      gridDetails {
        backgroundImage {
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
    },
    posts: allWpPost(limit: 100, sort: {order: DESC, fields: date}) {
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
        terms {
          nodes {
            ... on WpPostFormat {
              id
              name
              slug
            }
          }
        }
        linkFormat {
          linkAuthor
          linkUrl
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
`
