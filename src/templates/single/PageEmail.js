import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { breakpoints, sizes, colors, mixins } from '../../components/css-variables'
import Layout from "../../components/layout"
import Button from "../../components/parts/Button"
import PageSection from "../../components/page-sections/PageSection"
import WordPressContent from "../../components/content-blocks/WordPressContent"
import BackgroundImage from 'gatsby-background-image'



const WordPressEmailPage = ({ className, data }) => {
  const { page } = data
  const { title, content, HalfPageAd } = page

  console.log(page)
  console.log(HalfPageAd.adImage.localFile);

  return (
    <Layout>
      <div className={`${className} foobar`}>
        <div className="col">
        <PageSection heading={title} leftAlign headingCompact/>
        <WordPressContent content={content} />
        
        </div>
        <div className="col col--ad">
          <BackgroundImage
            Tag="div"
            className="adBgImg"
            fluid={HalfPageAd.adImage.localFile.childImageSharp.fluid}
            preserveStackingContext
          >
            {HalfPageAd && (
              <div className="wrapper">
                <div className="AdTitle" dangerouslySetInnerHTML={{ __html: HalfPageAd.adHeading }}/>
                <div className="AdContent" dangerouslySetInnerHTML={{ __html: HalfPageAd.adCopy }}/>
                <div className="button">
                  <a href={HalfPageAd.adButtonLink.uri}>{HalfPageAd.adButtonText}</a>
                </div>
              </div>
            )}
          </BackgroundImage>
        </div>

      </div>
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
    @media screen and ${breakpoints.tabletL} {
      width: 50%;
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
.col--ad {
  display: none;
  @media screen and ${breakpoints.tabletL} {
    display: block;
    .wrapper{
      padding: ${sizes.s88} 185px 0 ${sizes.s88};
      height: 885px;
      font-size: ${sizes.s26};
      color: ${colors.titleWhite};

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
      }
    }
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
  }
`
