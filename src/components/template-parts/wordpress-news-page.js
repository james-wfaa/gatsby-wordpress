import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import FeaturedImage from "../content-blocks/FeaturedImage"
import CardSet from "../content-modules/CardSet"
function WordPressPage({ page }) {
  const { title, content, featuredImage, storyCategories } = page
  const { categories } = storyCategories

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
      <PageSection heading={title} pageTitle><div>News and Stories template</div>
      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
          <FeaturedImage featuredImage={featuredImage} />
      )}
      </PageSection>
        <WordPressContent content={content} />

        <>{cats}</>
      
    </Layout>
  )
}

export default WordPressPage
