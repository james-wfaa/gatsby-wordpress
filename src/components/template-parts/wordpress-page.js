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

 //console.log(ancestors)
 if (ancestors?.nodes) {
  // child page of a product page
  if (ancestors.nodes[0]?.template?.templateName === "Product Template") {
    menuRoot = ancestors.nodes[0]
   }
   else {
    const groupSlug = 'groups'
    //const topParent = ancestors.nodes[ancestors.nodes.length -1]
    let topParent = ancestors.nodes[ancestors.nodes.length -1]
    if(ancestors.nodes.length >= 2){
      topParent = ancestors.nodes[1]
    }
    
    console.log('topParent:', topParent)
    console.log(topParent?.slug && topParent.slug, groupSlug)

    if (topParent?.slug && topParent.slug === groupSlug) {
      // child or granchild of a Group/Chapter page
      //menuRoot = ancestors.nodes[ancestors.nodes.length -2]
      menuRoot = ancestors.nodes[0]
      
    }
    console.log('menuRoot:', menuRoot, ancestors) 
   }
 }

 if (menuRoot) {
  //console.log(menuRoot)

  wpMenu = {}
  wpMenu.name = menuRoot.title
  wpMenu.link = menuRoot.link
  wpMenu.menuItems = {}
  wpMenu.menuItems.nodes = menuRoot.wpChildren.nodes.map( item => {
   item.path = item.uri
   item.label = item.title
   return item
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
          <Menu name={wpMenu.name} menuItems={wpMenu.menuItems.nodes} width={width} />
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
