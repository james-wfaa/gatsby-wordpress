import React from "react"
import Layout from "../layout"
import PageSection from "../page-sections/PageSection"
import WordPressContent from "../content-blocks/WordPressBasicContentBlocks"
import AccordianSearchAlgolia from "../../components/parts/AlgoliaSearch/AccordianSearchAlgolia-temp"
import CardSet from "../content-modules/CardSet"
import StoryCardD from "../content-blocks/StoryCardD"
import GridCardD from "../content-modules/GridCardD"
import HeroIntroSection from "../../components/page-sections/HeroIntroSection"

function WordPressPage({ page, posts }) {
  const { title, excerpt, content, featuredImage, storyCategories, gridDetails } = page

  const { storycategoriesinner: categories } = storyCategories
  const { backgroundImage } = gridDetails


  const gridBgImage = (backgroundImage && backgroundImage.localFile) ? backgroundImage.localFile : null
  const moreButton = [
    {
      link: "/news/all",
      text: "See More",
    },
  ]



  const cats = categories.map((item) => {
    const { category, numberToShow } = item

    if (category && category.name) {
      return (

        <PageSection heading={category.name} stagger>
          <CardSet items={category.posts.nodes} num={numberToShow} type="news"/>
        </PageSection>
      )
    }
    return (<div/>)

  }
  )

  const cardGridPosts = posts.nodes.slice(0,9)
  let postCards = cardGridPosts.map((post) => {

    return (
      <StoryCardD {...post} />
    )
  })




  return (
    <Layout title={title} noborder img={featuredImage?.node}>
      { featuredImage && featuredImage.node && (
      <HeroIntroSection
          heroImage={featuredImage.node.localFile}
          heroHeading="<span>Badger</span> ON"
          redHeading={title}
          excerpt={excerpt}
      />)}
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
