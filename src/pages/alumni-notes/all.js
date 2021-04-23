import React from 'react'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'

const NoteAll = ({ data }) => {
   
    return (
        <Layout title="All Alumni Notes">
            <PageSection heading="All Alumni Notes">
            <AlgoliaArchivePage
                indices={[{name: "All"}]}
                results={false}
                filters={'type:Post AND categories.name:Classnote'}
            />
                {/* <CardContainer>{cards}</CardContainer> */}
            </PageSection>
        </Layout>
    )
}

export default NoteAll

