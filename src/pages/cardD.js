import React from "react"
import Layout from "../../components/Layout"
import ContentCardD from "../../components/content-blocks/ContentCardD"
import PromoCardD from "../../components/content-blocks/PromoCardD"
import PageSection from '../../components/page-sections/PageSection'
export default () => {
    return (
<Layout>
    <PageSection>
    <p>This is Card 'D' - the square tile card. These are usually found in tile grids.</p>

        <p>There are several variations. first, here's an Event Card D.
        </p>

        <ContentCardD 
        date="Apr. 3" 
        title="The Past, Present and Future of Rainstorms and Floods in Wisconsin and Around the World"
        category="Global Hotspots"
        venue="Fluno Center" 
        location="Madison" 
        />
        <p>Here's a Story Card D.</p>
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