import React from "react"
import Layout from "../components/layout"
import PageSection from "../components/page-sections/PageSection"
import StaffSearch from "../components/parts/StaffSearch"

const StaffSearchPage = () => {
  return (
    <Layout>
      <PageSection centered>
        <StaffSearch />
      </PageSection>
      <PageSection heading="SECOND" pageTitle><div>Organizer template</div>
        <div>Test</div>
      </PageSection>

    </Layout>
  )
}
export default StaffSearchPage
