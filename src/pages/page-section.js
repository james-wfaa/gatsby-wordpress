import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import PageSection from '../components/page-sections/PageSection'
import GridCardD from "../components/content-modules/GridCardD"
import ContentCardD from "../components/content-blocks/ContentCardD"

import MobileHr from '../components/parts/MobileHr'

const buttons1 = [
    
    {
        link: '#',
        text: 'Learn More'
    },
   
    
]
const buttons2 = [
    
    {
        link: '#',
        text: 'Learn More'
    },
    {
        link: '#',
        text: 'Learn Even More'
    },
    
]

const PageSectionPage = ({ data }) => {

    return (
<Layout>
    <MobileHr />
    <PageSection  
        heading="Basic Page Section" 
        buttons={buttons1} 
        excerpt="<p>This Component is the main building block for most of the distinct sections of most of the top-level pages.</p>

        <p>The Basic Page Section consists of a few optional header elements at the top,
             and an optional buttons / CTA section at the end.
        </p>"
        />
        
    <PageSection 
        alt 
        heading="Page Section - alt background" 
        buttons={buttons1} 
        excerpt="<p>This layout can also be used with a grey background, with no other style changes necessary.
        </p>" />
        
    <PageSection  
        heading="Basic Page Section" 
        buttons={buttons1} 
        excerpt="<p>In between the optional heading section and the optional button section, all sorts of content components can live.</p>
        <p>On this demo page, the 'middle part' will just be text. The text copy styles are based on the 'Chapter Page - Alt Module' from the XD files.</p>" 
        />

            <PageSection 
        alt 
        heading="Let's Talk Buttons" 
        buttons={buttons1} 
        excerpt = "<p>At mobile sizes up to 655px, these buttons are 100% width, with a 36px margin on each side. </p><p>At 656px and wider, the button width is 'auto' based on the width of the text.</p>" 
        />
    <PageSection heading="Two Buttons" buttons={buttons2} excerpt="<p>The button / CTA section at the bottom can have one or two buttons in it.</p>" />
        
    <PageSection alt heading="Button Styles" buttons={buttons1} excerpt="<p>The standard button style is background #c5050c, text white, 16px uppercase.</p>
       <p>Hovering over a button changes the background to #810000 and adds a drop shadow.</p>" />
    <PageSection 
        heading="Background Image" 
        buttons={buttons1} 
        bgImage={data.gridBg} 
        excerpt="<p>A page section can also have a background image. That's pretty neat.</p>" />

    <PageSection alt buttons={buttons1} excerpt=" <p>Sometimes a page section doesn't have a title at all. It just goes straight into the content.</p>" />
    <PageSection 
        heading="No Buttons"  
        excerpt="<p>And sometimes a page section doesn't have any buttons. Just a heading and some content.</p>" />
    
    <PageSection heading="Events at a Glance" buttons={buttons1} bgImage={data.gridBg} >
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

            <ContentCardD 
            startDate="Mar. 31" 
            title="Higher Education Cybersecurity: UW–Madison Is Moving FORWARD!"
            category="HEALTHY AGING SERIES"
            venue="Capitol Lakes Retirement Community"
            location="Madison" 
            url="/asfgasgasd"
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

export default PageSectionPage

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