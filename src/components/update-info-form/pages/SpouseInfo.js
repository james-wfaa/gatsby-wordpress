import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import ProgressBar from './ProgressBar'
import styled from "styled-components"
import { AppContext } from "../../../context/AppContext"

const SpouseInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfo } = actions;

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  })
  const UpdateContactInfo = data =>{
    setContactInfo(data)
    setCurrentStep(1)
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
              excerpt='Let us know if we should be aware of anything regarding your spouse or partner.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form id="contact" onSubmit={handleSubmit(UpdateContactInfo)}>
              <legend>Spouse or Partner</legend>
              <hr></hr>
              <label htmlFor="spousefirstname" className="half required">Spouse/Partner First Name
                <span className="required">*</span>
                <input
                    type="text"
                    name="spousefirstname"
                    id="spousefirstname"
                    //defaultValue={state.spouseInfo.spousefirstname}
                    ref={register({
                      required: { value: true, message: "Spouse/Partner First Name is required" },
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
                {errors.spousefirstname && (
                  <StyledError>{errors.spousefirstname.message}</StyledError>
                )}
              </label>
              
              <label htmlFor="spouselastname" className="half leftMargin required">Spouse/Partner Last Name
                <span className="required">*</span>
                <input
                    type="text"
                    name="spouselastname"
                    id="spouselastname"
                    //defaultValue={state.spouseInfo.spouselastname}
                    ref={register({
                      required: { value: true, message: "Spouse/Partner Last Name is required" },
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
                {errors.spouselastname && (
                  <StyledError>{errors.spouselastname.message}</StyledError>
                )}
              </label>
              
              <label htmlFor="undergrad" className="third">Undergraduate Grad Year (if applicable)
                <input
                    type="text"
                    name="undergrad"
                    id="undergrad"
                    maxLength="4"
                    defaultValue={state.contactInfo.undergrad}
                    ref={register({
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid year",
                      },
                    })}
                />
                {errors.undergrad && (
                  <StyledError>{errors.undergrad.message}</StyledError>
                )}
              </label>
              
              <Buttons save back />
            </form>
        </div>
    )
}

export default SpouseInfo
