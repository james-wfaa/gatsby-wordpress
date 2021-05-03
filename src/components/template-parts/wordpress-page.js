import React from "react"
import { breakpoints } from "../css-variables"
import styled from "styled-components"
import { useWindowSize } from "../hooks"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressBasicContentBlocks"
import Menu from "../template-parts/SidebarMenu"
import PageSectionHeader from '../parts/PageSectionHeader'
import ChildNewsPages from "../parts/ChildNewsPages"


function WordPressPage({ page }) {
  const { title, link, content, blocks,  ancestors } = page
  const { width } = useWindowSize()

  let wpMenu = null
  let menuRoot = null

 if (ancestors?.nodes) {
  // child page of a product page or group page
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
/* see if this is a chapter news page */
const isNewsArchive = (page.slug === "news" && menuRoot.link.replace(menuRoot.slug, '').replace(/\//g,'') === 'groups')

  return (
    <Layout url={link} title={title}>
      <PageWrapper>
        {width >= 1200
        ?
        <>
        { wpMenu && (
          <Menu name={wpMenu.name} link={wpMenu.link} menuItems={wpMenu.menuItems.nodes} width={width} hideNews />
        )}

        {isNewsArchive && (
          <PageSection heading={title} pageTitle leftAlign defaultPage divider>
            <ChildNewsPages items={page.wpChildren.nodes} />
          </PageSection>

        )}
        {!isNewsArchive && (
          <PageSection heading={title} pageTitle leftAlign defaultPage divider>
            <WordPressContent blocks={blocks}  content={content} />
          </PageSection>
        )}
        </>
        :
        <>
          <PageSectionHeader heading={title} pageTitle />
          { wpMenu && (
          <Menu name={wpMenu.name} link={wpMenu.link} menuItems={wpMenu.menuItems.nodes} width={width} />
        )}
        {isNewsArchive && (
          <PageSection >
            <ChildNewsPages items={page.wpChildren.nodes} />
          </PageSection>
        )}
        {!isNewsArchive && (
          <PageSection >
            <WordPressContent blocks={blocks} content={content} />
          </PageSection>
        )}
        </>
      }
      </PageWrapper>
    </Layout>
  )
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

export default WordPressPage
