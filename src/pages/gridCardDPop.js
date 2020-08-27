import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ContentCardD from "../components/content-blocks/ContentCardD"
import GridCardD from "../components/content-modules/GridCardD"
import PageSection from "../components/page-sections/PageSection"
import HeroIntroSection from '../components/page-sections/HeroIntroSection'
import PromoCardD from "../components/content-blocks/PromoCardD"



export default ({ data }) => {
    return (
<Layout>

<PageSection >

    <HeroIntroSection  
            heroImage={data.homeBg}
            jumbo
            heroHeading="<span>Badger</span> ON"
            redHeading="Continue Your Wisconsin Experience" 
            excerpt="<p>The Wisconsin Alumni Association is here for you to carry on as a proud Badger. It’s a community built on meeting the needs of today’s alumni. Whether you want to keep learning, celebrating traditions, or connecting with the UW, this is the place for you to Badger On.
            </p>"
            />


    <GridCardD popOut>
        <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            isNav
            />


            <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            isNav
            />
            
            <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            isNav
            />


            <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            isNav
            />

            <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            isNav
            />


            <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            isNav
            />
          
            
            <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            isNav
            />
    

            <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            isNav
            />
      

        <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            isNav
            />
        
    
        </GridCardD>

    </PageSection>
       


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
    
  }
`