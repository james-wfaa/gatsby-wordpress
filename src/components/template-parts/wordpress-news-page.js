import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"
import CardSet from "../content-modules/CardSet"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"

function WordPressPage({ page }) {
  const { title, content, featuredImage, storyCategories, excerpt } = page
  console.log(storyCategories) 
  const { storycategoriesinner: categories } = storyCategories

  console.log(categories)

  const cats = categories.map((item) => {
    const { category, numberToShow } = item
    console.log(category)
    if (category && category.name) {
      return (
      
        <PageSection heading={category.name}>
          <CardSet items={category.posts.nodes} num={numberToShow} />
        </PageSection>
      )
    }
    return (<div/>)
    
  }
  )



  return (
    <Layout>
      <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroHeading="<span>Badger</span> ON"
          excerpt={excerpt}
      />
      <WordPressContent content={content} />

      <>{cats}</>
      
    </Layout>
  )
}

export default WordPressPage
