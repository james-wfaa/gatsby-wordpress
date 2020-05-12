import React from "react"
import Layout from "../../components/Layout"
import ContentCardA from "../../components/content-blocks/ContentCardD"
import PageSection from '../../components/page-sections/PageSection'
export default () => {
    return (
<Layout>
    <PageSection>
        <h1>Card A (rectangular event/story card w/ 2-column bottom section)</h1>
        <p>This is Card 'A' - the largest of the Content Cards. </p>

        <p>There are several variations. first, here are some event cards.
        </p>

        
        <ContentCardA 
        date="Sept. 28" 
        title="Madison Founders' Day Celebration"
        venue="One Alumni Place" 
        location="Madison" 
        />
        <p>On mobile, these should take the width of the screen, minus 120 pixels of margin. </p>
        <ContentCardA 
        date="Feb. 26" 
        title="Coachella Valley"
        category="UW NOW"
        venue="La Quinta Resort and Club" 
        location="La Quinta, CA" 
        />
        <p>On tablet (656px) and larger, the bottom text content area (below the photo) splits to two-column. This is one of 
            the key differentiators between Card A and Card B. 
        </p>

        <ContentCardA 
        date="Feb. 26" 
        title="WAA: Tucson Chapter Founders’ Day Celebration"
        category="Founder's Day"
        venue="The Lodge at Ventana Canyon" 
        location="Tucson, AZ" 
        />
        <p>The card width should continue to increase as the screen gets larger, with 60px margin on each side, until the card 
            reaches a maximum width of 712px.  This will happen at a screen width of 832px.</p>
        <ContentCardA 
        date="Feb. 27" 
        title="UW-Madison Nobel Prize Laureate – Jonathan Patz in Los Angeles"
        category="Global Hotspots"
        venue="Aquarium of the Pacific" 
        location="Long Beach, CA" 
        />
        <p>From that point on, the card should maintain a fixed width of 712px and the left &amp; right margins should expand evenly.</p>
        
        <ContentCardA 
        date="Mar. 31" 
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