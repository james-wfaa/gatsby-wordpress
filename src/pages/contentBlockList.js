import React, {useState, useEffect} from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PageSection from "../components/page-sections/PageSection"
import ContentCard from "../components/content-blocks/ContentCard"
import ContentBlockList from "../components/content-modules/ContentBlockList"
import AccordianSearchAlgolia from "../components/parts/AlgoliaSearch/AccordianSearchAlgolia"


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
  const [events, setEvents] = useState([])

  let contentCards = events.map(card => {
    return (
    <ContentCard
      key={`${card.startDate}${card.venue}`}
      startDate={card.startDate}
      endDate={card.endDate ? card.endDate : null}
      title={card.title}
      category={card.category}
      venue={card.venue}
      location={card.location}
      img={card.featuredImage ? card.featuredImage.node.localFile: null}
      featureImg={card.featuredImage ? card.featuredImage.node.localFile : null}
      alt={card.alt}
      url={card.url}
      // temp sizing until size added to WP
      size={"XXL"}
      //
    />)
  })
  return (
    <Layout>
      <AccordianSearchAlgolia index="All" results={false} callback={(arr) => setEvents(arr)} />
      <PageSection heading="Sifted Events">
        <ContentBlockList>{contentCards}</ContentBlockList>
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