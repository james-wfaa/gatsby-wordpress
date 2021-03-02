import React from "react"
import { breakpoints } from "../css-variables"
import styled from "styled-components"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressBasicContentBlocks"
import Menu from "../template-parts/SidebarMenu"
import PageSectionHeader from '../parts/PageSectionHeader'
import { useWindowSize } from "../hooks"

function WordPressPage({ page }) {
  const { title, content, blocks,  ancestors } = page
  const { width } = useWindowSize()

  // Temporary Query until dynamic menus added to page query
  let wpMenu = null
  let menuRoot = null
  /*
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
  */
 //menuName = (ancestors) ?

 if (ancestors?.nodes) {
  // child page of a product page
  menuRoot = ancestors.nodes[0]
 }

 if (menuRoot) {
   wpMenu = {}
   wpMenu.name = menuRoot.title
   wpMenu.link = menuRoot.link
   wpMenu.menuItems = {}
   wpMenu.menuItems.nodes = menuRoot.wpChildren.nodes.map(item => {
     item.path = item.uri
     item.label = item.title
     return item
   })
   wpMenu.menuItems.nodes.sort((a,  b) => {
     if (a.title < b.title) {
       return -1
     }
     if (a.title > b.title) {
       return 1
     }
     return 0
   })
 }


  const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1080px;
    margin: 58px 32px 0 32px;
    @media screen and ${breakpoints.laptopS} {
      grid-template-columns: 350px 1fr;
      margin: 88px auto 0;
    }
  `


  return (
    <Layout title={title}>
      <PageWrapper>
        {width >= 1200
        ?
        <>
        { wpMenu && (
          <Menu name={wpMenu.name} link={wpMenu.link} menuItems={wpMenu.menuItems.nodes} width={width} />
        )}

          <PageSection heading={title} pageTitle leftAlign defaultPage divider>
            <WordPressContent blocks={blocks}  content={content} />
          </PageSection>
        </>
        :
        <>
          <PageSectionHeader heading={title} />
          { wpMenu && (
          <Menu name={wpMenu.name} link={wpMenu.link} menuItems={wpMenu.menuItems.nodes} width={width} />
        )}
          <PageSection pageTitle>
            <WordPressContent blocks={blocks} content={content} />
          </PageSection>
        </>
      }
      </PageWrapper>
    </Layout>
  )
}

export default WordPressPage
