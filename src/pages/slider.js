import React from "react"
import Layout from "../../components/Layout"
import SimpleSlider from "../../components/content-modules/SimpleSlider"
import ContentCardD from "../../components/content-blocks/ContentCardD"
import PageSection from '../../components/page-sections/PageSection'
export default () => {
    return (

<Layout>
   <PageSection>
   <h1>Here is a SimpleSlider demo</h1>
        <SimpleSlider infinite slidesToShow="1" initialSlide="3" variableWidth centerPadding="10px"> 
            <ContentCardD 
        startDate="Feb. 23" 
        title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
        category="GAME WATCH"
        venue="Keystone Sports Review" 
        location="Indianapolis, IN" 
        />
        <ContentCardD 
        startDate="Feb. 26" 
        title="Coachella Valley"
        category="UW NOW"
        venue="La Quinta Resort and Club" 
        location="La Quinta, CA" 
        />

        <ContentCardD 
        startDate="Feb. 26" 
        title="WAA: Tucson Chapter Founders’ Day Celebration"
        category="Founder's Day"
        venue="The Lodge at Ventana Canyon" 
        location="Tucson, AZ" 
        />
        <ContentCardD 
        startDate="Feb. 23" 
        title="Wisconsin vs. Rutgers – Indianapolis Basketball Game Watch"
        category="GAME WATCH"
        venue="Keystone Sports Review" 
        location="Indianapolis, IN" 
        />
        <ContentCardD 
        startDate="Feb. 26" 
        title="Coachella Valley"
        category="UW NOW"
        venue="La Quinta Resort and Club" 
        location="La Quinta, CA" 
        />

        <ContentCardD 
        startDate="Feb. 26" 
        title="WAA: Tucson Chapter Founders’ Day Celebration"
        category="Founder's Day"
        venue="The Lodge at Ventana Canyon" 
        location="Tucson, AZ" 
        />
        </SimpleSlider>
        
    
   </PageSection>
   <PageSection><p>text after goes here</p></PageSection>
        
</Layout>

    ) 

}