import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/Layout"
import PageSection from "../../components/page-sections/PageSection"
import ContentCard from "../../components/content-blocks/ContentCard"
import ContentBlockList from "../../components/content-modules/ContentBlockList"
import GenericPageSection from '../../components/page-sections/GenericPageSection'

const taglist1 = [
    
    {
        link: '#',
        tag: 'Tag 1'
    },
    {
        link: '#',
        tag: 'Tag 2'
    },
    {
        link: '#',
        tag: 'Tag 3'
    },
    {
        link: '#',
        tag: 'Tag 4'
    },
    {
        link: '#',
        tag: 'Tag 5'
    },
    {
      link: '#',
      tag: 'Tag 6'
    },
    {
      link: '#',
      tag: 'Tag 7'
    },
    {
      link: '#',
      tag: 'Tag 8'
    },
    {
      link: '#',
      tag: 'Tag 9'
    },
  
  
  
  ]
  const taglist2 = [
      
    {
        link: '#',
        tag: 'Tag 1'
    },
    {
        link: '#',
        tag: 'Tag 2'
    },
    {
        link: '#',
        tag: 'Tag 3'
    },
    {
        link: '#',
        tag: 'Tag 4'
    },

]
export default ({ data }) => {
    return (
<Layout>

<PageSection alt>
    <ContentBlockList>
    <ContentCard 
        startDate="Apr. 29" 
        title="The Kentucky Derby"
        category="Athletic Travel"
        venue="Churchill Downs"
        location="Louisville, KY" 
        tags={taglist2}
        img={data.cardImage3}
        featureImg={data.cardImage3}
        size="Wide"
        />
        <ContentCard 
        startDate="Apr. 29" 
        endDate="May 3"
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin"
        category="Athletic Travel"
        venue="Churchill Downs"
        location="Louisville, KY" 
        tags={taglist1}
        img={data.cardImage5}
        featureImg={data.cardImage5}
        size="Wide"
        />
        <ContentCard 
        startDate="Apr. 29" 
        endDate="May 3"
        title="The Kentucky Derby"
        category="Athletic Travel"
        venue="Churchill Downs"
        location="Louisville, KY" 
        tags={taglist2}
        size="Wide"
        />
    </ContentBlockList>
       
</PageSection>

       
</Layout>
    )
}

export const pageQuery = graphql`
query {
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
        fluid(maxWidth: 712,  quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
    cardImage6: file(relativePath: { eq: "fball_ILL_band18_0556-3@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712,  quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
    cardImage7: file(relativePath: { eq: "19AP_DowntownMadisonInc_NewFacesNPlaces_Manis_13@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712,  quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize

        }
      }
    }
  }
`