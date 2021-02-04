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
  const { setCurrentStep, setEmploymentInfo, setEmploymentInfoOnchange } = actions;
  const [countries, setCountries] = useState(countryList().getData())

  const { register, handleSubmit, watch, errors,  formState: { isValid } } = useForm({
    mode: "onChange",
  })
  const UpdateEmploymentInfo = data =>{
    //setEmploymentInfo(data)

    //figure out next page
    let currentOrder = state.numberOfSteps
    let currentStep = state.currentStep
    let currentPlaceInOrder = currentOrder.indexOf(currentStep)
    let nextStep = currentOrder[currentPlaceInOrder + 1]
    setCurrentStep(nextStep)
  }

  const updateOnChangeValues = (e) => {
    setEmploymentInfoOnchange([e.target.name, e.target.value])
  }

  const requiredFieldsCheck = state.employmentInfo.businessName !== '' && state.employmentInfo.startDate !== '' ;

  const countryOptions = countries.map(country => {
    if (country.value === state.mailingAddress.country) {
      return (
        <option value={country.value} key={country.value} selected>
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
              excerpt='Please update your employment info and click “Save and Continue”.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form id="contact" onSubmit={handleSubmit(UpdateEmploymentInfo)}>
              <legend>Employment Info<span className="requiredInfo">*Required Information</span></legend>
              <hr />
              <label htmlFor="startDate" className="half">Start Date
                <span className="required">*</span>
                <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    defaultValue={state.employmentInfo.startDate}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.jobtitle && (
                  <StyledError>{errors.jobtitle.message}</StyledError>
                )}
              </label>
              <label htmlFor="jobtitle" className="half leftMargin">Job Title
                <input
                    type="text"
                    name="jobtitle"
                    id="jobtitle"
                    defaultValue={state.employmentInfo.jobtitle}
                    onChange={e => updateOnChangeValues(e)}
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
              <label htmlFor="businessName" className="required">Business Name
                <span className="required">*</span>
                <input
                    type="text"
                    name="businessName"
                    id="businessName"
                    defaultValue={state.employmentInfo.businessName}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 letters",
                      },
                    })}
                />
                {errors.businessname && (
                  <StyledError>{errors.businessname.message}</StyledError>
                )}
              </label>
              <label htmlFor="streetaddress">Business Street Address
                <input
                    type="text"
                    name="streetaddress"
                    id="streetaddress"
                    defaultValue={state.employmentInfo.streetaddress}
                    onChange={e => updateOnChangeValues(e)}
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
                    defaultValue={state.employmentInfo.streetaddresstwo}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.streetaddresstwo && (
                  <StyledError>{errors.streetaddresstwo.message}</StyledError>
                )}
              </label>
              <label htmlFor="city" className="third">City
                <input
                    type="text"
                    name="city"
                    id="city"
                    defaultValue={state.employmentInfo.city}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.city && (
                  <StyledError>{errors.city.message}</StyledError>
                )}
              </label>
              <label htmlFor="state" className="third leftMargin">State/Province/Region
                <input
                    type="text"
                    name="state"
                    id="state"
                    defaultValue={state.employmentInfo.state}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.postgrad && (
                  <StyledError>{errors.postgrad.message}</StyledError>
                )}
              </label>
              <label htmlFor="zipcode" className="third leftMargin">Zip/Postal Code
                <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    defaultValue={state.employmentInfo.zipcode}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.zipcode && (
                  <StyledError>{errors.zipcode.message}</StyledError>
                )}
              </label>
              <label htmlFor="country" className="required third">Country
                <select name="country" onChange={e => updateOnChangeValues(e)} defaultValue={state.mailingAddress.country}>
                  {countryOptions}
                </select>
                {errors.country && (
                  <StyledError>{errors.country.message}</StyledError>
                )}
              </label>
              <Buttons save back disabled={ !requiredFieldsCheck || !isValid } />
            </form>
        </div>
    )
}

export default EmploymentInfo
