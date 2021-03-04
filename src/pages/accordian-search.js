import React from "react"
import Layout from "../components/layout"
import GenericPageSection from "../components/page-sections/GenericPageSection"
import AccordianSearch from "../components/parts/AccordianSearch"
import Accordian from "../components/parts/Accordian"

const AccordionPage = () => {
  return (
    <Layout>
      <GenericPageSection>
        <AccordianSearch />
      </GenericPageSection>
      <div style={{marginTop: `50px`, marginBottom: `50px`}}></div>
      <Accordian opentext="Open" closetext="Close">
          <p>ChildElement Here</p>
      </Accordian>
    </Layout>
  )
}
export default AccordionPage
