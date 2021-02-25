import React from "react"
import Layout from "../layout"
import styled from "styled-components"
import { breakpoints, colors } from '../css-variables'
import WordPressBasicContentBlocks from "../content-blocks/WordPressBasicContentBlocks"
import TitleSection from '../parts/WordPressTitleSection'
import SocialShareLinks from '../parts/SocialShareLinks'
import FeaturedImage from "../content-blocks/FeaturedImage"
import BreadCrumbs from "../page-sections/BreadCrumbs"
import PageSection from "../page-sections/PageSection"
import RecentPosts from "../page-sections/RecentPosts"
import CardHandler from "../content-modules/CardHandler"
import flamingleMasthead from "./../../svg/ask-flamingle-masthead.svg"
import flamingleCap from "./../../svg/flamingle-initial-cap.svg"


function BlogPost({ data }) {
  const { page } = data
  const { id, title, content, featuredImage, categories, products, author, date, excerpt, heroImage, link, slug } = page
  console.log('flamingle page!!', page)

  let relatedPostsToShow = []
  if(products && products.nodes){
    products.nodes.map((product) => {
      product.posts.nodes.map((post) => {
        relatedPostsToShow.push(post) 
      })
    })
  }

  let uniqueRelatedPosts = []
  relatedPostsToShow.forEach((post) => {
    if(!uniqueRelatedPosts.find(element => element.id === post.id) && post.id != id){
      uniqueRelatedPosts.push(post)
    }
  })

  const buttons = (uniqueRelatedPosts.length > 2) 
      ? [{
          link: `/posts/search/?category=${slug}`,
          text: 'SEE ALL NEWS AND STORIES'
      }]
      : null

  const product = (products?.nodes) ? products.nodes[0] : null
  
  let links = [
    { url: "/", name: "Home" },
    { url: "/news", name: "News & Stories" },
    { url: "/news", name: "Ask Flamingle HQ" },
    { url: link, name: title },
  ]
  console.log(excerpt, 'excerpt')

  let flamingleExcerpt = null;

  const StyledFlamingleWrapper = styled.div`
    
    .flamingleMasthead, .flamingleCapWrapper{
      width: 80%;
      max-width: 712px;
      margin: 40px auto 0 auto;
      display:block;
    }
    .flamingleCapWrapper{
      img{
        float: left;
        margin: 0 12px 12px 0;
      }
    }
    .headersection h1{
      color: ${colors.flaminglePink};
    }
    .headersection:after{
      background-color: ${colors.flaminglePink};
    }
    img{
      margin:0 auto;
    }
    .socialText{
      color: ${colors.flaminglePink};
    }
    .shareButtons{
      button{
        path{
          fill: ${colors.flaminglePink};
        }
      }
    }
    @media screen and ${breakpoints.tabletS} {
       
    }
`
  return (
    <Layout title={title}>
        <BreadCrumbs links={links} />
        <StyledFlamingleWrapper>
            <img className="flamingleMasthead" src={flamingleMasthead}></img>
            <TitleSection heading={excerpt} author={author.node.name} categories={categories} />
            <div className="flamingleCapWrapper"><img src={flamingleCap}></img></div>
            <WordPressBasicContentBlocks {...page} />
          <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link}/>
          {relatedPostsToShow.length > 0 ? (
            <PageSection id="post-listing" heading="Related News and Stories" topBorder buttons={buttons}><CardHandler items={uniqueRelatedPosts} size="M" type="news" /></PageSection>
          ):(
            <PageSection
              heading="Featured News and Stories"
              buttons={[
                {
                  link: "/news/all",
                  text: "See All News and Stories",
                },
              ]}
              topBorder
              desktopOnly
            >
                <RecentPosts />
            </PageSection>
          )}
        </StyledFlamingleWrapper>
    </Layout>
  )
}

export default BlogPost
