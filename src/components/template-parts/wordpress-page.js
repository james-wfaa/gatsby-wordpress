import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { breakpoints } from "../css-variables"
import styled from "styled-components"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressBasicContentBlocks"
import Menu from "../template-parts/SidebarMenu"

function WordPressPage({ page }) {
  const { title, content, featuredImage, blocks, eventListing, } = page
  const { eventCategory } = eventListing
  // Temporary Query until dynamic menus added to page query
  const { wpMenu } = useStaticQuery(
    graphql`
      query {
        wpMenu {
          id
          name
          locations
          count
          menuItems {
            nodes {
              title
              url
              path
              label
            }
          }
        }
      }
    `
  )

  const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1080px;
    margin: 58px 32px 0 32px;
    @media screen and ${breakpoints.tabletL} {
      grid-template-columns: 350px 1fr;
      margin: 88px auto 0;
    }
  `


  return (
    <Layout>
      <PageWrapper>
        <Menu name={wpMenu.name} menuItems={wpMenu.menuItems.nodes} />
        <PageSection heading={title} pageTitle leftAlign defaultPage>
          <WordPressContent blocks={blocks} eventCategory={eventCategory}/>
        </PageSection>
      </PageWrapper>
    </Layout>
  )
}

export default WordPressPage
