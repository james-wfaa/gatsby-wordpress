import React from "react"
import Layout from "../components/layout"
import GenericPageSection from "../components/page-sections/GenericPageSection"
import PageSection from "../components/page-sections/PageSection"

import AccordianSearch from "../components/parts/AccordianSearch"
import Accordian from "../components/parts/Accordian"
import StaffSearchModal from "../components/content-blocks/StaffSearch"


const { width } = '750px'
const StaffSearchPage = () => {
  return (
    <Layout>
      <PageSection centered>
        <StaffSearchModal
        />
      </PageSection>
      <PageSection heading="SECOND" pageTitle><div>Organizer template</div>
        <div>Test</div>
      </PageSection>

    </Layout>
  )
}
export default StaffSearchPage
