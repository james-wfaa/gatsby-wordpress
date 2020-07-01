import React from "react"
import Layout from "../../components/Layout"
import ContentCard from "../../components/content-blocks/ContentCard"
import PageSection from '../../components/page-sections/PageSection'

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
    <PageSection>
        <h1>Card A (feature card)</h1>

<p>This Card variant is for events or stories that are "featured". On desktop screen sizes (1200px and larger), it is 712px wide by 680px tall.</p>
              
        <ContentCard 
        startDate="Sept. 28" 
        endDate="Sept. 30" 
        title="Madison Founders' Day Celebration"
        venue="One Alumni Place" 
        location="Madison"         
        category="Travel"
        img={data.cardImage1}
        url="##"
        tags={taglist1}
        size="XL"
        />
        <p>In order to be used as a "featured" card, an image must be included. If no image is present, the card 
          can only display at the smaller mobile &amp; tablet sizes. (Note: currently the card IS rendering at 712px wide without an image. 
          This will be modified in future deployments.</p>
        <ContentCard 
        startDate="Sept. 28" 
        endDate="Sept. 30" 
        title="Madison Founders' Day Celebration"
        venue="One Alumni Place" 
        location="Madison"         
        category="Travel"
        url="###"
        tags={taglist1}
        />
        <p>On mobile, these should be 256px wide and 502px tall.</p>
        <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage1}
        tags={taglist2}
        

        />
       <p>At tablet size, the card width expands to 528x. Height grows to 680px. 
        </p>
        <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="####"
        tags={taglist2}
        

        />
 

        <ContentCard 
        startDate="Feb. 26" 
        title="WAA: Tucson Chapter Founders’ Day Celebration"
        category="Founder's Day"
        venue="The Lodge at Ventana Canyon" 
        location="Tucson, AZ" 
        />
        <p>At desktop (1200px) the card width expands to 712px and height remains 680px.</p>
        <ContentCard 
        startDate="Feb. 27" 
        title="UW-Madison Nobel Prize Laureate – Jonathan Patz in Los Angeles"
        category="Global Hotspots"
        venue="Aquarium of the Pacific" 
        location="Long Beach, CA" 
        />
        
        
        <ContentCard 
        startDate="Mar. 31" 
        title="Higher Education Cybersecurity: UW–Madison Is Moving FORWARD!"
        category="HEALTHY AGING SERIES"
        venue="Capitol Lakes Retirement Community"
        location="Madison" 
        />
        <p>Not done yet: the 5/6 variant and the "1 full" variant.</p>
        

      
    </PageSection>
    
</Layout>
    )
}

export const pageQuery = graphql`
query {
    cardImage1: file(relativePath: { eq: "Feb_Richard_Davis_Web_01@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 712, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`