import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import ProgressBar from './ProgressBar'
import styled from "styled-components"
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

const EmploymentInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfo } = actions;

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  })
  const UpdateContactInfo = data =>{
    setContactInfo(data)
    let currentOrder = state.numberOfSteps
        let currentStep = state.currentStep
        let currentPlaceInOrder = currentOrder.indexOf(currentStep)
        let nextStep = currentOrder[currentPlaceInOrder + 1]
        console.log( nextStep)
        setCurrentStep(nextStep)
  }
  
    let variantObject = {
      background_color: colors.formIntroBg,
      color: colors.bgRed,
      scroll_color: colors.bgRed,
      text_align: `center`
    }
      return (
        <div>
            <IntroPageSection
              excerpt='Please update your employment info and click “Save and Continue”.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form id="contact" onSubmit={handleSubmit(UpdateContactInfo)}>
              <legend>Employment Info<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <label htmlFor="bussinessname" className="half required">Business Name
                <input
                    type="text"
                    name="bussinessname"
                    id="bussinessname"
                    //defaultValue={state.employmentInfo.bussinessname}
                    ref={register({
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 letters",
                      },
                    })}
                />
                {errors.bussinessname && (
                  <StyledError>{errors.bussinessname.message}</StyledError>
                )}
              </label>
              <label htmlFor="jobtitle" className="half leftMargin">Job Title
                <input
                    type="text"
                    name="jobtitle"
                    id="jobtitle"
                    //defaultValue={state.employmentInfo.jobtitle}
                    ref={register({
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 letters",
                      },
                      pattern: {
                        value: /^[A-Za-z @-]+$/,
                        message: "Job title must not contain numbers",
                      },
                    })}
                />
                {errors.jobtitle && (
                  <StyledError>{errors.jobtitle.message}</StyledError>
                )}
              </label>
              <label htmlFor="streetaddress">Business Street Address
                <span className="required">*</span>
                <input
                    type="text"
                    name="streetaddress"
                    id="streetaddress"
                    //defaultValue={state.MailingAddress.streetaddress}
                    ref={register({
                      
                    })}
                />
                {errors.streetaddress && (
                  <StyledError>{errors.streetaddress.message}</StyledError>
                )}
              </label>
              <label htmlFor="streetaddresstwo">Street Address Line Two
                <input
                    type="text"
                    name="streetaddresstwo"
                    id="streetaddresstwo"
                    //defaultValue={state.MailingAddress.streetaddresstwo}
                    ref={register({
                      
                    })}
                />
                {errors.streetaddresstwo && (
                  <StyledError>{errors.streetaddresstwo.message}</StyledError>
                )}
              </label>
              <label htmlFor="city" className="third">City
                <span className="required">*</span>
                <input
                    type="text"
                    name="city"
                    id="city"
                    //defaultValue={state.MailingAddress.city}
                    ref={register({
                      
                    })}
                />
                {errors.city && (
                  <StyledError>{errors.city.message}</StyledError>
                )}
              </label>
              <label htmlFor="state" className="third leftMargin">State/Province/Region
                <span className="required">*</span>
                <input
                    type="text"
                    name="state"
                    id="state"
                    //defaultValue={state.contactInfo.postgrad}
                    ref={register({
                      
                    })}
                />
                {errors.postgrad && (
                  <StyledError>{errors.postgrad.message}</StyledError>
                )}
              </label>
              <label htmlFor="zipcode" className="third leftMargin">Zip/Postal Code
                <span className="required">*</span>
                <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    //defaultValue={state.contactInfo.postgrad}
                    ref={register({
                      
                    })}
                />
                {errors.zipcode && (
                  <StyledError>{errors.zipcode.message}</StyledError>
                )}
              </label>
              <Buttons save back />
            </form>
        </div>
    )
}

export default EmploymentInfo
