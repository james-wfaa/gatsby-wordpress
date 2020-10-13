import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"
import CardSet from "../content-modules/CardSet"
import ContentCardD from "../content-blocks/ContentCardD"

import GridCardD from "../content-modules/GridCardD"

function WordPressPage({ page, posts }) {
  const { title, content, featuredImage, storyCategories } = page
  console.log(storyCategories) 
  console.log(posts.nodes)
  const { storycategoriesinner: categories } = storyCategories

  console.log(categories)

  const cats = categories.map((item) => {
    const { category, numberToShow } = item
    console.log(category)
    if (category && category.name) {
      return (
      
        <PageSection heading={category.name} stagger>
          <CardSet items={category.posts.nodes} num={numberToShow} />
        </PageSection>
      )
    }
    return (<div/>)
    
  }
  )

  const cardGridPosts = posts.nodes.slice(0,9)
  let postCards = cardGridPosts.map((post) => {
    console.log(post)
    return (
      <ContentCardD {...post} />
    )
  })
  console.log(postCards)



  return (
    <Layout>
      <PageSection heading={title} pageTitle><div>News and Stories template</div>
      {!!featuredImage?.node?.localFile?.childImageSharp && (
          <FeaturedImage featuredImage={featuredImage} />
      )}
      </PageSection>
        <WordPressContent content={content} />

        <>{cats}</>
        <PageSection heading="Most Recent">
        <GridCardD>{postCards}</GridCardD>
      </PageSection>
      
    </Layout>
  )
}

export default WordPressPage
