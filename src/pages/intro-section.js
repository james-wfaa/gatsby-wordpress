import React from "react"
import Layout from "../../components/Layout"
import HeroIntroSection from '../../components/page-sections/HeroIntroSection'

import MobileHr from '../../components/parts/MobileHr'


export default ({ data }) => {

    return (
<Layout>
    <MobileHr />
    <HeroIntroSection  
        redHeading="Basic Page Section" 
        excerpt="<p>This Component is the main building block for most of the distinct sections of most of the top-level pages.</p>

        <p>The Basic Page Section consists of a few optional header elements at the top,
             and an optional buttons / CTA section at the end.
        </p>"
        />
        
   
</Layout>
    )
}

export const pageQuery = graphql`
query {
    gridBg: file(relativePath: { eq: "well-read-bucky-bg@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`