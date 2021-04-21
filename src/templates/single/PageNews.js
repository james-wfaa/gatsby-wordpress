import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import WordPressContent from "../../components/content-blocks/WordPressContentBlocks"
import CardSet from "../../components/content-modules/CardSet"
import StoryCardD from "../../components/content-blocks/StoryCardD"
import PromoCardD from "../../components/content-blocks/PromoCardD"
import GridCardD from "../../components/content-modules/GridCardD"
import StoryContentCard from "../../components/content-blocks/StoryContentCard"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"
import SimpleSlider from "../../components/content-modules/SimpleSlider"

function WordPressPage({ data }) {
  const { page, posts, featuredPosts, tileAds } = data
  const { title, excerpt, blocks, featuredImage, heroIntroSection, storyCategories, gridDetails } = page
  const adList = tileAds?.nodes?.[0]?.siteOptions?.TileAds?.adList?.[0]
    ? tileAds.nodes[0].siteOptions.TileAds.adList
    : null
  const [ads] = useState(adList)
  const [currentAd, setCurrentAd] = useState(null)


  const randomAdGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min) - 1
  }

  useEffect(() => {
    let filteredAds = (ads)
      ? ads.filter(ad => {
          return ad.adActive
        })
      : null
    let adSpot = (filteredAds)
      ? randomAdGenerator(1, (filteredAds.length))
      : null
    if (filteredAds.length > 0 && filteredAds[adSpot]) {
      setCurrentAd(filteredAds[adSpot])
    }
  }, [ads])


  const { storycategoriesinner: categories } = storyCategories
  const { backgroundImage } = gridDetails

  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/news/all",
      text: "See All News & Stories",
    },
  ]

  const topics = categories.map((item) => {
    const { category, product, numberToShow } = item

    const topic = category ? category : product ? product : null

    let linkPath
    if (topic?.slug) {
      switch(topic.slug) {
        case 'news':
          linkPath = 'all'
          break
        case 'askflamingle':
        case 'badger-insider':
        case 'badger-vibes':
        case 'on-wisconsin':
          linkPath = `all?pub=${topic.slug}`
          break
        default:

          linkPath = category
            ? `all?filter=${topic.slug}`
            : `all?product=${topic.slug}`
          break
      }
    }
    let topicButton
    if (topic?.name) {
      topicButton = [
        {
          link: `/news/${linkPath}`,
          text: `See All ${topic.name}`,
        },
      ]
    }
    const cardItems = (topic?.name && topic?.posts?.nodes) ? topic.posts.nodes : null

    if (cardItems) {
      return (
        <PageSection heading={topic.name} stagger buttons={topicButton}>
          <CardSet items={cardItems} num={numberToShow} type="news"/>
        </PageSection>
      )
    }
    return (<div/>)
  })
  const cardGridPosts = posts.nodes.slice(0,9)
  let storyCards = cardGridPosts.map((post) => {
    return (
      <StoryCardD {...post} />
    )
  })
  const storyCards1 = storyCards.slice(0,5)
  const storyCards2 = storyCards.slice(5,5+storyCards.length)
  const heroHeading = heroIntroSection?.heroHeading ? `<span>${heroIntroSection.heroHeading}</span> ON` : null

  let featuredPostCards = featuredPosts.nodes.map((post) => {
    const img = post?.featuredImage?.node?.localFile ? post.featuredImage.node?.localFile : null
    const products = post?.products?.nodes
      ? post.products.nodes
      : null
    const categories = post?.categories?.nodes
      ? post.categories.nodes
      : null
    return (<StoryContentCard
      key={post.url}
      img={img}
      tags={products.concat(categories)}
      size="L"
      {...post}
    />)
    
  })

  return (
    <Layout title={title} noborder>
      { featuredImage?.node?.localFile && (
      <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          videoURL="https://player.vimeo.com/external/524412999.hd.mp4?s=1fc14eaf00fbfe6d5453b7a3bdda0b11487479cb&profile_id=175"
          redHeading={title}
          excerpt={excerpt}
          mobileHeroImage={heroIntroSection?.heroImageMobile?.localFile}
          heroHeading={heroHeading}
      />)}
      <WordPressContent blocks={blocks} />
      <PageSection buttons={moreButton} >
        <SimpleSlider
          className="center"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >{featuredPostCards}
        </SimpleSlider>
      </PageSection>
      <>{topics}</>
      <PageSection heading="Most Recent" bgImage={gridBgImage} buttons={moreButton}>
        <GridCardD> {storyCards1}
          {currentAd && (
              <PromoCardD title={currentAd.adText} url={currentAd.adLink} />
            )}
          {storyCards2}</GridCardD>
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
      heroIntroSection {
        heroImageMobile {
          altText
          localFile {
            ...HeroImage
          }
        }
        heroHeading
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
    featuredPosts: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "featured-news"}}}}}, limit: 6, sort: {order: DESC, fields: date}) {
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
        products {
          nodes {
            slug
            name
          }
        }
        categories {
          nodes {
            name
            slug
            uri
          }
        }
        acfAlternatePostType{
          alternateposttype
        }
        videoFormat {
          vimeoId
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
    tileAds: allWp {
      nodes {
        siteOptions {
          TileAds {
            adList {
              adText
              adLink
              adActive
            }
          }
        }
      }
    }

  }
`
