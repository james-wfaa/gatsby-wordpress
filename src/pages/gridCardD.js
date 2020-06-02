import React from "react"
import Layout from "../../components/Layout"
import ContentCardD from "../../components/content-blocks/ContentCardD"
import PromoCardD from "../../components/content-blocks/PromoCardD"
import GridCardD from "../../components/content-modules/GridCardD"
import PaddedPageSection from '../../components/page-sections/PaddedPageSection'
import PageSection from '../../components/page-sections/PageSection'
import MobileHr from '../../components/parts/MobileHr'

export default () => {
    return (
<Layout>
    <PageSection>
        <MobileHr />
    </PageSection>
    <PaddedPageSection>
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

        </GridCardD>
       
    </PaddedPageSection>
    
</Layout>
    )
}