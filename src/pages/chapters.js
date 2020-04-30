import React from "react"
import Layout from "../../components/Layout"
import ContentCardD from "../../components/content-blocks/ContentCardD"
import PromoCardD from "../../components/content-blocks/PromoCardD"

export default () => {
    return (
<Layout>
    <div>uwalumni.com | homepage</div>
    <ContentCardD 
    date="Apr. 3" 
    title="The Past, Present and Future of Rainstorms and Floods in Wisconsin and Around the World"
    category="Global Hotspots"
    venue="Fluno Center" 
    location="Madison" 
    />
    <ContentCardD 
    title="More than Madison and Milwaukee"
    category="story"
    excerpt="Ever since his days as a high schooler in Racine, Wisconsin, 
    Tito Diaz has worked to connect multicultural students with academic success."
    url="#"

    />
    <PromoCardD
    title="Shop the UW Alumni Store"
    url="#" />
    <PromoCardD
    title="More About This Chapter" 
    url="#"
    isNav
    />
</Layout>
    )
}