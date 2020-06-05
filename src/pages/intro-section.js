import React from "react"
import Layout from "../../components/Layout"
import HeroIntroSection from '../../components/page-sections/HeroIntroSection'


import MobileHr from '../../components/parts/MobileHr'


export default ({ data }) => {

    return (
<Layout>
    <MobileHr />
    <HeroIntroSection  
        heroImage={data.heroBg}
        jumbo
        redHeading="Continue Your Wisconsin Experience" 
        excerpt="<p>The Wisconsin Alumni Association is here for you to carry on as a proud Badger. It’s a community built on meeting the needs of today’s alumni. Whether you want to keep learning, celebrating traditions, or connecting with the UW, this is the place for you to Badger On.
        </p>"
        />
        
   
</Layout>
    )
}

export const pageQuery = graphql`
query {
    heroBg: file(relativePath: { eq: "pier-bg@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    
  }
`