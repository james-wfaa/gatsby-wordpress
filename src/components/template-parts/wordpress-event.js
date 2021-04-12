import React from "react"
import Layout from "../Layout"
import WordPressEventContentBlocks from "../content-blocks/WordPressEventContentBlocks"
import PageSection from "../page-sections/PageSection"
import CardHandler from "../content-modules/CardHandler"
import UpcomingEvents from "../../components/page-sections/UpcomingEvents"




import FeaturedImage from "../content-blocks/FeaturedImage"


function WordPressPage({ page }) {
  const {  featuredImage, title, products, id, slug} = page
  const noborder = (featuredImage !== null)
  //console.log('page part of event', page)
  //console.log('blocks part of event', blocks)

  // TODO: filter out the array of blocks to remove all the default Event ones and only show the content ones
  // TODO: then pass that filtered list of blocks in lieu of the content

  let relatedPostsToShow = []

  if(products && products.nodes){
      products.nodes.forEach((product) => {
      product.events.nodes.forEach((event) => {
          relatedPostsToShow.push(event) 
      })
      })
  }
 
  let uniqueRelatedPosts = []
  if (Array.isArray(relatedPostsToShow)) {
      relatedPostsToShow.forEach((event) => {
      if(!uniqueRelatedPosts.find(element => element.id === event.id) && event.id !== id){
          uniqueRelatedPosts.push(event)
      }
      })
  }


  const buttons = (uniqueRelatedPosts.length > 2) 
      ? [{
          link: `/posts/search/?category=${slug}`,
          text: 'SEE ALL NEWS AND STORIES'
      }]
      : null


  return (
    <Layout title={title} noborder={noborder}>
        {!!featuredImage?.node?.localFile?.childImageSharp && (
            <FeaturedImage featuredImage={featuredImage.node} event/>
        )}
        <WordPressEventContentBlocks {...page} />
        {uniqueRelatedPosts.length > 0 ? (
        <PageSection id="post-listing" heading="Related Events" topBorder buttons={buttons}><CardHandler items={uniqueRelatedPosts.slice(0,10)} size="M" sliderSize="S" type="event" /></PageSection>
        ):(
        <PageSection
          heading="Upcoming Events"
          buttons={[
            {
              link: "/event/all",
              text: "See All Upcoming Events",
            },
          ]}
          topBorder
          desktopOnly
        >
            <UpcomingEvents />
        </PageSection>
        )}
    </Layout>
  )
}

export default WordPressPage
