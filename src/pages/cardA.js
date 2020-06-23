import React from "react"
import Layout from "../../components/Layout"
import ContentCardA from "../../components/content-blocks/ContentCardA"
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
        <h1>Card A (rectangular event/story card w/ 2-column bottom section)</h1>
        <p>This is Card 'A' - the largest of the Content Cards. </p>

              
        <ContentCardA 
        startDate="Sept. 28" 
        endDate="Sept. 30" 
        title="Madison Founders' Day Celebration"
        venue="One Alumni Place" 
        location="Madison"         
        category="Travel"
        img={data.cardImage1}
        tags={taglist1}
        />
        <ContentCardA 
        startDate="Sept. 28" 
        endDate="Sept. 30" 
        title="Madison Founders' Day Celebration"
        venue="One Alumni Place" 
        location="Madison"         
        category="Travel"
        tags={taglist1}
        />
        <p>On mobile, these should be 256px wide and 502px tall.</p>
        <ContentCardA 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage1}
        tags={taglist2}
        

        />
        <p>On mobile, these should be 256px wide and 502px tall.</p>
        <ContentCardA 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        tags={taglist2}
        

        />
        <p>At tablet size, the card width expands to 536px. Height remains 502px. 
        </p>

        <ContentCardA 
        startDate="Feb. 26" 
        title="WAA: Tucson Chapter Founders’ Day Celebration"
        category="Founder's Day"
        venue="The Lodge at Ventana Canyon" 
        location="Tucson, AZ" 
        />
        <p>At desktop (1200px) the card width expands to 712px and height becomes 680px.</p>
        <ContentCardA 
        startDate="Feb. 27" 
        title="UW-Madison Nobel Prize Laureate – Jonathan Patz in Los Angeles"
        category="Global Hotspots"
        venue="Aquarium of the Pacific" 
        location="Long Beach, CA" 
        />
        <p>From that point on, the card should maintain a fixed width of 712px and the left &amp; right margins should expand evenly.</p>
        
        <ContentCardA 
        startDate="Mar. 31" 
        title="Higher Education Cybersecurity: UW–Madison Is Moving FORWARD!"
        category="HEALTHY AGING SERIES"
        venue="Capitol Lakes Retirement Community"
        location="Madison" 
        />
        <p>However, there is also a "super" variant that grows to a max-width of 1080px.</p>
        

      
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