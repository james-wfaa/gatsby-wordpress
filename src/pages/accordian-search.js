import React from "react"
import Layout from "../components/layout"
import GenericPageSection from "../components/page-sections/GenericPageSection"
import AccordianSearch from "../components/parts/AccordianSearch"

export default () => {
  return (
    <Layout>
      <GenericPageSection>
        <AccordianSearch />
      </GenericPageSection>
    </Layout>
  )
}
