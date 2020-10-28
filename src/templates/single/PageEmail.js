import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { breakpoints } from '../../components/css-variables'
import Layout from "../../components/layout"
import PageSection from "../../components/page-sections/PageSection"
import WordPressContent from "../../components/content-blocks/WordPressContent"


const WordPressEmailPage = ({ className, data }) => {
  const { page } = data
  const { title, content, HalfPageAd } = page

  console.log(page)


  return (
    <Layout>
      <div className={`${className} foobar`}>
        <div className="col">
        <PageSection heading={title} leftAlign headingCompact/>
        <WordPressContent content={content} />
        </div>
        <div className="col col--ad">Half Page Ad</div>
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
.col--ad {
  display: none;
  background-color: #cdcdcd;
  @media screen and ${breakpoints.tabletL} {
    display: block;
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
        }
        adButtonText
        adCopy
        adHeading
        adImage {
          id
        }
      }
    }
  }
`
