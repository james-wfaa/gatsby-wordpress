import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroIntroSection from '../components/page-sections/HeroIntroSection'


import MobileHr from '../components/parts/MobileHr'


export default ({ data }) => {

    return (
      <Layout>
        {/* <MobileHr />
        <p>
          Here is the hero intro section for the home page. It features a taller
          image than other hero intro sections.
        </p>
        <p>
          Height is set to 696px at mobile, 800px at tablet (656), and 1097px at
          desktop (1200)
        </p> */}
        <HeroIntroSection
          heroImage={data.homeBg}
          videoURL="https://player.vimeo.com/external/461136161.hd.mp4?s=281b7ccea86e048329dcfc896f384c27773db220&profile_id=175"
          heroSize="jumbo"
          heroHeading="<span>Badger</span> ON"
          redHeading="Continue Your Wisconsin Experience"
          excerpt="<p>The Wisconsin Alumni Association is here for you to carry on as a proud Badger. It’s a community built on meeting the needs of today’s alumni. Whether you want to keep learning, celebrating traditions, or connecting with the UW, this is the place for you to Badger On.
        </p>"
        />
        <MobileHr />
        <p>
          Clicking on the down carat area will smoothly scroll you down to the
          heading of the red content area.
        </p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>
          This next hero intro section is based on the events page. This one
          features the standard image sizes for a hero section: 375px at mobile,
          500px at tablet, 720px at desktop.
        </p>
        <p>
          NOTE: the scroll on this one does not work; it will scroll you back up
          to the first example. There can only be one of these sections per
          page.
        </p>
        <HeroIntroSection
          heroImage={data.eventsBg}
          heroHeading="<span>Badger</span> ON"
          redHeading="Events for Every Badger"
          excerpt="<p>Being a Badger is better when we get together.
        See what’s happening near you, on campus, and around the globe.
        With social, professional, cultural, and academic events, there’s something for everyone. </p>"
        />
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
      </Layout>
    )
}

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
    eventsBg: file(relativePath: { eq: "badger-events-hero@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }

  }
`