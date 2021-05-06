import React from 'react'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'
import SponsorAd from "../../components/content-blocks/SponsorAd"


const NoteAll = ({ data }) => {
    if (typeof window !== "undefined" && window.location.href.includes('chapters.uwalumni.com')) {
        const fixedUrl = window.location.href.replace('chapters.uwalumni.com','www.uwalumni.com')
        window.location.replace(fixedUrl)
      }
   
    return (
        <Layout title="All Alumni Notes" url="/alumni-notes/all">
            <PageSection heading="All Alumni Notes">
            <AlgoliaArchivePage
                indices={[{name: "All"}]}
                results={false}
                filters={'type:"Alumni Notes"'}
            />
                {/* <CardContainer>{cards}</CardContainer> */}
            </PageSection>
            <SponsorAd />
            
        </Layout>
    )
}

export default NoteAll

