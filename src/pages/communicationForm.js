import React from "react"
import Layout from "../../components/Layout"
import CommunicationForm from "../../components/content-blocks/CommunicationForm"
import GenericPageSection from '../../components/page-sections/GenericPageSection'
import MobileHr from '../../components/parts/MobileHr'

export default () => {
    return (
<Layout>
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
    <GenericPageSection pad>
        <h1>Communication Form</h1>
    </GenericPageSection>

        
    <CommunicationForm />
    <GenericPageSection>
        <MobileHr />
    </GenericPageSection>
   
  
   
    
</Layout>
    )
}