import React from "react"
import Layout from "../components/layout"
import ContentCardD from "../components/content-blocks/ContentCardD"
import PromoCardD from "../components/content-blocks/PromoCardD"
import SponsorAd from "../components/content-blocks/SponsorAd"
import GenericPageSection from '../components/page-sections/GenericPageSection'
import MobileHr from '../components/parts/MobileHr'

const CardDPage = () => {
    return (
<Layout>
<GenericPageSection>
        <SponsorAd  className="Text" />
    </GenericPageSection>

    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <h1>Card D (square tile card)</h1>
        <p>This is Card 'D' - the square tile card. These are usually found in tile grids.</p>

        <p>There are several variations. first, here are some event cards.
        </p>

        
        <ContentCardD 
        startDate="Feb. 23" 
        endDate="Feb. 28"
        title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
        category="GAME WATCH"
        venue="Keystone Sports Review" 
        location="Indianapolis, IN" 
        url="#####"
        />
    </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>On mobile, these should be 256px wide, with an 18px padding.</p>
        <ContentCardD 
        startDate="Feb. 26" 
        title="Coachella Valley"
        category="UW NOW"
        venue="La Quinta Resort and Club" 
        location="La Quinta, CA" 
        url="######"
        />
        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        
        <p>On tablet and larger, these should be 344px wide, with 32px padding.</p>

        <ContentCardD 
        startDate="Feb. 26" 
        title="WAA: Tucson Chapter Founders’ Day Celebration"
        category="Founder's Day"
        venue="The Lodge at Ventana Canyon" 
        location="Tucson, AZ" 
        url="/"
        />
    </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
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
    </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
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
    </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>The red title text should be Mrs. Eaves Narrow, Bold &amp; Italic - 20px/24px. </p>

        <ContentCardD 
        startDate="Mar. 31" 
        title="Higher Education Cybersecurity: UW–Madison Is Moving FORWARD!"
        category="HEALTHY AGING SERIES"
        venue="Capitol Lakes Retirement Community"
        location="Madison" 
        url="/"
        />
        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>The category text should be 13px/14px, and boldness at "Black".</p>
        <ContentCardD 
        startDate="Apr. 3" 
        title="The Past, Present and Future of Rainstorms and Floods in Wisconsin and Around the World"
        category="Global Hotspots"
        venue="Fluno Center" 
        location="Madison" 
        url="/"
        />
        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>Venue &amp; location lines should be 16px/18px. Location should be bold. </p>

        <ContentCardD 
        startDate="Apr. 23" 
        title="UW–Madison Day at the State Capitol"
        venue="Park Hotel"
        location="Madison" 
        url="/"
        />
        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>The date and title should present as clickable links, changing color and showing underline when the card is hovered over.</p>

        <ContentCardD 
        startDate="Mar. 22" 
        endDate="Apr. 4" 
        title="Singapore, Thailand, Angkor Wat"
        category="Travel"
        location="Southeast Asia" 
        url="/"
        />
</GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>Now here are some story cards.</p>
        <ContentCardD 
        title="More than Madison and Milwaukee"
        category="story"
        excerpt="Ever since his days as a high schooler in Racine, Wisconsin, 
        Tito Diaz has worked to connect multicultural students with academic success."
        url="#"
        />
        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>Padding should be 18px at mobile and 32px at desktop.</p>
        <ContentCardD 
        title="One on One at One Alumni Place: Deborah Blum MA’82"
        category="video"
        excerpt="WAA chief alumni officer Sarah Schutt talks with author Deb Blum 
        MA’82 about her latest book, Poison Squad. Blum is a former UW professor of 
        journalism, and Poison Squad is the university’s 2019–20 selection for Go Big Read."
        url="#"
        />
        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>The entire card is a clickable link; but the title should present as a clickable text link, 
            along with the "Read More" text after the excerpt.</p>
        <ContentCardD 
        title="We Can Guess Your Generation Based on Your Snow-Day Schedule"
        category="poll"
        excerpt="Few gifts are better to UW students than a school-wide snow day. Tell us 
        how you’d spend your snow day and we’ll guess your generation."
        url="#"
        />
        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>Excerpt copy should be 16px at mobile and 18px at desktop.</p>
        <ContentCardD 
        title="The Long and Winding Road from Major to Career"
        category="story"
        excerpt="From YouTube star to professional BMX rider, Badger alums have proven the versalitity of a UW diploma. "
        urlText="Via On Wisconsin Magazine."
        linkStyle="arrow"
        url="#"
        />
        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <p>&nbsp;</p>
        <ContentCardD 
        title="Badgering: Sasanehsaeh Pyawasay ’07, MS’09"
        category="story"
        excerpt="As the University of Wisconsin System’s first Native American student success coordinator, Sasanehsaeh Pyawasay 
        advocates on behalf of Native students — particularly those from within the 12 tribes resident in Wisconsin."
        url="#"
        />
        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
                <p>&nbsp;</p>

        <ContentCardD 
        title="Proud to be a Badger: Roger Hamilton"
        category="story"
        excerpt="As we watched the procession of first responders pass at the memorial for Officer Garrett Swasey, my two boys 
        and I were thrilled to see a University of Wisconsin Police vehicle. I’m proud to be a Badger!"
        url="#"
        />
                <p>&nbsp;</p>

                </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <ContentCardD 
        title="Academy Award Badgers"
        category="story"
        excerpt="The Academy Awards nominations were just announced. Are any Badgers on the list?"
        url="#####"
        />
                <p>&nbsp;</p>

                </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <ContentCardD 
        title="Former Fox News anchor Greta Van Susteren featured in Wisconsin Alumni Association’s Thank You, 72 podcast and radio series"
        category="podcast"
        excerpt="Outagamie County native talks about life as an attorney, broadcaster, and the &ldquo;trial of the century.&rdquo;"
        url="######"
        urlText="listen"
        />
        

        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>


    <GenericPageSection pad>
        <h1>Promo Card (square tile card)</h1>
        <p>This is the Promotional variant of Card 'D'. These are usually found in tile grids as accents.</p>
        <p>On mobile, these should be 256px wide.</p>

        <PromoCardD 
        title="Get Out And Travel"
        url="#######"
        />

        <h1>Nav Card (square tile card)</h1>
        <p>This is a variant of the Promo card meant to be used as navigation. These are usually found in grids with other Nav cards. Example can be seen on the Individual Groups page in XD</p>

        <PromoCardD 
        title="New York BA Alumni"
        url="#######"
        isNav
        />
        

        </GenericPageSection>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
   
  
   
    
</Layout>
    )
}
export default CardDPage