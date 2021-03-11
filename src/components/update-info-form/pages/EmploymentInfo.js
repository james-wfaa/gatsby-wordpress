import React, { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, variantObject } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

const EmploymentInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setEmploymentInfoOnchange } = actions;
  const [countries, ] = useState(countryList().getData())

  const { register, handleSubmit, errors, formState: { submitCount } } = useForm()
  const UpdateEmploymentInfo = data =>{
    //console.log(data)

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
        <option value={country.value} key={country.value}  defaultValue={state.mailingAddress.country}>
          {country.label}
        </option>
      )
    }
    return <option value={country.value} key={country.value}>{country.label}</option>
  })

      return (
        <div>
            <IntroPageSection
              excerpt='Please make updates regarding your current employment status. Click “Save and Continue” after completing the page to ensure your changes are recorded.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form id="contact" onSubmit={handleSubmit(UpdateEmploymentInfo)}>
              { requiredFieldsCheck && (Object.keys(errors).length !== 0) && <StyledError className="topError">Please correct error(s) below</StyledError>}
              <legend>Employment Info<span className="requiredInfo">*Required Information</span></legend>
              <hr />
              <label htmlFor="startDate" className="smallThird">Start Date
                <span className="required">*</span>
                <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    defaultValue={state.employmentInfo.startDate}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Start date is required" },
                    })}
                />
                {errors.jobtitle && (
                  <StyledError>{errors.jobtitle.message}</StyledError>
                )}
              </label>
              <label htmlFor="jobTitle" className="twoThirds leftMargin">Job Title
                <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    defaultValue={state.employmentInfo.jobTitle}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
                {errors.jobTitle && (
                  <StyledError>{errors.jobTitle.message}</StyledError>
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
                      required: { value: true, message: "Business Name is required" },
                    })}
                />
                {errors.businessName && (
                  <StyledError>{errors.businessName.message}</StyledError>
                )}
              </label>
              <label htmlFor="streetAddress">Business Street Address
                <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    defaultValue={state.employmentInfo.streetAddress}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
                {errors.streetAddress && (
                  <StyledError>{errors.streetAddress.message}</StyledError>
                )}
              </label>
              <label htmlFor="streetAddressLineTwo">Street Address Line Two
                <input
                    type="text"
                    name="streetAddressLineTwo"
                    id="streetAddressLineTwo"
                    defaultValue={state.employmentInfo.streetAddressLineTwo}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.streetAddressLineTwo && (
                  <StyledError>{errors.streetAddressLineTwo.message}</StyledError>
                )}
              </label>
              <label htmlFor="city" className="bigThird">City
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
              <label htmlFor="state" className="smallThird leftMargin">State/Province/Region
                <input
                    type="text"
                    name="state"
                    id="state"
                    defaultValue={state.employmentInfo.state}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.state && (
                  <StyledError>{errors.state.message}</StyledError>
                )}
              </label>
              <label htmlFor="zipcode" className="smallThird leftMargin">Zip/Postal Code
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
              <label htmlFor="country" className="required bigThird">Country
                <select name="country" onBlur={e => updateOnChangeValues(e)} defaultValue={state.employmentInfo.country}>
                  {countryOptions}
                </select>
                {errors.country && (
                  <StyledError>{errors.country.message}</StyledError>
                )}
              </label>
              <Buttons 
                save 
                back 
                disabled={ !requiredFieldsCheck }
                error={ requiredFieldsCheck && (Object.keys(errors).length !== 0) }
                errors={errors}
                submitCount={submitCount} />
            </form>
        </div>
    )
}

export default EmploymentInfo
