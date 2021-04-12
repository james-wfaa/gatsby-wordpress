import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'

const NewsAll = ({ data }) => {

    return (
        <Layout>
            <PageSection heading="All News and Story">
                <AlgoliaArchivePage
                indices={[{name: "All"}]}
                results={false}
                filters={'type:Post AND NOT categories.name:Classnote'}
                />
            </PageSection>
        </Layout>
    )
}

export default NewsAll


