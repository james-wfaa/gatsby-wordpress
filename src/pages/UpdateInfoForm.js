import React, { useState, useEffect } from "react"
//import { useForm } from "react-hook-form"
import './UpdateInfoForm.css';
import styled from 'styled-components'
import Layout from "../components/layout"
import ContactInfo from "../components/update-info-form/pages/ContactInfo"
import SelectSteps from "../components/update-info-form/pages/SelectSteps"


class UpdateInfoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,

    }
  }

  renderCurrentStep = () => {
    switch(this.state.currentStep){
      case 1:
        return <ContactInfo />
      case 2:
        return <SelectSteps />
      default:
        return <ContactInfo />
    }
  }

  handleNextBtn = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  handleBackBtn = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }


  onSubmit = (data) => {
    console.log(data)
  }

  render(){
    return (
      <Layout>
        <div  className="updateInfo">
        {this.renderCurrentStep()}
        <p className="disclaimer">By entering your information above, you give consent to the Wisconsin Foundation and Alumni Association to store your information and communicate with you. You can withdraw your consent at any time by emailing recordsupdates@supportuw.org. To learn more, please review our Privacy Statement.</p>
        </div>
      </Layout>
    )
  }
}


const StyledUpdateInfoForm = styled(UpdateInfoForm)`
  
    
  
`

export default StyledUpdateInfoForm