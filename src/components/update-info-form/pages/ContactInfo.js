import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import styled from "styled-components"
import { AppContext } from "../../../context/AppContext"

const ContactInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfo } = actions;

  const { register, handleSubmit, watch, errors, formState: {isDirty, isValid } } = useForm({
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
              excerpt='We want to be certain we have the correct information for all UW Alumni and friends. Please take a minute to complete this brief form.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <form id="contact" onSubmit={handleSubmit(UpdateContactInfo)}>
              <legend>Contact Information<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <label htmlFor="firstname" className="half required">First Name
                <span className="required">*</span>
                {errors.firstname && (
                  <StyledError>{errors.firstname.message}</StyledError>
                )}
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    defaultValue={state.contactInfo.firstname}
                    aria-label="First Name"
                    aria-required="true"
                    ref={register({
                      required: { value: true, message: "First Name is required" },
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 letters",
                      },
                      pattern: {
                        value: /^[A-Za-z @-]+$/,
                        message: "Name must not contain numbers",
                      },
                    })}
                />
                
              </label>
              
              <label htmlFor="lastname" className="half leftMargin required">Last Name
                <span className="required">*</span>
                {errors.lastname && (
                  <StyledError>{errors.lastname.message}</StyledError>
                )}
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    aria-label="Last Name"
                    aria-required="true"
                    defaultValue={state.contactInfo.lastname}
                    ref={register({
                      required: { value: true, message: "Last Name is required" },
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 letters",
                      },
                      pattern: {
                        value: /^[A-Za-z @-]+$/,
                        message: "Name must not contain numbers",
                      },
                    })}
                />
              </label>
              <label htmlFor="othernames">Other names you use or have used in the past (maiden names, nicknames, given names etc.)
                {errors.othernames && (
                    <StyledError>{errors.othernames.message}</StyledError>
                  )}
                <input
                    type="text"
                    name="othernames"
                    id="othernames"
                    aria-label="Other names"
                    defaultValue={state.contactInfo.othernames}
                    ref={register({
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 letters",
                      },
                      pattern: {
                        value: /^[A-Za-z @-]+$/,
                        message: "Name must not contain numbers",
                      },
                    })}
                />
              </label>
              <label htmlFor="email" className="half required">Preferred Email
                <span className="required">*</span>
                {errors.email && (
                  <StyledError>{errors.email.message}</StyledError>
                )}
                <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={state.contactInfo.email}
                    aria-label="Preferred email"
                    aria-required="true"
                    ref={register({
                      required: {
                        value: true,
                        message: "Preferred Email is required",
                      },
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Must be valid email address",
                      },
                    })}
                />
              </label>
              <label htmlFor="phone" className="half leftMargin">Mobile Phone
                {errors.phone && (
                  <StyledError>{errors.phone.message}</StyledError>
                )}
                <input
                    type="phone"
                    name="phone"
                    id="phone"
                    aria-label="Phone Number"
                    defaultValue={state.contactInfo.phone}
                    ref={register({
                      pattern: {
                        value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        message: "Must be a valid phone number",
                      },
                    })}
                />
              </label>
              <label htmlFor="undergrad" className="third">Undergraduate Year (if applicable)
                {errors.undergrad && (
                  <StyledError>{errors.undergrad.message}</StyledError>
                )}
                <input
                    type="text"
                    name="undergrad"
                    id="undergrad"
                    maxLength="4"
                    aria-label="Undergraduate Year (if applicable)"
                    defaultValue={state.contactInfo.undergrad}
                    ref={register({
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid year",
                      },
                    })}
                />
              </label>
              <label htmlFor="postgrad" className="third leftMargin">Postgraduate Year(s) (if applicable)
                {errors.postgrad && (
                  <StyledError>{errors.postgrad.message}</StyledError>
                )}
                <input
                    type="text"
                    name="postgrad"
                    id="postgrad"
                    maxLength="4"
                    aria-label="Postgraduate Years (if applicable)"
                    defaultValue={state.contactInfo.postgrad}
                    ref={register({
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid year",
                      },
                    })}
                />
              </label>
              <Buttons 
                save
                //disabled={Object.keys(errors).length > 0 ? true : false} />
                disabled={!isDirty || !isValid } />
            </form>
        </div>
    )
}

export default ContactInfo

