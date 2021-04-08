import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageSection from "../components/page-sections/PageSection"
import AllEvents from "../components/collections/AllEvents"
import EventCardD from "../components/content-blocks/EventCardD"
import GridCardD from "../components/content-modules/GridCardD"
import StoryContentCard from "../components/content-blocks/StoryContentCard"
import CardE from "../components/content-blocks/CardE"
import HeroIntroSection from "../components/page-sections/HeroIntroSection"
import SimpleSlider from "../components/content-modules/SimpleSlider"

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
    link: "/events",
    text: "All Events",
  },
]

const featuredbutton = [
  {
    link: "/news",
    text: "See all news and stories",
  },
]


const heroOverlayHeading = `<span>Badger</span> ON`

const HomePage = ({ data }) => {
  const { featuredPosts } = data
  const allevents = AllEvents()
  const { nodes: eventEdges } = allevents

  const cardGridEvents = eventEdges.slice(0,9)
  let eventCards = cardGridEvents.map((event) => {
    return (
      <EventCardD key={event.link} {...event} url={event.link} />
    )
  })

  

  let featuredPostCards = featuredPosts.nodes.map((post) => {
    const img = post?.featuredImage?.node?.localFile ? post.featuredImage.node?.localFile : null
    const products = post?.products?.nodes
      ? post.products.nodes.map((prod) => {
        return {
          link: prod.url,
          tag: prod.name
        }
      }) 
      : null
    const categories = post?.categories?.nodes
      ? post.categories.nodes.map((cat) => {
      return {
        link: cat.url,
        tag: cat.name
      }
      
    })
    : null
    return (<StoryContentCard
      key={post.url}
      img={img}
      tags={products.concat(categories)}
      size="L"
      {...post}
    />)
    
  })
  return (
    <Layout noborder>
      <HeroIntroSection
          heroImage={data.homeBg}
          videoURL="https://player.vimeo.com/external/523946487.hd.mp4?s=65ae00f23e75bb574174a88ea656c8079cade0fa&profile_id=175"
          heroSize="jumbo"
          redHeading="Continue Your Wisconsin Experience"
          excerpt="<p>The Wisconsin Alumni Association is here for you to carry on as a proud Badger. It’s a community built on meeting the needs of today’s alumni. Whether you want to keep learning, celebrating traditions, or connecting with the UW, this is the place for you to Badger On.
        </p>"
          mobileHeroImage={data.mobileHomeBg}
          heroHeading={heroOverlayHeading}
        />

      <PageSection>
        <SimpleSlider
          className="center"
          slidesToShow="1"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >
          <CardE
            img={data.img1}
            caption="Strengthen UW Connections"
            enhancedHomepageCaption
            pillar
          />
          <CardE
            img={data.img2}
            caption="Stay in the Know"
            enhancedHomepageCaption
            pillar
          />
          <CardE
            img={data.img3}
            caption="Share Your UW Pride"
            enhancedHomepageCaption
            pillar
          />
          <CardE
            img={data.img4}
            caption="Continue Your Pursuit of Knowledge"
            enhancedHomepageCaption
            pillar
          />
           <CardE
            img={data.img5}
            caption="Boost Your Badger Spirit"
            enhancedHomepageCaption
            pillar
          />
          <CardE
            img={data.img6}
            caption="Build Your Badger Network"
            enhancedHomepageCaption
            pillar
          />
          <CardE
            img={data.img7}
            caption="Satisfy Your Wanderlust"
            enhancedHomepageCaption
            pillar
          />
          <CardE
            img={data.img8}
            caption="Make a Difference"
            enhancedHomepageCaption
            pillar
          />
        </SimpleSlider>
      </PageSection>
      <PageSection heading="Featured Stories" buttons={featuredbutton} alt>
        <SimpleSlider
          className="center"
          dots
          centerMode
          variableWidth
          centerPadding="100px"
        >{featuredPostCards}
        

        </SimpleSlider>
      </PageSection>

      <PageSection
        heading="Events at a Glance"
        buttons={eventbutton}
        bgImage={data.gridBg}
      >
        <GridCardD>{eventCards}</GridCardD>
      </PageSection>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    homeBg: file(relativePath: { eq: "pier-bg@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    mobileHomeBg: file(relativePath: { eq: "home_mobileHeroImg@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1312, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    eventsBg: file(relativePath: { eq: "badger-events-hero@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    cardImage1: file(relativePath: { eq: "Feb_Richard_Davis_Web_01@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage2: file(relativePath: { eq: "12_DutchWaterways_header@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage3: file(relativePath: { eq: "17LEARN_JakeWood_manis_29.png" }) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage4: file(relativePath: { eq: "lead_720_405@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    cardImage5: file(relativePath: { eq: "lead_720_405-2-1-a@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    cardImage6: file(relativePath: { eq: "fball_ILL_band18_0556-3@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    cardImage7: file(
      relativePath: {
        eq: "19AP_DowntownMadisonInc_NewFacesNPlaces_Manis_13@2x.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 712, quality: 100) {
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
    img1: file(relativePath: { eq: "1_benefit_connect_d_344x344_2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 344) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "2_benefit_inform_d_344x344_2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 344) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "3_benefit_pride_d_344x344_2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 344) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "4_benefit_enrich_d_344x344_2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 344) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "5_benefit_spirit_d_344x344_2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 344) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "6_benefit_prof_adv_d_344x344_2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 344) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "7_benefit_travel_d_344x344_2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 344) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "8_benefit_support_d_344x344_2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 344) {
          ...GatsbyImageSharpFluid
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
    featuredPosts: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "featured-news"}}}}}, limit: 6, sort: {order: DESC, fields: date}) {
      nodes {
        title
        excerpt
        featuredImage {
          node {
            localFile {
              ...HeroImage
            }
          }
        }
        url: uri
        products {
          nodes {
            slug
            name
          }
        }
        categories {
          nodes {
            name
            slug
            uri
          }
        }
        acfAlternatePostType{
          alternateposttype
        }
        videoFormat {
          vimeoId
        }
      }
    }
  }
`
