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

const IdentityInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfo } = actions;
  const [countries, setCountries] = useState(countryList().getData())

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
  const countryOptions = countries.map(country => {
    if (country.value === "US") {
      return (
        <option value={country.value} selected>
          {country.label}
        </option>
      )
    }
    return <option value={country.value}>{country.label}</option>
  })
  
    let variantObject = {
      background_color: colors.formIntroBg,
      color: colors.bgRed,
      scroll_color: colors.bgRed,
      text_align: `center`
    }
      return (
        <div>
            <IntroPageSection
              excerpt='Please let us know anything you wish to share about your race/ethnicity as well as your identity.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep} />
            <form className="identity-info" id="contact" onSubmit={handleSubmit(UpdateContactInfo)}>
              <legend>Race/Ethnicity/Identity<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <input type="checkbox" name="select1" id="address" />
              <label htmlFor="select1" selected>American Indian/Alaska Native</label>
              <input type="checkbox" name="select2" id="phone" />
              <label htmlFor="select2" selected>Black/African-American</label>
              <input type="checkbox" name="select3" id="employment" />
              <label htmlFor="select3" selected>Native Hawaiian/Other Pacific Islander</label>
              <input type="checkbox" name="select4" id="demographic" />
              <label htmlFor="select4" selected>Asian/Asian American</label>
              <input type="checkbox" name="select5" id="spouse" />
              <label htmlFor="select5" selected>Hispanic/Latinx</label>
              <input type="checkbox" name="select6" id="spouse" />
              <label htmlFor="select6" selected>White/Caucasian</label>
              <input type="checkbox" name="select7" id="spouse" />
              <label htmlFor="select7" selected>Not Specified</label>
              <label htmlFor="origincountry" className="half">What is your country of origin?
                <select name="country" /*onChange={e => handleCountryChange(e)}*/>
                  {countryOptions}
                </select>
              </label>
              <label htmlFor="identitydescrip">What else is important to your identity?
                <input
                    type="textbox"
                    name="identitydescrip"
                    id="identitydescrip"
                    //defaultValue={state.MailingAddress.streetaddress}
                    ref={register({
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 letters",
                      },
                    })}
                />
                {errors.identitydescrip && (
                  <StyledError>{errors.identitydescrip.message}</StyledError>
                )}
              </label>
              <Buttons save back />
            </form>
        </div>
    )
}

export default IdentityInfo
