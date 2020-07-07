import React from "react"
import Layout from "../../components/Layout"
import ContentCard from "../../components/content-blocks/ContentCard"
import PageSection from '../../components/page-sections/GenericPageSection'

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
    <PageSection pad>
        <h1>Content Card</h1>

        <p>Content Cards can be for either stories (Story Card) or events (Event Card). They come in the following sizes:</p>
        <ul>
          <li>1/3 (S): 344px wide, 2:1 image</li>
          <li>1/2 (M): 528px wide, 2:1 image </li>
          <li>2/3 (L): 712px wide, 2:1 image</li>
          <li>5/6 (XL): 896px wide, 3:1 image</li>
          <li>1-Full (XXL): 1200px wide, 3:1 image</li>
        </ul>
        <p>At mobile (screens smaller than 656px wide), all Content Card sizes display identically at 256px wide.</p>
        <p>At tablet (screens between 656px-199px wide), all Content Card sizes display identically at 528px wide with a 2:1 image (identical to the "M" size above)</p>
        <p></p>
          <h2>1/3 (S) Content Card</h2>
          <p>This size card displays at 256px wide on mobile and 344px wide on all larger screens.</p>
          
          <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage1}
        tags={taglist2}
        />
        <p>Event Card (S):</p>
        <ContentCard 
        startDate="Apr. 3" 
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World"
        category="Global Hot Spots"
        venue="Fluno Center"
        location="Madison" 
        img={data.cardImage3}
        />
        <p>(S) size can be shown without an image.</p>
        <ContentCard 
        startDate="Mar. 31" 
        title="Higher Education Cybersecurity: UW–Madison Is Moving FORWARD!"
        category="HEALTHY AGING SERIES"
        venue="Capitol Lakes Retirement Community"
        location="Madison" 
        />
        <p>Story card (S), no image</p>
        <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="#"
        tags={taglist2}
        />

<h2>1/2 (M) Content Card</h2>
<p>This size card displays at 256px wide on mobile and 529px wide on all larger screens.</p>

        <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage1}
        tags={taglist2}
        size="M"
        />
        <p>Event Card (M):</p>
        <ContentCard 
        startDate="Apr. 3" 
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World"
        category="Global Hot Spots"
        venue="Fluno Center"
        location="Madison" 
        img={data.cardImage3}
        size="M"
        />
        <p>(M) card size can be shown without an image.</p>
        <ContentCard 
        startDate="Mar. 31" 
        title="Higher Education Cybersecurity: UW–Madison Is Moving FORWARD!"
        category="HEALTHY AGING SERIES"
        venue="Capitol Lakes Retirement Community"
        location="Madison" 
        size="M"
        />
        <p>Story card (M), no image</p>
        <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="#"
        tags={taglist2}
        size="M"
        />

<h2>2/3 (L) Content Card</h2>
<p>This size card displays at 256px wide on mobile, 528px wide at tablet, and 712px on all larger screens.</p>
<ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage1}
        tags={taglist2}
        size="L"
        />
        <p>Event Card (L):</p>
        <ContentCard 
        startDate="Apr. 3" 
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World"
        category="Global Hot Spots"
        venue="Fluno Center"
        location="Madison" 
        img={data.cardImage3}
        size="L"
        />
        <p>Images are required for (L) size cards.</p>
              
        <hr>
        
        </hr>
<p></p>

      
        
        <p>Not done yet: the 5/6 variant and the "1 full" variant.</p>
        

      
    </PageSection>
    
</Layout>
    )
}

export const pageQuery = graphql`
query {
    cardImage1: file(relativePath: { eq: "Feb_Richard_Davis_Web_01@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage2: file(relativePath: { eq: "12_DutchWaterways_header@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage3: file(relativePath: { eq: "17LEARN_JakeWood_manis_29.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`