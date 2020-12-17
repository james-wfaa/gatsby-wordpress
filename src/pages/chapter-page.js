import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageSection from "../components/page-sections/PageSection"
import GridCardD from "../components/content-modules/GridCardD"
import ContentCard from "../components/content-blocks/ContentCard"
import CardE from "../components/content-blocks/CardE"
import PromoCardD from "../components/content-blocks/PromoCardD"
import HeroIntroSection from "../components/page-sections/HeroIntroSection"
import SimpleSlider from "../components/content-modules/SimpleSlider"
import { sizes, colors } from "../components/css-variables"

const taglist2 = [
  {
    link: "#",
    tag: "Tag 1",
  },
  {
    link: "#",
    tag: "Tag 2",
  },
  {
    link: "#",
    tag: "Tag 3",
  },
  {
    link: "#",
    tag: "Tag 4",
  },
]

const eventbutton = [
  {
    link: "#",
    text: "All Events",
  },
]

const featuredbutton = [
  {
    link: "#",
    text: "See all news and stories",
  },
]

export default ({ data }) => {

  return (
    <Layout>
      <PageSection
        heading="Fox Valley Chapter"
        excerpt='A Wisconsin Alumni Association <a href="#">Bascom Chapter</a>'
        withSocial
        plainText
        pageTitle
      >
        Connect with us to celebrate UW pride, enjoy Badger spirit and build
        community with each other and the UW.
      </PageSection>
      <div style={{maxWidth: `1080px`, margin: `auto`, paddingBottom: `58px`}}>

        <HeroIntroSection
          heroImage={data.homeBg}
          heroSize="slim"
          variant="white"
          excerpt="<p>Since 2020, we have a proud tradition of leadership, support, and advocacy for the UW. We advance the UW’s mission through an active scholarship program, social, and learning opportunities for area alumni, students, and friends.
    </p>"
        />
      </div>
      <PageSection popOut>
        <GridCardD>
          <PromoCardD title="Shop The UW Alumni Store" url="####" isNav />
          <PromoCardD title="Shop The UW Alumni Store" url="####" isNav />
          <PromoCardD title="Shop The UW Alumni Store" url="####" isNav />
          <PromoCardD title="Shop The UW Alumni Store" url="####" isNav />
          <PromoCardD title="Shop The UW Alumni Store" url="####" isNav />
          <PromoCardD title="Shop The UW Alumni Store" url="####" isNav />
          <PromoCardD title="Shop The UW Alumni Store" url="####" isNav />
          <PromoCardD title="Shop The UW Alumni Store" url="####" isNav />
          <PromoCardD title="Shop The UW Alumni Store" url="####" isNav />
        </GridCardD>
      </PageSection>

      <PageSection heading="Upcoming Events" buttons={eventbutton} topBorder>
        <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >
          <ContentCard
            startDate="Apr. 29"
            endDate="May 3"
            title="The Kentucky Derby"
            category="Athletic Travel"
            venue="Churchill Downs"
            location="Louisville, KY"
            tags={taglist2}
            size="M"
          />

          <ContentCard
            startDate="Apr. 29"
            endDate="May 3"
            title="The Kentucky Derby"
            category="Athletic Travel"
            venue="Churchill Downs"
            location="Louisville, KY"
            tags={taglist2}
            size="M"
          />
        </SimpleSlider>
      </PageSection>

      <PageSection heading="Our Chapter Sponsors" topBorder>
        <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >
          <CardE
            img={data.asset29}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            fontSize
            fontColor
            marginTop
            textAlign
            fontWeight
          />
          <CardE
            img={data.asset30}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            fontSize
            fontColor
            marginTop
            textAlign
            fontWeight
          />
          <CardE
            img={data.square1}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            fontSize
            fontColor
            marginTop
            textAlign
            fontWeight
          />
          <CardE
            img={data.squareBucky}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut."
            fontSize
            fontColor
            marginTop
            textAlign
            fontWeight
          />
        </SimpleSlider>
      </PageSection>
      <PageSection heading="WAA Stories" buttons={featuredbutton} topBorder>
        <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >
          <ContentCard
            title="All About That Bass"
            category="UW NOW"
            excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere"
            url="##"
            img={data.cardImage1}
            tags={taglist2}
            size="M"
          />

          <ContentCard
            title="Coachella Valley"
            category="UW NOW"
            excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere"
            url="##"
            img={data.cardImage7}
            tags={taglist2}
            size="M"
          />

          <ContentCard
            title="Coachella Valley"
            category="UW NOW"
            excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere"
            url="##"
            img={data.cardImage5}
            tags={taglist2}
            size="M"
          />
        </SimpleSlider>
      </PageSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    homeBg: file(relativePath: { eq: "iStock-916152336.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }

    gridBg: file(relativePath: { eq: "well-read-bucky-bg@2x.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    asset29: file(relativePath: { eq: "asset-29@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    asset30: file(relativePath: { eq: "asset-30@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    square1: file(relativePath: { eq: "square1@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    squareBucky: file(relativePath: { eq: "squareBucky@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
