import React from "react"
import Layout from "../../components/Layout"
import ContentCard from "../../components/content-blocks/ContentCardFlex"
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
        <h1>Content Card (FLEXIBLE HEIGHTS</h1>
        <p><strong><em>Note: on this page, when there are references to layouts breaking down, it probably means that the card height is taller than the design due to excess content.</em></strong></p>

        <p>Content Cards can be for either stories (Story Card) or events (Event Card). They come in the following sizes:</p>
        <ul>
          <li>1/3 (S): 344px wide, 2:1 image</li>
          <li>1/2 (M): 528px wide, 2:1 image </li>
          <li>2/3 (L): 712px wide, 2:1 image</li>
          <li>5/6 (XL): 896px wide, 3:1 image</li>
          <li>1-Full (XXL): 1080px wide, 3:1 image</li>
        </ul>
        <p>At mobile (screens smaller than 656px wide), all Content Card sizes display identically at 256px wide.</p>
        <p>At tablet (screens between 656px-1199px wide), all Content Card sizes display identically at 528px wide with a 2:1 image (identical to the "M" size above)</p>
        <p></p>
          <h2>1/3 (S) Content Card</h2>
          <p>This size card displays at 256px wide on mobile and 344px wide on all larger screens.</p>
          <p>When an image is present, there is a 150 character limit on the excerpt.</p>
          
          <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage1}
        tags={taglist2}
        />
        <br />
        <ContentCard 
        title="Badger Bowl Firsts"
        category="UW NOW"
        excerpt="First played in 1902, the Rose Bowl is the nation’s oldest college football bowl game. This season, the Badgers will make their 10th trip to Pasadena for the big game and their first trip back since 2013.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="##"
        img={data.cardImage6}
        tags={taglist2}
        />
        <br />
        <p>Even with the 150 character exerpt limit, a long title can push the limits of the card height. The following example has a title that spans 4 lines on mobile, 
          and the result is that the header section looks cramped.
        </p>
           <ContentCard 
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World"
        category="UW NOW"
        excerpt="First played in 1902, the Rose Bowl is the nation’s oldest college football bowl game. This season, the Badgers will make their 10th trip to Pasadena for the big game and their first trip back since 2013.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="#"
        tags={taglist2}
        img={data.cardImage6}

        />
        <br />
        <p>We probably will want to impose a character limit on titles as well in order to prevent this issue.</p>
        <p>When there is no image, the excerpt limit is 250 characters.</p>
        <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="#"
        tags={taglist2}
        />
        <p></p>
     
        <p></p>
        <ContentCard 
        startDate="Apr. 3" 
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World"
        category="Global Hot Spots"
        venue="Fluno Center"
        location="Madison" 
        img={data.cardImage3}
        />
        <br />
        <p>If we add an end date, this card still looks okay at mobile despite the long title. But at tablet and desktop, the two-line date plus the long title cause a breakdown. </p>      
        <ContentCard 
        startDate="Apr. 3" 
        endDate="Apr. 5"
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World"
        category="Global Hot Spots"
        venue="Fluno Center"
        location="Madison" 
        img={data.cardImage3}
        />
        <p></p>
        <ContentCard 
        startDate="Mar. 31" 
        title="Higher Education Cybersecurity: UW–Madison Is Moving FORWARD!"
        category="HEALTHY AGING SERIES"
        venue="Capitol Lakes Retirement Community"
        location="Madison" 
        />
        <p></p>
        <ContentCard 
        title="Coachella Valley"
        category="UW NOW"
        excerpt="La Quinta Resort and Club Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis vehicula hendrerit. Nullam sollicitudin tincidunt ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="#"
        tags={taglist2}
        />
<br />
<h2>1/2 (M) Content Card</h2>
<p>This size card displays at 256px wide on mobile and 528px wide on all larger screens.</p>

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
        title="The Past, Present, and Future of Rainstorms "
        category="Global Hot Spots"
        venue="Fluno Center"
        location="Madison" 
        img={data.cardImage3}
        size="L"
        />
        <p>Images are required for (L) size cards.</p>
        <p>In the example above, the title is cut off at two lines and the content fits within the maximum height for the card. In the example below, the title is longer and the Card layout begins to break down (at desktop).</p>      
        <ContentCard 
        startDate="Apr. 3" 
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World"
        category="Global Hot Spots"
        venue="Fluno Center"
        location="Madison" 
        img={data.cardImage3}
        size="L"
        />
        <br />
        <p>When we use a very long title on a story, the layout begins to break down.</p>
        <ContentCard 
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World"
        category="UW NOW"
        excerpt="First played in 1902, the Rose Bowl is the nation’s oldest college football bowl game. This season, the Badgers will make their 10th trip to Pasadena for the big game and their first trip back since 2013.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere" 
        url="#"
        tags={taglist2}
        img={data.cardImage7}
        size="L"

        />
        <p>The long title works okay when there is no excerpt</p>
        <ContentCard 
        title="The Past, Present, and Future of Rainstorms and Floods in Wisconsin and around the World"
        category="UW NOW"
        excerpt="First played in 1902" 
        url="#"
        tags={taglist2}
        img={data.cardImage7}
        size="L"

        />
        
        <hr>
        
        </hr>
        <h2>5/6 (XL) Content Card</h2>
<p>This size card displays at 256px wide on mobile, 528px wide at tablet, and 896px on all larger screens.</p>
<p>At desktop size, this size has an image with a 3:1 aspect ratio (896 x 298). At smaller sizes, the card will use the standard 2:1 image size. </p>
<p>Event Card (XL):</p>
        <ContentCard 
        startDate="Apr. 29" 
        endDate="May 3"
        title="The Kentucky Derby"
        category="Athletic Travel"
        venue="Churchill Downs"
        location="Louisville, KY" 
        img={data.cardImage5}
        featureImg={data.cardImage4}
        size="XL"
        />


<h2>1-Full (XXL) Content Card</h2>
<p>This size card displays at 256px wide on mobile, 528px wide at tablet, and 1080px on all larger screens.</p>
<p>At desktop size, this size has an image with a 3:1 aspect ratio (1080 x 360). At smaller sizes, the card will use the standard 2:1 image size. </p>
<p>Event Card (XXL):</p>
        <ContentCard 
        startDate="Apr. 29" 
        endDate="May 3"
        title="The Kentucky Derby"
        category="Athletic Travel"
        venue="Churchill Downs"
        location="Louisville, KY" 
        img={data.cardImage5}
        featureImg={data.cardImage4}
        size="XXL"
        />
      
        
        

      
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