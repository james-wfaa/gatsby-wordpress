import React from "react"
import Layout from "../../components/Layout"
import ContentCardD from "../../components/content-blocks/ContentCardD"
import PromoCardD from "../../components/content-blocks/PromoCardD"
import PageSection from '../../components/page-sections/PageSection'
export default () => {
    return (
<Layout>
    <PageSection>
        <h1>Card D (square tile card)</h1>
        <p>This is Card 'D' - the square tile card. These are usually found in tile grids.</p>

        <p>There are several variations. first, here are some event cards.
        </p>

        
        <ContentCardD 
        date="Feb. 23" 
        title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
        category="GAME WATCH"
        venue="Keystone Sports Review" 
        location="Indianapolis, IN" 
        />
        <p>On mobile, these should be 256px wide, with an 18px padding.</p>
        <ContentCardD 
        date="Feb. 26" 
        title="Coachella Valley"
        category="UW NOW"
        venue="La Quinta Resort and Club" 
        location="La Quinta, CA" 
        />
        <p>On tablet and larger, these should be 344px wide, with 32px padding.</p>

        <ContentCardD 
        date="Feb. 26" 
        title="WAA: Tucson Chapter Founders’ Day Celebration"
        category="Founder's Day"
        venue="The Lodge at Ventana Canyon" 
        location="Tucson, AZ" 
        />
        <p>The date should be 24px font size in mobile, 32px at larger screen sizes.</p>
        <p>There should be 12px space between the date and title in mobile, 24px at larger sizes.</p>
        <ContentCardD 
        date="Feb. 27" 
        title="UW-Madison Nobel Prize Laureate – Jonathan Patz in Los Angeles"
        category="Global Hotspots"
        venue="Aquarium of the Pacific" 
        location="Long Beach, CA" 
        />
        <p>There should be 12px (18px) spacing above and below the category text, and 12px (18px) above and below the red separator bar.</p>
        <p>Sometimes there is no category. If so, the red separator should go directly below the title text (same spacing rules apply).</p>
        <ContentCardD 
        date="Mar. 22- Apr. 4" 
        title="Singapore, Thailand, Angkor Wat"
        category="Travel"
        location="Southeast Asia" 
        />
        <p>The red title text should be Mrs. Eaves Narrow, Bold &amp; Italic - 20px/24px. </p>

        <ContentCardD 
        date="Mar. 31" 
        title="Higher Education Cybersecurity: UW–Madison Is Moving FORWARD!"
        category="HEALTHY AGING SERIES"
        venue="Capitol Lakes Retirement Community"
        location="Madison" 
        />
        <p>The category text should be 13px/14px, and boldness at "Black".</p>
        <ContentCardD 
        date="Apr. 3" 
        title="The Past, Present and Future of Rainstorms and Floods in Wisconsin and Around the World"
        category="Global Hotspots"
        venue="Fluno Center" 
        location="Madison" 
        />
        <p>Venue &amp; location lines should be 16px/18px. Location should be bold. </p>

        <ContentCardD 
        date="Apr. 23" 
        title="UW–Madison Day at the State Capitol"
        venue="Park Hotel"
        location="Madison" 
        />

        <ContentCardD 
        date="Mar. 22- Apr. 4" 
        title="Singapore, Thailand, Angkor Wat"
        category="Travel"
        location="Southeast Asia" 
        />

        <p>Here's a Story Card D.</p>
        <p>Padding should be 18px at mobile and 32px at desktop.</p>
        <ContentCardD 
        title="More than Madison and Milwaukee"
        category="story"
        excerpt="Ever since his days as a high schooler in Racine, Wisconsin, 
        Tito Diaz has worked to connect multicultural students with academic success."
        url="#"
        />

        <p>This is "Promo Card D" - the red card that functions more like an ad or promotion.</p>
        <PromoCardD
        title="Shop the UW Alumni Store"
        url="#" />
        <p>And finally, this is "Nav Card D" - a navigational element, which links to a site section.</p>

        <PromoCardD
        title="More About This Chapter" 
        url="#"
        isNav
        />
    </PageSection>
    
</Layout>
    )
}