import React from "react"
import Layout from "../layout"
import styled from "styled-components"
import { breakpoints, colors } from '../css-variables'
import WordPressBasicContentBlocks from "../content-blocks/WordPressBasicContentBlocks"
import TitleSection from '../parts/WordPressTitleSection'
import SocialShareLinks from '../parts/SocialShareLinks'
import BreadCrumbs from "../page-sections/BreadCrumbs"
import PageSection from "../page-sections/PageSection"
import flamingleMasthead from "./../../svg/ask-flamingle-masthead.svg"
import flamingleIcon from "./../../svg/flamingle-initial-cap.svg"
import Button from "./../parts/Button"
import PromoCardD from "./../../components/content-blocks/PromoCardD"
import GridCardD from "./../../components/content-modules/GridCardD"

function BlogPost({ data }) {
  const { page } = data
  const { id, title, categories, products, author, excerpt, link, slug, askFlamingle } = page

  let relatedPostsToShow = []
  if(products && products.nodes){
    products.nodes.map((product) => {
      product.posts.nodes.map((post) => {
        if(post.askFlamingle?.abeQuestioner !== null){
          relatedPostsToShow.push(post)
        } 
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
          //link: `/posts/search/?category=${slug}`,
          link:'/news/flamingle',
          text: 'See All Questions'
      }]
      : null;
  
  let links = [
    { url: "/", name: "Home" },
    { url: "/news", name: "News & Stories" },
    { url: "/news/flamingle", name: "Ask Flamingle HQ" },
    { url: link, name: title },
  ]

  //remove pesky paragraph tags on excerpt
  const excerptLength = excerpt.length
  const flamingleExcerpt = excerpt.slice(3, excerptLength - 5);

  const createRelatedCards = () => {
     if(uniqueRelatedPosts.length > 9){
       uniqueRelatedPosts.slice(0,8)
      }
      
    const thePosts = uniqueRelatedPosts.map(post => {
      const excerptLength = post.excerpt.length
      const newExcerpt = post.excerpt.slice(3, excerptLength - 5);
      const url = `/news${post.url}`
      return <PromoCardD title={newExcerpt} url={url} flamingle/>
    })
    return thePosts
  }

  const StyledFlamingleWrapper = styled.div`
    .flamingleMasthead, .flamingleCapWrapper, .flamingleLinks{
      width: 80%;
      max-width: 712px;
      margin: 40px auto 0 auto;
      display:block;
    }
    .flamingleMasthead{
      width: 90%;
      @media screen and ${breakpoints.tabletS} {
        width: 80%;
      }
    }
    .flamingleMasthead + div{
      padding-top: 48px;
      @media screen and ${breakpoints.tabletS} {
        padding-top: 58px;
      }
      
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
      color: ${colors.flamingleSocialGrey};
    }
    .socialText{
      text-transform: uppercase; 
    }
    .shareButtons{
      button{
        path{
          fill: ${colors.flamingleSocialGrey};
        }
      }
      button:hover path{
        fill: ${colors.flaminglePink};
      }
    }
    .flamingleLinks{
      margin-bottom: 88px;
      div{
        width: 100%;
        display: inline-block;
        text-align: center;
        @media screen and ${breakpoints.tabletS} {
          width: 50%;
        }
        p{
          color: ${colors.flaminglePink};
          font-weight: bold;
          margin-bottom: 40px;
        }
        a{
          background-color:${colors.flaminglePink};
        }
        &.newsletterContainer{
          a{
            color:${colors.flaminglePink};
            border: 1px solid ${colors.flaminglePink};
            background-color: transparent;
            :hover{
              color:${colors.titleWhite};
              background-color:${colors.flaminglePink};
            }
            :active{
              cursor:default;
            }
          }
          .italicize{
            font-style: italic;
          }
          margin-top:58px;
          @media screen and ${breakpoints.tabletS} {
            margin-top:0;
          }
        }
      }
      hr{
        height: 8px;
        background-color: ${colors.sectionBorder};
        margin-bottom: 32px;
      }
    }
    #flamingle-post-listing{
      h2{
        color:${colors.flaminglePink};
      }
      *:after{
        background-color:${colors.flaminglePink};
      }
      .content + div{
        a{
          background-color: ${colors.bgWhite};
          color:${colors.flaminglePink};
          border: 1px solid ${colors.flaminglePink};
        }
        a:hover{
          background-color: ${colors.flaminglePink};
          color: ${colors.titleWhite};
          border: 1px solid ${colors.flaminglePink};
        }
      }
    } 
`
  return (
    <Layout title={title}>
        <BreadCrumbs links={links} />
        <StyledFlamingleWrapper>
            <img className="flamingleMasthead" src={flamingleMasthead}></img>
            <TitleSection heading={flamingleExcerpt} author={askFlamingle.abeQuestioner} categories={categories} />
            <div className="flamingleCapWrapper"><img src={flamingleIcon}></img></div>
            <WordPressBasicContentBlocks {...page} />
          <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link}/>
          <div className="flamingleLinks">
            <hr></hr>
            <div>
              <p>Need Answers? Ask Flamingle HQ</p>
              <Button link="mailto:flamingle@uwalumni.com" text="Ask A Question" external />
            </div>
            <div className="newsletterContainer">
              <p>View <span className="italicize">The Flamingle</span> Newsletter</p> 
              <Button link="/news/flamingle" text="See All Posts" external />
            </div> 
          </div>
          <PageSection id="flamingle-post-listing" heading="More From Ask Flamingle HQ" topBorder buttons={buttons}>
            <GridCardD>{createRelatedCards()}</GridCardD>
          </PageSection> 
        </StyledFlamingleWrapper>
    </Layout>
  )
}

export default BlogPost