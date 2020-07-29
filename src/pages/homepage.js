import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/Layout"
import PageSection from "../../components/page-sections/PageSection"
import ContentCardD from "../../components/content-blocks/ContentCardD"
import GridCardD from "../../components/content-modules/GridCardD"
import ContentCard from "../../components/content-blocks/ContentCardFlex"
import CardE from "../../components/content-blocks/CardE"
import PromoCardD from "../../components/content-blocks/PromoCardD"
import HeroIntroSection from '../../components/page-sections/HeroIntroSection'
import CommunicationForm from "../../components/content-blocks/CommunicationForm"
import SimpleSlider from "../../components/content-modules/SimpleSlider"

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

const eventbutton = [
    
    {
        link: '#',
        text: 'Calendar'
    },
   
    
]

const featuredbutton = [
    
    {
        link: '#',
        text: 'See all news and stories'
    },
   
    
]



export default ({ data }) =>  {
    return (
<Layout>

<HeroIntroSection  
        heroImage={data.homeBg}
        jumbo
        heroHeading="<span>Badger</span> ON"
        redHeading="Continue Your Wisconsin Experience" 
        excerpt="<p>The Wisconsin Alumni Association is here for you to carry on as a proud Badger. It’s a community built on meeting the needs of today’s alumni. Whether you want to keep learning, celebrating traditions, or connecting with the UW, this is the place for you to Badger On.
        </p>"
        />

<PageSection>
    <SimpleSlider  className="center" slidesToShow="1" dots  centerMode variableWidth centerPadding="100px"> 
      <CardE img={data.asset29} caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut." />
      <CardE img={data.asset30} caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut." />
      <CardE img={data.square1} caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut." />
      <CardE img={data.squareBucky} caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut." />
    </SimpleSlider>
</PageSection>

<CommunicationForm />

<PageSection heading="Featured Stories" buttons={featuredbutton} alt>
    <SimpleSlider  className="center" slidesToShow="1" dots  centerMode variableWidth centerPadding="100px"> 
        <ContentCard 
        title="All About That Bass"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage1}
        tags={taglist2}
        size="L"
        />
        <ContentCard 
        title="Four Conversation Starters Beyond “How about Them Badgers?”"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage6}
        tags={taglist2}
        size="L"
        />
        <ContentCard 
        title="More than Madison and Milwaukee"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage3}
        tags={taglist2}
        size="L"
        />
        <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage7}
        tags={taglist2}
        size="L"
        />

        <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage5}
        tags={taglist2}
        size="L"
        />
    </SimpleSlider>
</PageSection>

<PageSection heading="Events at a Glance" buttons={eventbutton} bgImage={data.gridBg} >
    <GridCardD>
            <ContentCardD 
            startDate="Feb. 23" 
            endDate="Feb. 28"
            title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
            category="GAME WATCH"
            venue="Keystone Sports Review" 
            location="Indianapolis, IN" 
            url="#sgjserthsdghsdr"
            />

            <ContentCardD 
            startDate="Feb. 26" 
            title="Coachella Valley"
            category="UW NOW"
            venue="La Quinta Resort and Club" 
            location="La Quinta, CA" 
            url="adfhadsfhasfdhgas"
            />

            <ContentCardD 
            startDate="Feb. 26" 
            title="WAA: Tucson Chapter Founders’ Day Celebration"
            category="Founder's Day"
            venue="The Lodge at Ventana Canyon" 
            location="Tucson, AZ" 
            url="/afhasfhsadf"
            />

            <ContentCardD 
            startDate="Feb. 27" 
            title="UW-Madison Nobel Prize Laureate – Jonathan Patz in Los Angeles"
            category="Global Hotspots"
            venue="Aquarium of the Pacific" 
            location="Long Beach, CA" 
            url="/afgasdfgdasg"
            />

            <ContentCardD 
            startDate="Mar. 22" 
            endDate="Apr. 4"
            title="Singapore, Thailand, Angkor Wat"
            category="Travel"
            location="Southeast Asia" 
            url="/sdfghsdgfhsdf"
            />

            <PromoCardD 
            title="Shop The UW Alumni Store"
            url="####"
            />

            <ContentCardD 
            startDate="Apr. 3" 
            title="The Past, Present and Future of Rainstorms and Floods in Wisconsin and Around the World"
            category="Global Hotspots"
            venue="Fluno Center" 
            location="Madison" 
            url="/asdfgasdgasd"
            />
            <ContentCardD 
            startDate="Apr. 23" 
            title="UW–Madison Day at the State Capitol"
            venue="Park Hotel"
            location="Madison" 
            url="/asdgasdgdasg"
            />
             <ContentCardD 
            startDate="Mar. 22" 
            endDate="Apr. 4" 
            title="Singapore, Thailand, Angkor Wat"
            category="Travel"
            location="Southeast Asia" 
            url="/fadsfds"
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
    eventsBg: file(relativePath: { eq: "badger-events-hero@2x.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
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

      gridBg: file(relativePath: { eq: "well-read-bucky-bg@2x.jpg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

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
