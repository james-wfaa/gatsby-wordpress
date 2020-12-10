import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { breakpoints, sizes, colors, mixins } from '../../components/css-variables'
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import SimpleSlider from "../../components/content-modules/SimpleSlider"
import ContentCard from "../../components/content-blocks/ContentCard"
import WordPressContent from "../../components/content-blocks/WordPressContent"
import BackgroundImage from 'gatsby-background-image'
import arrowSVG from '../../svg/Arrow_45-degrees_white_1x.svg'




const WordPressEmailPage = ({ className, data }) => {
  const [ads, setAds] = useState(data.page.HalfPageAd.adList)
  const [currentAd, setCurrentAd] = useState(null)
  const { page, posts } = data
  const { title, content, HalfPageAd } = page

  let postCards = posts.nodes.map((post) => {
    const { featuredImage: img } = post
    const cardImg = (img && img.node && img.node.localFile) ? img.node.localFile : null
    return (
      <ContentCard img={cardImg} {...post} />
    )
  })

  const randomAdGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min) - 1
  }

  useEffect(() => {
    let filteredAds = ads.filter(ad => {
      return ad.adActive
    })
    let adSpot = randomAdGenerator(1, (filteredAds.length))
    setCurrentAd(filteredAds[adSpot])
  }, [])

  return (
    <Layout>
      <div className={`${className}`}>
        <div className="col col--copy">
        <PageSection heading={title} leftAlign headingCompact onlyChild>
        <WordPressContent content={content} />
        </PageSection>
        </div>
        {currentAd && (<div className="col col--ad">
          <BackgroundImage
            Tag="div"
            className="adBgImg"
            fluid={currentAd.adImage.localFile.childImageSharp.fluid}
            preserveStackingContext
          >
            {currentAd && (
              <div className="wrapper">
                <div className="AdTitle" dangerouslySetInnerHTML={{ __html: currentAd.adHeading }}/>
                <div className="AdContent" dangerouslySetInnerHTML={{ __html: currentAd.adCopy }}/>
                {currentAd.adButtonLink && (
                  <div className="button">
                    <a href={currentAd.adButtonLink.uri}>{currentAd.adButtonText}</a>
                  </div>
                )}
              </div>
            )}
          </BackgroundImage>
        </div> )
      }

      </div>
      <PageSection
        heading="Featured News and Stories"
        buttons={[
          {
            link: "/news/all",
            text: "See All News and Stories",
          },
        ]}
        topBorder
        desktopOnly
      >
          <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth>
            {postCards}
          </SimpleSlider>
        </PageSection>

    </Layout>
  )
}

const StyledWordPressEmailPage = styled(WordPressEmailPage)`
display: flex;
flex-direction: column;
max-width: 1440px;
margin: 0 auto;

@media screen and ${breakpoints.tabletL} {
  flex-direction: row;
  .col {
    width: 50%;
    text-align: left !important;
  }
}

.button{
  a{
    width: 100%;
    position: relative;
    @media screen and ${breakpoints.tabletL} {
      width: 50%;
    }
    :after {
      position: absolute;
      bottom: 38%;
      left: calc( 50% + ${sizes.s34} );
      width: ${sizes.s12};
      height: ${sizes.s12};
      background-color: ${colors.bgWhite};
      -webkit-mask-image: url(${arrowSVG});
      mask: url(${arrowSVG}) no-repeat;
      content: '';
    }
  }
}

.leftAlign{
  text-align: center;
  :after {
    left: calc( 50% - ${sizes.s34} );
  }
  @media screen and ${breakpoints.tabletL} {
    text-align: left;
    :after {
      left: 10%;
    }
  }
}

div{
  .section-header{
    text-align: center;
    @media screen and ${breakpoints.tabletL} {
      text-align: left;
      :after {
        left: 10%;
      }
    }
  }
}
.supplemental {
  display: none;
  @media screen and ${breakpoints.tabletL} {
    display: block;
  }
}
.col--ad {
  display: none;
  @media screen and ${breakpoints.tabletL} {
    display: block;
    .wrapper{
      padding: ${sizes.s88} 185px 0 ${sizes.s88};
      height: 885px;
      font-size: ${sizes.s26};
      color: ${colors.titleWhite};
      background-size: cover;

      .AdTitle{
        font-weight: bold;
        margin-bottom: ${sizes.s32};
      }
      .AdContent{
        margin-bottom: ${sizes.s40};
      }

      a{
        ${mixins.buttons};
        color: ${colors.titleWhite};
        background-color:rgb(255,255,255,0.1);
        border: 1px solid ${colors.titleWhite};
        width: min-content;
        :after{
          content: none;
        }
      }
    }
  }

}
.col-copy {
  padding-bottom: ${sizes.s58};
  @media screen and ${breakpoints.tabletL} {
    padding-bottom: ${sizes.s88};
  }
}
`
export default StyledWordPressEmailPage


export const query = graphql`
  query email($id: String!) {
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
      HalfPageAd {
        adList {
          fieldGroupName
          adButtonLink {
            ... on WpPage {
              id
              uri
            }
            ... on WpPost {
              id
              uri
            }
            ... on WpEvent {
              id
              url
              uri
            }
          }
          adButtonText
          adActive
          adCopy
          adHeading
          adImage {
            id
            localFile {
              ...HeroImage
            }
          }
        }

      }
    },
    posts: allWpPost(limit: 6, sort: {order: ASC, fields: date}) {
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
