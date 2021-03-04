import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import CardE from "../components/content-blocks/CardE"
import Container from "../components/parts/Container"
import SponsorAd from "../components/content-blocks/SponsorAd"

import PageSection from '../components/page-sections/PageSection'
const CardEPage = ({ data }) => {

    return (
<Layout>
    <PageSection>
        <h1>Image with Caption (1:1)</h1>
    <p>This is the "image with caption" component - also known as Card 'E'. These are usually found in a carousel.</p>
    <Container>
        <CardE img={data.asset29} caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut." />
    </Container>
    <p>At mobile sizes, these should render at 254px wide.</p>
    <p>At tablet and up, they should render at 344px wide.</p>
    <Container>
        <CardE img={data.asset30} caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut." />
    </Container>
    <p>Captions should be 18px Verlag bold.</p>
    <Container>
        <CardE img={data.square1} caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut." />
    </Container>
    <p>There should be 32px padding between the image and the caption, and 32px padding below the caption</p>
    <p>They should not have their own background color, but should take the background of the parent element they live in (such as a carousel).</p>
    <Container>
        <CardE img={data.squareBucky} caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut." />
    </Container>
    <p>As for the spacing between two of these cards, or the total spacing between these cards and the element beneath them, that
        is a subject for a different time.  This page just shows what they should look like by themselves. The outside padding is just for
        visual separation between examples.</p>

    </PageSection>

</Layout>
    )
}
export default CardEPage

export const pageQuery = graphql`
query {
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

