import React from "react"
import Layout from "../../components/Layout"
import ContentCardD from "../../components/content-blocks/ContentCardD"
import PromoCardD from "../../components/content-blocks/PromoCardD"
import GridCardD from "../../components/content-modules/GridCardD"
import GenericPageSection from '../../components/page-sections/GenericPageSection'
import MobileHr from '../../components/parts/MobileHr'

export default () => {
    return (
<Layout>

<GenericPageSection pad>
        <GridCardD>
            <ContentCardD 
            startDate="Feb. 23" 
            endDate="Feb. 28"
            title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
            category="GAME WATCH"
            venue="Keystone Sports Review" 
            location="Indianapolis, IN" 
            url="#####"
            />

            <ContentCardD 
            startDate="Feb. 26" 
            title="Coachella Valley"
            category="UW NOW"
            venue="La Quinta Resort and Club" 
            location="La Quinta, CA" 
            url="######"
            />

            <ContentCardD 
            startDate="Feb. 26" 
            title="WAA: Tucson Chapter Founders’ Day Celebration"
            category="Founder's Day"
            venue="The Lodge at Ventana Canyon" 
            location="Tucson, AZ" 
            url="/"
            />

            <ContentCardD 
            startDate="Mar. 22" 
            endDate="Apr. 4"
            title="Singapore, Thailand, Angkor Wat"
            category="Travel"
            location="Southeast Asia" 
            url="/"
            />

            <ContentCardD 
            title="One on One at One Alumni Place: Deborah Blum MA’82"
            category="video"
            excerpt="WAA chief alumni officer Sarah Schutt talks with author Deb Blum 
            MA’82 about her latest book, Poison Squad. Blum is a former UW professor of 
            journalism, and Poison Squad is the university’s 2019–20 selection for Go Big Read."
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
            url="#####"
            />

        </GridCardD>
       
</GenericPageSection>
</Layout>
    )
}