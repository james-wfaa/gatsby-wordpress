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
        startDate="Feb. 23" 
        title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
        category="GAME WATCH"
        venue="Keystone Sports Review" 
        location="Indianapolis, IN" 
        url="/"
        />
        <p>On mobile, these should be 256px wide, with an 18px padding.</p>
        <ContentCardD 
        startDate="Feb. 26" 
        title="Coachella Valley"
        category="UW NOW"
        venue="La Quinta Resort and Club" 
        location="La Quinta, CA" 
        url="/"
        />
        <p>On tablet and larger, these should be 344px wide, with 32px padding.</p>

        <ContentCardD 
        startDate="Feb. 26" 
        title="WAA: Tucson Chapter Founders’ Day Celebration"
        category="Founder's Day"
        venue="The Lodge at Ventana Canyon" 
        location="Tucson, AZ" 
        url="/"
        />
        <p>The date should be 24px font size in mobile, 32px at larger screen sizes.</p>
        <p>There should be 12px space between the date and title in mobile, 24px at larger sizes.</p>
        <ContentCardD 
        startDate="Feb. 27" 
        title="UW-Madison Nobel Prize Laureate – Jonathan Patz in Los Angeles"
        category="Global Hotspots"
        venue="Aquarium of the Pacific" 
        location="Long Beach, CA" 
        url="/"
        />
        <p>There should be 12px (18px) spacing above and below the category text, and 12px (18px) above and below the red separator bar.</p>
        <p>Sometimes there is no category. If so, the red separator should go directly below the title text (same spacing rules apply).</p>
        <ContentCardD 
        startDate="Mar. 22" 
        endDate="Apr. 4"
        title="Singapore, Thailand, Angkor Wat"
        category="Travel"
        location="Southeast Asia" 
        url="/"
        />
        <p>The red title text should be Mrs. Eaves Narrow, Bold &amp; Italic - 20px/24px. </p>

        <ContentCardD 
        startDate="Mar. 31" 
        title="Higher Education Cybersecurity: UW–Madison Is Moving FORWARD!"
        category="HEALTHY AGING SERIES"
        venue="Capitol Lakes Retirement Community"
        location="Madison" 
        url="/"
        />
        <p>The category text should be 13px/14px, and boldness at "Black".</p>
        <ContentCardD 
        startDate="Apr. 3" 
        title="The Past, Present and Future of Rainstorms and Floods in Wisconsin and Around the World"
        category="Global Hotspots"
        venue="Fluno Center" 
        location="Madison" 
        url="/"
        />
        <p>Venue &amp; location lines should be 16px/18px. Location should be bold. </p>

        <ContentCardD 
        startDate="Apr. 23" 
        title="UW–Madison Day at the State Capitol"
        venue="Park Hotel"
        location="Madison" 
        url="/"
        />
        <p>The date and title should be clickable links.</p>

        <ContentCardD 
        startDate="Mar. 22" 
        endDate="Apr. 4" 
        title="Singapore, Thailand, Angkor Wat"
        category="Travel"
        location="Southeast Asia" 
        url="/"
        />

        <p>Now here are some story cards.</p>
        <ContentCardD 
        title="More than Madison and Milwaukee"
        category="story"
        excerpt="Ever since his days as a high schooler in Racine, Wisconsin, 
        Tito Diaz has worked to connect multicultural students with academic success."
        url="#"
        />
        <p>Padding should be 18px at mobile and 32px at desktop.</p>
        <ContentCardD 
        title="One on One at One Alumni Place: Deborah Blum MA’82"
        category="video"
        excerpt="WAA chief alumni officer Sarah Schutt talks with author Deb Blum 
        MA’82 about her latest book, Poison Squad. Blum is a former UW professor of 
        journalism, and Poison Squad is the university’s 2019–20 selection for Go Big Read."
        url="#"
        />
        <p>The title should be a clickable link, along with the "Read More" link after the excerpt.</p>
        <ContentCardD 
        title="We Can Guess Your Generation Based on Your Snow-Day Schedule"
        category="poll"
        excerpt="Few gifts are better to UW students than a school-wide snow day. Tell us 
        how you’d spend your snow day and we’ll guess your generation."
        url="#"
        />
        <ContentCardD 
        title="The Long and Winding Road from Major to Career"
        category="story"
        excerpt="From YouTube star to professional BMX rider, Badger alums have proven the versalitity of a UW diploma. "
        urlText="Via On Wisconsin Magazine."
        linkStyle="arrow"
        url="#"
        />
        <ContentCardD 
        title="Badgering: Sasanehsaeh Pyawasay ’07, MS’09"
        category="story"
        excerpt="As the University of Wisconsin System’s first Native American student success coordinator, Sasanehsaeh Pyawasay 
        advocates on behalf of Native students — particularly those from within the 12 tribes resident in Wisconsin."
        url="#"
        />
        <ContentCardD 
        title="Proud to be a Badger: Roger Hamilton"
        category="story"
        excerpt="As we watched the procession of first responders pass at the memorial for Officer Garrett Swasey, my two boys 
        and I were thrilled to see a University of Wisconsin Police vehicle. I’m proud to be a Badger!"
        url="#"
        />
        <ContentCardD 
        title="Academy Award Badgers"
        category="story"
        excerpt="The Academy Awards nominations were just announced. Are any Badgers on the list?"
        url="#"
        />
        <ContentCardD 
        title="Former Fox News anchor Greta Van Susteren featured in Wisconsin Alumni Association’s Thank You, 72 podcast and radio series"
        category="podcast"
        excerpt="Outagamie County native talks about life as an attorney, broadcaster, and the &lquo; trial of the century.&rquo;"
        url="#"
        urlText="listen"
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