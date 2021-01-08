import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { breakpoints } from "../css-variables"
import styled from "styled-components"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressBasicContentBlocks"
import Menu from "../template-parts/SidebarMenu"
import PageSectionHeader from '../parts/PageSectionHeader'
import { useWindowSize } from "../hooks"

function WordPressPage({ page }) {
  const { title, content, blocks, eventListing, } = page
  const { eventCategory } = eventListing
  const { width } = useWindowSize()
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
        {width > 936
        ?
        <>
          <Menu name={wpMenu.name} menuItems={wpMenu.menuItems.nodes} width={width} />
          <PageSection heading={title} pageTitle leftAlign defaultPage>
            <WordPressContent blocks={blocks} eventCategory={eventCategory} content={content} />
          </PageSection>
        </>
        :
        <>
          <PageSectionHeader heading={title} />
          <Menu name={wpMenu.name} menuItems={wpMenu.menuItems.nodes} width={width} />
          <PageSection pageTitle>
            <WordPressContent blocks={blocks} eventCategory={eventCategory} content={content} />
          </PageSection>
        </>
      }
      </PageWrapper>
    </Layout>
  )
}

export default WordPressPage
