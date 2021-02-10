import React from "react"
import Layout from "../components/layout"
import CommunicationForm from "../components/content-blocks/CommunicationForm"
import GenericPageSection from '../components/page-sections/GenericPageSection'
import MobileHr from '../components/parts/MobileHr'

const CommForm = () => {
    return (
      <Layout>
        <GenericPageSection>
          <MobileHr />
        </GenericPageSection>
        <GenericPageSection pad>
          <h1>Communication Form</h1>

          <h2>Done so far:</h2>
          <p>
            After typing into the First Name field, the rest of
            the form will reveal itself.
          </p>
          <p>
            After all fields have been entered and validated, the submit button will become active.
            <br />
          </p>
        </GenericPageSection>

        <CommunicationForm />
        <GenericPageSection>
          <MobileHr />
        </GenericPageSection>
      </Layout>
    )
}
export default CommForm