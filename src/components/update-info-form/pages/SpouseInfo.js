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
  const { setCurrentStep, setSpouseInfo } = actions;

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  })
  const submitEntireForm = data =>{
    setSpouseInfo(data)
    //submit data
    setCurrentStep(8)
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
            <form id="spouseInfo" onSubmit={handleSubmit(submitEntireForm)} className="spouse-info">
              <legend>Spouse or Partner<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <label htmlFor="spousefirstname" className="half required">Spouse/Partner First Name
                <span className="required">*</span>
                <input
                    type="text"
                    name="spousefirstname"
                    id="spousefirstname"
                    //defaultValue={state.spouseInfo.spousefirstname}
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
              
              <label htmlFor="spouseUndergrad" className="third">Undergraduate Grad Year (if applicable)
                <input
                    type="text"
                    name="spouseUndergrad"
                    id="spouseUndergrad"
                    maxLength="4"
                    defaultValue={state.contactInfo.undergrad}
                    ref={register({
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid year",
                      },
                    })}
                />
                {errors.spouseUndergrad && (
                  <StyledError>{errors.spouseUndergrad.message}</StyledError>
                )}
              </label>
              <label htmlFor="undergrad">What is the update you would like to share about your spouse or partner?</label>
              <input type="radio" id="newSpouse" value="newSpouse" name="spouseUpdate"/>
              <label htmlFor="newSpouse">This is my new spouse or partner.</label>
              <input type="radio" id="deceasedSpouse" value="deceasedSpouse" name="spouseUpdate"/>
              <label htmlFor="deceasedSpouse">My spouse or partner is now deceased.</label>
              <input type="radio" id="noSpouse" value="noSpouse" name="spouseUpdate"/>
              <label htmlFor="noSpouse">I am no longer with my spouse or partner.</label>
              <input type="radio" id="none" value="none" name="spouseUpdate"/>
              <label htmlFor="none">None of the above.</label>
              <Buttons save back />
            </form>
        </div>
    )
}

export default SpouseInfo
