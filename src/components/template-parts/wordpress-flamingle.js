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
import flamingleIcon from "./../../svg/flamingle-initial-cap.svg"
import Button from "./../parts/Button"

function BlogPost({ data }) {
  const { page } = data
  const { id, title, categories, products, author, excerpt, link, slug } = page
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
          text: 'See All Questions'
      }]
      : null;
  
  let links = [
    { url: "/", name: "Home" },
    { url: "/news", name: "News & Stories" },
    { url: "/news", name: "Ask Flamingle HQ" },
    { url: link, name: title },
  ]

  //remove pesky paragraph tags
  const excerptLength = excerpt.length
  const flamingleExcerpt = excerpt.slice(3, excerptLength - 5);

  const StyledFlamingleWrapper = styled.div`
    .flamingleMasthead, .flamingleCapWrapper, .flamingleLinks{
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
    
`
  return (
    <Layout title={title}>
        <BreadCrumbs links={links} />
        <StyledFlamingleWrapper>
            <img className="flamingleMasthead" src={flamingleMasthead}></img>
            <TitleSection heading={flamingleExcerpt} author={author.node.name} categories={categories} />
            <div className="flamingleCapWrapper"><img src={flamingleIcon}></img></div>
            <WordPressBasicContentBlocks {...page} />
          <SocialShareLinks className="SocailShare" text="Share This Story" title={title} excerpt={excerpt} url={link}/>
          <div className="flamingleLinks">
            <hr></hr>
            <div>
              <p>Need Answers? Ask Flamingle HQ</p>
              <Button link="/" text="Ask A Question" external />
            </div>
            <div className="newsletterContainer">
              <p>View <span className="italicize">The Flamingle</span> Newsletter</p> 
              <Button link="/" text="See All Posts" external />
            </div>
          </div>
          {relatedPostsToShow.length > 0 ? (
            <PageSection id="post-listing" heading="More From Ask Flamingle HQ" topBorder buttons={buttons}><CardHandler items={uniqueRelatedPosts} size="M" type="news" /></PageSection>
          ):(
            <PageSection
              heading="More From Ask Flamingle HQ"
              buttons={[
                {
                  link: "/news/all",
                  text: "See All Questions",
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
