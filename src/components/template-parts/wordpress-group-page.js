import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { breakpoints, colors, sizes } from "../css-variables"
import styled from "styled-components"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import GridCardD from "../content-modules/GridCardD"
import ContentCard from "../content-blocks/ContentCard"

import CardE from "../content-blocks/CardE"
import PromoCardD from "../content-blocks/PromoCardD"
import HeroIntroSection from "../page-sections/HeroIntroSection"
import SimpleSlider from "../content-modules/SimpleSlider"

import WordPressContent from "../content-blocks/WordPressBasicContentBlocks"
import Menu from "./SidebarMenu"
import PageSectionHeader from '../parts/PageSectionHeader'
import { useWindowSize } from "../hooks"

function WordPressGroupPage({ page }) {
  const taglist2 = [
    {
      link: "#",
      tag: "Tag 1",
    },
    {
      link: "#",
      tag: "Tag 2",
    },
    {
      link: "#",
      tag: "Tag 3",
    },
    {
      link: "#",
      tag: "Tag 4",
    },
  ]
  
  const eventbutton = [
    {
      link: "#",
      text: "All Events",
    },
  ]
  
  const featuredbutton = [
    {
      link: "#",
      text: "See all news and stories",
    },
  ]
  const { title,  excerpt, content, featuredImage, blocks, eventListing, } = page
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
  const RenderedMenu = (wpMenu?.menuItems?.nodes) 
      ? wpMenu.menuItems.nodes.map(item => {
        return (
            <PromoCardD title={item.label} url={item.path} isNav />
        )
      })
      : null

 

  return (
    <Layout>
      <PageSection
        heading={title}
        excerpt='A Wisconsin Alumni Association <a href="#">Bascom Chapter</a>'
        withSocial
        plainText
        pageTitle
      >
        Connect with us to celebrate UW pride, enjoy Badger spirit and build
        community with each other and the UW.
      </PageSection>
      <div style={{maxWidth: `1080px`, margin: `auto`, paddingBottom: `58px`}}>

        { featuredImage?.node && (
        <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroSize="slim"
          variant="white"
          redHeading={title}
          excerpt={excerpt}
        />
      )}
      </div>
      { RenderedMenu && (
        <PageSection popOut>
        <GridCardD>
         {RenderedMenu}
        </GridCardD>
      </PageSection>
      )}
      

      <PageSection heading="Upcoming Events" buttons={eventbutton} topBorder>
        <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >
          <ContentCard
            startDate="Apr. 29"
            endDate="May 3"
            title="The Kentucky Derby"
            category="Athletic Travel"
            venue="Churchill Downs"
            location="Louisville, KY"
            tags={taglist2}
            size="M"
          />

          <ContentCard
            startDate="Apr. 29"
            endDate="May 3"
            title="The Kentucky Derby"
            category="Athletic Travel"
            venue="Churchill Downs"
            location="Louisville, KY"
            tags={taglist2}
            size="M"
          />
        </SimpleSlider>
      </PageSection>

      <PageSection heading="Our Chapter Sponsors" topBorder>
        <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >
          <CardE
            img={page.asset29}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            captionStyleProps={{textAlign:`center`, fontWeight: `normal`, color: `${colors.captionBlack}`, marginTop: `${sizes.s32}`, fontSize: `${sizes.s18}`}}
          />
          <CardE
            img={page.asset30}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            captionStyleProps={{textAlign:`center`, fontWeight: `normal`, color: `${colors.captionBlack}`, marginTop: `${sizes.s32}`, fontSize: `${sizes.s18}`}}
          />
          <CardE
            img={page.square1}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            captionStyleProps={{textAlign:`center`, fontWeight: `normal`, color: `${colors.captionBlack}`, marginTop: `${sizes.s32}`, fontSize: `${sizes.s18}`}}
          />
          <CardE
            img={page.squareBucky}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            captionStyleProps={{textAlign:`center`, fontWeight: `normal`,color: `${colors.captionBlack}`, marginTop: `${sizes.s32}`, fontSize: `${sizes.s18}`}}
          />
        </SimpleSlider>
      </PageSection>
      <PageSection heading="WAA Stories" buttons={featuredbutton} topBorder>
        <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >
          <ContentCard
            title="All About That Bass"
            category="UW NOW"
            excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere"
            url="##"
            img={page.cardImage1}
            tags={taglist2}
            size="M"
          />

          <ContentCard
            title="Coachella Valley"
            category="UW NOW"
            excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere"
            url="##"
            img={page.cardImage7}
            tags={taglist2}
            size="M"
          />

          <ContentCard
            title="Coachella Valley"
            category="UW NOW"
            excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere"
            url="##"
            img={page.cardImage5}
            tags={taglist2}
            size="M"
          />
        </SimpleSlider>
      </PageSection>
    </Layout>
  )
}

export default WordPressGroupPage
