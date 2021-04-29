import React from 'react'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'
import SponsorAd from "../../components/content-blocks/SponsorAd"


const NoteAll = ({ data }) => {
   
    return (
        <Layout title="All Alumni Notes">
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

