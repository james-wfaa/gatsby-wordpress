import React from "react"
import styled from 'styled-components'
import { breakpoints } from '../css-variables'
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import PageSectionHeader from '../parts/PageSectionHeader'

import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"

const WordPressEmailPage = ({ className, page }) => {
  const { title, excerpt, content, featuredImage, HalfPageAd } = page

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
