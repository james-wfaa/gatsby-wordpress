import React, { useState, useEffect } from "react"
//import { useForm } from "react-hook-form"
import './UpdateInfoForm.css';
import styled from 'styled-components'
import Layout from "../components/layout"
import ContactInfo from "../components/update-info-form/pages/ContactInfo"
import SelectSteps from "../components/update-info-form/pages/SelectSteps"
import Context from '../components/update-info-form/form-context';


class UpdateInfoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      contactInfo: {
        firstname: '',
        lastname: '',
        othernames: '',
        email: '',
        phone: '',
        undergrad: '',
        postgrad: '',
      },
      selectedSteps: {
        address: true,
        phone: true,
        employment: true,
        demographic: true,
        spouse: true,
      },

      

    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  renderCurrentStep = () => {
    switch(this.state.currentStep){
      case 1:
        return <ContactInfo onChange={this.handleInputChange} />
      case 2:
        return <SelectSteps />
      case 3:
        return <SelectSteps />
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
    if (this.state.currentStep === 1){
      this.setState({
        contactInfo:{
          [name]: value
        }
      });
    }
  }


  onSubmit = (data) => {
    console.log(data)
  }

  render(){
    const contextValue = {
      currentStep: this.state.currentStep,
      handleNextBtn: this.handleNextBtn,
      handleBackBtn: this.handleBackBtn,
    }
    return (
      <Layout>
        <Context.Provider value={contextValue}>
          <div  className="updateInfo">
          {this.renderCurrentStep()}
          <p className="disclaimer">By entering your information above, you give consent to the Wisconsin Foundation and Alumni Association to store your information and communicate with you. You can withdraw your consent at any time by emailing recordsupdates@supportuw.org. To learn more, please review our Privacy Statement.</p>
          </div>
        </Context.Provider>
      </Layout>
    )
  }
}


export default UpdateInfoForm