import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'
import { navigate } from 'gatsby-link'

const NewsAll = (props) => {
    const [filterFilter, setFilterFilter] = useState("")
    const [pubFilter, setPubFilter] = useState("")
    const [productFilter, setProductFilter] = useState("")
    const [allFilters, setAllFilters] = useState(`type:'News & Stories' AND NOT categories.name:Classnote`)

    const { filter, pub, product } = queryString.parse(props.location.search)

    useEffect(() => {
        if (filter?.length > 0) {
            setFilterFilter(` AND categories.slug:${filter}`)
        }
        if (pub?.length > 0) {
            setPubFilter(` AND products.slug:${pub}`)
        }
        if (product?.length > 0) {
            setProductFilter(` AND products.slug:${product}`)
        }
    }, [])

    useEffect(() => {
        setAllFilters(`type:'News & Stories' AND NOT categories.name:Classnote${filterFilter}${pubFilter}${productFilter}`)
    }, [filterFilter, pubFilter, productFilter])

    const filterChange = (type, slug) => {
        if (type === "filter") {
            setFilterFilter(` AND categories.slug:${slug}`)
        } else if (type === "pub") {
            setPubFilter(` AND products.slug:${slug}`)
        } else if (type === "product") {
            setProductFilter(` AND products.slug:${slug}`)
        } else {
            return
        }
    }
    
    const clearFilters = () => {
        setFilterFilter("")
        setPubFilter("")
        setProductFilter("")
        navigate('/news/all')
    }
    
    return (
        <Layout title="All News and Stories">
            <PageSection heading="All News and Stories">
                <AlgoliaArchivePage
                indices={[{name: "All"}]}
                results={false}
                filters={allFilters}
                filterChange={filterChange}
                clearFilters={clearFilters}
                queryString={queryString.parse(props.location.search)}
                />
            </PageSection>
        </Layout>
    )
}

export default NewsAll


