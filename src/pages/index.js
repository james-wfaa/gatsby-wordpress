import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageSection from "../components/page-sections/PageSection"
import AllEvents from "../components/collections/AllEvents"
import EventCardD from "../components/content-blocks/EventCardD"
import PromoCardD from "../components/content-blocks/PromoCardD"
import GridCardD from "../components/content-modules/GridCardD"
import StoryContentCard from "../components/content-blocks/StoryContentCard"
import CardE from "../components/content-blocks/CardE"
import HeroIntroSection from "../components/page-sections/HeroIntroSection"
import SimpleSlider from "../components/content-modules/SimpleSlider"

const eventbutton = [
  {
    link: "/events/all",
    text: "See All Events",
  },
]

const featuredbutton = [
  {
    link: "/news/all",
    text: "See all news & stories",
  },
]


const heroOverlayHeading = `<span>Badger</span> ON`

const HomePage = ({ data }) => {
  if (typeof window !== "undefined" && window.location.includes('chapters.uwalumni.com')) {
    const fixedUrl = window.location.replace('chapters.uwalumni.com','www.uwalumni.com');
  }
  const { featuredPosts, tileAds } = data
  const adList = tileAds?.nodes?.[0]?.siteOptions?.TileAds?.adList?.[0]
    ? tileAds.nodes[0].siteOptions.TileAds.adList
    : null
  const [ads] = useState(adList)
  const [currentAd, setCurrentAd] = useState(null)


  const randomAdGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min) - 1
  }

  useEffect(() => {
    let filteredAds = (ads) 
      ? ads.filter(ad => {
          return ad.adActive
        })
      : null
    let adSpot = (filteredAds) 
      ? randomAdGenerator(1, (filteredAds.length))
      : null
    if (filteredAds.length > 0 && filteredAds[adSpot]) {
      setCurrentAd(filteredAds[adSpot])
    } 
  }, [ads])
  const allevents = AllEvents()
  const { nodes: eventEdges } = allevents

  eventEdges.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1)
  const cardGridEvents = eventEdges.slice(0,9)

  let eventCards = cardGridEvents.map((event) => {
    return (
      <EventCardD key={event.link} {...event} url={event.link} />
    )
  })

  const eventCards1 = eventCards.slice(0,5)
  const eventCards2 = eventCards.slice(5,5+eventCards.length)

  // split eventCards into 2 groups

  

  let featuredPostCards = featuredPosts.nodes.map((post) => {
    const img = post?.featuredImage?.node?.localFile ? post.featuredImage.node?.localFile : null
    const products = post?.products?.nodes
      ? post.products.nodes
      : null
    const categories = post?.categories?.nodes
      ? post.categories.nodes
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
    <Layout title="Wisconsin Alumni Association &ndash; Where Badgers Belong" url="/" plaintitle noborder>
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
        <GridCardD>
          {eventCards1}
          {currentAd && (
              <PromoCardD title={currentAd.adText} url={currentAd.adLink} />
            )}
          {eventCards2}</GridCardD>
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
    gridBg: file(relativePath: { eq: "home-bucky-faded.jpg" }) {
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
    tileAds: allWp {
      nodes {
        siteOptions {
          TileAds {
            adList {
              adText
              adLink
              adActive
            }
          }
        }
      }
    }
  }
`
