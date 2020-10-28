import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import WordPressContent from "../../components/content-blocks/WordPressContent"
import CardSet from "../../components/content-modules/CardSet"
import ContentCardD from "../../components/content-blocks/ContentCardD"
import GridCardD from "../../components/content-modules/GridCardD"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"

function WordPressPage({ data }) {
  const { page, posts } = data
  console.log(page)
  const { title, excerpt, content, featuredImage, storyCategories, gridDetails } = page
  
  const { storycategoriesinner: categories } = storyCategories
  const { backgroundImage } = gridDetails
  console.log(backgroundImage)

  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/news/all",
      text: "See More",
    },
  ]

  console.log(categories)

  const cats = categories.map((item) => {
    const { category, numberToShow } = item
    console.log(category)
    if (category && category.name) {
      return (
      
        <PageSection heading={category.name} stagger>
          <CardSet items={category.posts.nodes} num={numberToShow} />
        </PageSection>
      )
    }
    return (<div/>)
    
  }
  )

  const cardGridPosts = posts.nodes.slice(0,9)
  let postCards = cardGridPosts.map((post) => {
    console.log(post)
    return (
      <ContentCardD {...post} />
    )
  })
  console.log(postCards)



  return (
    <Layout noborder>
      <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroHeading="<span>Badger</span> ON"
          redHeading={title}
          excerpt={excerpt}
      />
      <WordPressContent content={content} />
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
                        }
                      }
                    }
                  }
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
                
              }
            }
          }
        }
      }
    },
    posts: allWpPost(limit: 100, sort: {order: ASC, fields: date}) {
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
