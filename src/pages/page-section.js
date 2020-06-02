import React from "react"
import Layout from "../../components/Layout"
import PageSection from '../../components/page-sections/PageSection'
import MobileHr from '../../components/parts/MobileHr'

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

export default ({ data }) => {

    return (
<Layout>
    <MobileHr />
    <PageSection  heading="Basic Page Section" buttons={buttons1} >
        <p>This Component is the main building block for most of the distinct sections of most of the top-level pages.</p>

        <p>The Basic Page Section consists of a few optional header elements at the top,
             and an optional buttons / CTA section at the end.
        </p>
    </PageSection>
    <PageSection alt heading="Page Section - alt background" buttons={buttons1} >
        <p>This layout can also be used with a grey background, with no other style changes necessary.
        </p>
    </PageSection>
    <PageSection  heading="Basic Page Section" buttons={buttons1} >

        <p>In between the optional heading section and the optional button section, all sorts of content components can live.</p>
        <p>On this demo page, the "middle part" will just be text. The text copy styles are based on the "Chapter Page - Alt Module" from the XD files.</p>
    </PageSection>
    <PageSection alt heading="Let's Talk Buttons" buttons={buttons1} >
        <p>At mobile sizes up to 655px, these buttons are 100% width, with a 36px margin on each side. </p>
        <p>At 656px and wider, the button width is "auto" based on the width of the text.</p>

    </PageSection>
    <PageSection heading="Two Buttons" buttons={buttons2} >
        <p>The button / CTA section at the bottom can have one or two buttons in it.</p>
       
    </PageSection>
    <PageSection alt heading="Button Styles" buttons={buttons1} >
        <p>The standard button style is background #c5050c, text white, 16px uppercase.</p>
       <p>Hovering over a button changes the background to #810000 and adds a drop shadow.</p>
    </PageSection>
    <PageSection heading="Background Image" buttons={buttons1} bgImage={data.gridBg} >
        <p>The standard button style is background #c5050c, text white, 16px uppercase.</p>
       <p>Hovering over a button changes the background to #810000 and adds a drop shadow.</p>
    </PageSection>
</Layout>
    )
}

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