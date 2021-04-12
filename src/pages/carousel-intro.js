import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import HeroIntroSection from '../components/page-sections/HeroIntroSection'


const CarouselIntro = ({ data }) => {
  return (
    <Layout>
      <HeroIntroSection
        heroSize="jumbo"
        heroHeading="<span>Travel</span> ON"
        carouselItems={
          [data.homeBg,
          data.eventsBg]
        }
      >
      </HeroIntroSection>
    </Layout>
  )
}

export default CarouselIntro

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
