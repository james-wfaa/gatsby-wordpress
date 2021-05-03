import React from "react"
import Layout from "../layout"
import WpStoryContentBlocks from "../content-blocks/WpStoryContentBlocks"
import TitleSection from '../parts/WordPressTitleSection'
import SocialShareLinks from '../parts/SocialShareLinks'
import FeaturedImage from "../content-blocks/FeaturedImage"
import BreadCrumbs from "../../components/page-sections/BreadCrumbs"
import PageSection from "../page-sections/PageSection"
import RecentPosts from "../../components/page-sections/RecentPosts"
import CardHandler from "../content-modules/CardHandler"
import EmbedVideoFormatHandler from "../content-blocks/EmbedVideoFormatHandler"

function BlogPost({ data }) {
  const { page } = data
  const { id, title, featuredImage, categories, products, author, postExternalAuthors, month, dayYear, excerpt, heroImage, link, slug } = page
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const date = `${months[parseInt(month)-1]} ${dayYear}`
  const product = (products?.nodes && Array.isArray(products.nodes)) ? products.nodes[0] : null
  const displayAuthor = (postExternalAuthors?.nodes && postExternalAuthors.nodes[0]?.name)
    ? postExternalAuthors.nodes[0].name
    : author.node.name

  let heroSize = heroImage.heroImage && heroImage.heroImage.mediaDetails.width ? heroImage.heroImage.mediaDetails.width : null
  let featSize = featuredImage?.node?.mediaDetails.width ? featuredImage?.node?.mediaDetails.width : null
  let size = featSize > heroSize ? featSize : heroSize

  const isVideo = page?.videoFormat?.vimeoId

  const isAlt = (
    page?.acfAlternatePostType?.alternateposttype === 'poll' || 
    page?.acfAlternatePostType?.alternateposttype === 'quiz' || 
    page?.acfAlternatePostType?.alternateposttype === 'scrapbook' || 
    page?.acfAlternatePostType?.alternateposttype === 'podcast' 
  ) 

  



  /* getting unique related posts from product nodes - replace this with the static query to boost build time */
  //let pStories = ProductStories(products)
  //console.log(pStories)
  

  let relatedPostsToShow = []
  if(products?.nodes){
    products.nodes.forEach((product) => {
      product.posts.nodes.forEach((post) => {
        relatedPostsToShow.push(post) 
      })
    })
  }

  let uniqueRelatedPosts = []
  if (Array.isArray(relatedPostsToShow)) {
    relatedPostsToShow.forEach((post) => {
      if(!uniqueRelatedPosts.find(element => element.id === post.id) && post.id !== id){
        uniqueRelatedPosts.push(post)
      }
    })
  }
  const buttons = (uniqueRelatedPosts.length > 2) 
      ? [{
          link: `/news/all/?product=${slug}`,
          text: 'SEE ALL NEWS AND STORIES'
      }]
      : null
  
  let image = null
  if ((size >= 1080) && featuredImage?.node?.localFile?.childImageSharp?.fluid){
    image = featuredImage?.node
  } else if ((718 <= size && size < 1080) && heroImage?.heroImage?.localFile?.childImageSharp){
    image = heroImage.heroImage
  } else if ((718 <= size && size < 1080) && featuredImage?.node?.localFile?.childImageSharp){
    image = featuredImage.node
  } else if((size < 718) && featuredImage){
    image = featuredImage.node
  }
  const postHeader = (isVideo || isAlt) 
  ? (<TitleSection heading={title} author={displayAuthor} product={product} categories={categories} date={date} size={size} />)
  : (<TitleSection heading={title} author={displayAuthor} product={product} categories={categories} date={date} excerpt={excerpt} smImg={(718 > size) ? image : null} size={size} />)

  let productParentPage = null
  
  if(product?.pages?.nodes[0]){
    product.pages.nodes.forEach(child => {
      if(child.template.templateName === "Product Template"){
        productParentPage = child
      }
    })
  }
  
  let links = (productParentPage?.uri) 
    ? [
    { url: "/", name: "Home" },
    { url: "/news", name: "News & Stories" },
    { url: productParentPage.uri, name: product.name },
    { url: link, name: title },
    ]
    : [
      { url: "/", name: "Home" },
      { url: "/news", name: "News & Stories" },
      { url: link, name: title },
    ]
  return (
    <Layout title={title} img={image}>
        <BreadCrumbs links={links} />
        {postHeader}
        {image && size >= 718 && !isVideo && !isAlt && (
          <FeaturedImage featuredImage={image} size={size}/>
        )}
        {isVideo && (
          <EmbedVideoFormatHandler source={isVideo} />
        )}
        <WpStoryContentBlocks {...page} />
      <SocialShareLinks text="Share This Story" title={title} excerpt={excerpt} url={`/news${link}`}/>
      {uniqueRelatedPosts.length > 0 ? (
        <PageSection id="post-listing" heading="Related News and Stories" topBorder buttons={buttons}><CardHandler items={uniqueRelatedPosts.slice(0,10)} size="M" sliderSize="S" type="news" /></PageSection>
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
        >
            <RecentPosts />
        </PageSection>
      )}
    </Layout>
  )
}

export default BlogPost
