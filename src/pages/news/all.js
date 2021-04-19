import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import Layout from '../../components/layout'
import PageSection from '../../components/page-sections/PageSection'
import AlgoliaArchivePage from '../../components/parts/AlgoliaSearch/AlgoliaArchivePage'

const NewsAll = (props) => {
    const [filterFilter, setFilterFilter] = useState("")
    const [pubFilter, setPubFilter] = useState("")
    const [productFilter, setProductFilter] = useState("")
    const [allFilters, setAllFilters] = useState('type:Post AND NOT categories.name:Classnote')

    const { filter, pub, product } = queryString.parse(props.location.search)

    useEffect(() => {
        if (filter?.length > 0) {
            setFilterFilter(` AND categories.slug:${filter}`)
        }
        if (pub?.length > 0) {
            setPubFilter(` AND publication.slug:${pub}`)
        }
        if (product?.length > 0) {
            setProductFilter(` AND product.slug:${product}`)
        }
    }, [])

    useEffect(() => {
        setAllFilters(`type:Post AND NOT categories.name:Classnote${filterFilter}${pubFilter}${productFilter}`)
    }, [filterFilter, pubFilter, productFilter])

    let filterChange = (type, slug) => {

        if (type === "filter") {
            setFilterFilter(` AND categories.slug:${slug}`)
        } else if (type === "pub") {
            setPubFilter(` AND publication.slug:${slug}`)
        } else if (type === "product") {
            setProductFilter(` AND product.slug:${slug}`)
        } else {
            return
        }
      }

    return (
        <Layout>
            <PageSection heading="All News and Stories">
                <AlgoliaArchivePage
                indices={[{name: "All"}]}
                results={false}
                filters={allFilters}
                filterChange={filterChange}
                />
            </PageSection>
        </Layout>
    )
}

export default NewsAll


