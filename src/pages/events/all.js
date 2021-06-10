import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'
import SponsorAd from "../../components/content-blocks/SponsorAd"
import { navigate } from 'gatsby-link'



const EventsAll = (props) => {
  if (typeof window !== "undefined" && window.location.href.includes('chapters.uwalumni.com')) {
    const fixedUrl = window.location.href.replace('chapters.uwalumni.com','www.uwalumni.com')
    window.location.replace(fixedUrl)
  }
    const [filterFilter, setFilterFilter] = useState("")
    const [productFilter, setProductFilter] = useState("")
    const [allFilters, setAllFilters] = useState(`type:'Events' OR type:'Trips`)

    const { filter, product } = queryString.parse(props.location.search)

    useEffect(() => {
        if (filter?.length > 0) {
            setFilterFilter(` AND categories.slug:${filter}`)
        }
        if (product?.length > 0) {
            setProductFilter(` AND products.slug:${product}`)
        }
    }, [])

    useEffect(() => {
        setAllFilters(`type:'Events' OR type:'Trips'${filterFilter}${productFilter}`)
    }, [filterFilter, productFilter])

    const filterChange = (type, slug) => {
        if (type === "filter") {
            setFilterFilter(` AND categories.slug:${slug}`)
        } else if (type === "product") {
            setProductFilter(` AND products.slug:${slug}`)
        } else {
            return
        }
    }
    
    const clearFilters = () => {
        setFilterFilter("")
        setProductFilter("")
        navigate('/events/all')
    }
    console.log(allFilters, queryString.parse(props.location.search))
    return (
      <Layout title="All Events" url="/events/all">
        <PageSection heading='All Events'>
          <AlgoliaArchivePage
            indices={[{ name: 'All' }]}
            results={false}
            filters={allFilters}
            filterChange={filterChange}
            clearFilters={clearFilters}
            queryString={queryString.parse(props.location.search)}
            card={'Event'}
          />
        </PageSection>
        <SponsorAd />
      </Layout>
    );
}

export default EventsAll

