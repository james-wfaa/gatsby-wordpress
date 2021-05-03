import React from 'react'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'
import SponsorAd from "../../components/content-blocks/SponsorAd"



const EventsAll = () => {
    return (
      <Layout title="All Events" url="/events/all">
        <PageSection heading='All Events'>
          <AlgoliaArchivePage
            indices={[{ name: 'All' }]}
            results={false}
            filters={'type:Events OR type:Trips'}
            card={'Event'}
          />
        </PageSection>
        <SponsorAd />
      </Layout>
    );
}

export default EventsAll

