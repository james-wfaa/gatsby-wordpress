import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressContent"
import AccordianSearchAlgolia from "../../components/parts/AlgoliaSearch/AccordianSearchAlgolia-temp"
import FeaturedImage from "../content-blocks/FeaturedImage"
import CardSet from "../content-modules/CardSet"
import ContentCardD from "../content-blocks/ContentCardD"
import GridCardD from "../content-modules/GridCardD"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"

function WordPressPage({ page, posts }) {
  const { title, excerpt, content, featuredImage, storyCategories, gridDetails } = page

  const { storycategoriesinner: categories } = storyCategories
  const { backgroundImage } = gridDetails
  console.log(backgroundImage)

  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/news/all",
      text: "See More",
    },
  ]

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
    <Layout noborder>
      <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroHeading="<span>Badger</span> ON"
          redHeading={title}
          excerpt={excerpt}
      />
      <AccordianSearchAlgolia index="Posts" />
      <WordPressContent content={content} />
      <>{cats}</>
      <PageSection heading="Most Recent" bgImage={gridBgImage} buttons={moreButton}>
        <GridCardD>{postCards}</GridCardD>
      </PageSection>
    </Layout>
  )
}

export default WordPressPage
