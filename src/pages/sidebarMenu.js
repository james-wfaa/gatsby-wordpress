import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { breakpoints } from "../components/css-variables"
import styled from "styled-components"
import Layout from "../components/layout"
import Menu from '../components/template-parts/SidebarMenu'

const SidebarMenu = () => {
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
    @media screen and ${breakpoints.tabletS} {
      grid-template-columns: 350px 1fr;
      margin: 88px auto 0;
    }
  `

  return (
    <Layout>
      <PageWrapper>
        <Menu name={wpMenu.name} menuItems={wpMenu.menuItems.nodes} />
        <div>
         <h3>Filler text here</h3>
         <p>Cupidatat farm-to-table distillery, iPhone crucifix umami voluptate.
           Artisan church-key put a bird on it eu fam. La croix in ut subway tile bespoke
           dolore keytar blue bottle exercitation ethical cray bushwick do ad.
           Quinoa banh mi retro iceland, nostrud yr quis poutine cray artisan literally
           blue bottle mustache veniam kinfolk. Synth health goth humblebrag flexitarian hashtag,
           nulla pop-up echo park lo-fi butcher chambray cornhole keytar. Swag consectetur semiotics pug master c
           leanse farm-to-table mustache fanny pack artisan. Banh mi tofu bicycle rights scenester coloring book in beard.</p>
          <h3>Another Filler Text</h3>
          <p>
          Pop-up irure nulla, echo park stumptown tofu crucifix yr XOXO gluten-free e
          x duis hella ut cornhole. Fixie consectetur pariatur, air plant
          lyft distillery pabst truffaut banjo hell of viral duis raclette quis.
          Enamel pin godard subway tile waistcoat health goth trust fund. VHS laborum viral
          polaroid fanny pack nulla id. Flexitarian literally yr kogi lyft sint viral health
          goth before meh voluptate. Tofu beard freegan gentrify magna
          meditation. Irure fashion axe pork belly narwhal 90's reprehenderit nulla pinterest
          adipisicing messenger bag DIY selfies.
          </p>
         <h3>Filler text here</h3>
         <p>Cupidatat farm-to-table distillery, iPhone crucifix umami voluptate.
           Artisan church-key put a bird on it eu fam. La croix in ut subway tile bespoke
           dolore keytar blue bottle exercitation ethical cray bushwick do ad.
           Quinoa banh mi retro iceland, nostrud yr quis poutine cray artisan literally
           blue bottle mustache veniam kinfolk. Synth health goth humblebrag flexitarian hashtag,
           nulla pop-up echo park lo-fi butcher chambray cornhole keytar. Swag consectetur semiotics pug master c
           leanse farm-to-table mustache fanny pack artisan. Banh mi tofu bicycle rights scenester coloring book in beard.</p>
          <h3>Another Filler Text</h3>
          <p>
          Pop-up irure nulla, echo park stumptown tofu crucifix yr XOXO gluten-free e
          x duis hella ut cornhole. Fixie consectetur pariatur, air plant
          lyft distillery pabst truffaut banjo hell of viral duis raclette quis.
          Enamel pin godard subway tile waistcoat health goth trust fund. VHS laborum viral
          polaroid fanny pack nulla id. Flexitarian literally yr kogi lyft sint viral health
          goth before meh voluptate. Tofu beard freegan gentrify magna
          meditation. Irure fashion axe pork belly narwhal 90's reprehenderit nulla pinterest
          adipisicing messenger bag DIY selfies.
          </p>
         <h3>Filler text here</h3>
         <p>Cupidatat farm-to-table distillery, iPhone crucifix umami voluptate.
           Artisan church-key put a bird on it eu fam. La croix in ut subway tile bespoke
           dolore keytar blue bottle exercitation ethical cray bushwick do ad.
           Quinoa banh mi retro iceland, nostrud yr quis poutine cray artisan literally
           blue bottle mustache veniam kinfolk. Synth health goth humblebrag flexitarian hashtag,
           nulla pop-up echo park lo-fi butcher chambray cornhole keytar. Swag consectetur semiotics pug master c
           leanse farm-to-table mustache fanny pack artisan. Banh mi tofu bicycle rights scenester coloring book in beard.</p>
          <h3>Another Filler Text</h3>
          <p>
          Pop-up irure nulla, echo park stumptown tofu crucifix yr XOXO gluten-free e
          x duis hella ut cornhole. Fixie consectetur pariatur, air plant
          lyft distillery pabst truffaut banjo hell of viral duis raclette quis.
          Enamel pin godard subway tile waistcoat health goth trust fund. VHS laborum viral
          polaroid fanny pack nulla id. Flexitarian literally yr kogi lyft sint viral health
          goth before meh voluptate. Tofu beard freegan gentrify magna
          meditation. Irure fashion axe pork belly narwhal 90's reprehenderit nulla pinterest
          adipisicing messenger bag DIY selfies.
          </p>
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default SidebarMenu
