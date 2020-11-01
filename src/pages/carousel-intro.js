import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroIntroSection from '../components/page-sections/HeroIntroSection'
import CarouselIntroSection from '../components/page-sections/HeroCarousel'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const ImageDiv = styled.div`
  width: 100%;
  height: 90vh;
`

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
