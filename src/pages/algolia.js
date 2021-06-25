import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageSection from "../components/page-sections/PageSection"
import eventToAlgoliaRecordObject from "../utils/algolia-queries"


const Algolia = () => {
    console.log(eventToAlgoliaRecordObject)
    return (
        <Layout><PageSection heading="Algolia Records">Check the console log. </PageSection></Layout>
    )
}
export default Algolia