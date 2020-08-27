import React from "react"
import Layout from "../components/layout"
import CommunicationForm from "../components/content-blocks/CommunicationForm"
import GenericPageSection from '../components/page-sections/GenericPageSection'
import MobileHr from '../components/parts/MobileHr'

export default () => {
    return (
<Layout>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <h1>Communication Form</h1>
        
        <h2>Done so far:</h2>
        <p>After typing two characters into the First Name field, the rest of the form will reveal itself.</p>
        <p>After all fields have been entered (which currently means at least 2 characters in each field), the submit button will become active.<br/>
        <strong>NOTE: use letters for the postal code field for now (proper validation to come later)</strong></p>
        <h2>Not done yet:</h2>
        <ul>
            <li>Proper validation of all fields based on specific rules</li>
            <li>Display of form validation messages</li>
            <li>Addition of country dropdown, country/postal code interaction</li>
        </ul>
    </GenericPageSection>

        
    <CommunicationForm />
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
   
  
   
    
</Layout>
    )
}