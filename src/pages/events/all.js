import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { sizes, breakpoints } from '../../components/css-variables'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'


const EventsAll = () => {
    return (
      <Layout>
        <PageSection heading='All Events'>
          <AlgoliaArchivePage
            indices={[{ name: 'All' }]}
            results={false}
            filters={'type:Event'}
            card={'Event'}
          />
        </PageSection>
      </Layout>
    );
}

export default EventsAll

