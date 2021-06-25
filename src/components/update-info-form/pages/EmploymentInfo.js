import React, { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, handleFormSubmit, FormGeneralError } from '../form-helpers'
import PageSection from '../../page-sections/PageSection'
import Buttons from './../FormButtons'
import { colors } from '../../css-variables'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

const EmploymentInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setEmploymentInfoOnchange } = actions;
  const [countries, ] = useState(countryList().getData())
  const [generalError, setGeneralError] = useState('')

  const { register, handleSubmit, errors, formState: { submitCount } } = useForm({mode : 'onChange'})
  const UpdateEmploymentInfo = data =>{
    handleFormSubmit(state).then((returnedData) =>{
      if(returnedData.is_valid === false){
        throw new Error('something went wrong with submitting the form');
      }
    }).then(() => {
      let currentOrder = state.numberOfSteps
      let currentStep = state.currentStep
      let currentPlaceInOrder = currentOrder.indexOf(currentStep)
      let nextStep = currentOrder[currentPlaceInOrder + 1]
      setCurrentStep(nextStep)
    }).catch(err => {setGeneralError(err.message)})
  }

  const updateOnChangeValues = (e) => {
    setEmploymentInfoOnchange([e.target.name, e.target.value])
  }

  const requiredFieldsCheck = state.employmentInfo.businessName !== '' && state.employmentInfo.startDate !== '' ;

  const countryOptions = countries.map(country => {
    if (country.value === state.employmentInfo.businessCountry) {
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
            <PageSection
              excerpt='Please provide updates regarding your current employment status.'
              heading='Update My Info'
              headingCompact
              backgroundColor={colors.formIntroBg}
              pageTitle
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            {generalError && (
              <FormGeneralError>We’re sorry, but a network issue prevented us from saving your information. Our team has been notified, but you can <a href="mailto:web@supportuw.org">contact WAA</a> if you need immediate assistance.</FormGeneralError>
            )}
            <form id="contact" onSubmit={handleSubmit(UpdateEmploymentInfo)}>
              { requiredFieldsCheck && (Object.keys(errors).length !== 0) && <StyledError className="topError">Please correct error(s) below</StyledError>}
              <legend>Employment Information and Address<span className="requiredInfo">*Required Information</span></legend>
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
                    maxLength="150"
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
                    maxLength="150"
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
              <label htmlFor="businessStreetAddress">Business Street Address
                <input
                    type="text"
                    name="businessStreetAddress"
                    id="businessStreetAddress"
                    maxLength="150"
                    defaultValue={state.employmentInfo.businessStreetAddress}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
                {errors.businessStreetAddress && (
                  <StyledError>{errors.businessStreetAddress.message}</StyledError>
                )}
              </label>
              <label htmlFor="businessStreetAddressLineTwo">Street Address Line Two
                <input
                    type="text"
                    name="businessStreetAddressLineTwo"
                    id="businessStreetAddressLineTwo"
                    maxLength="150"
                    defaultValue={state.employmentInfo.businessStreetAddressLineTwo}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.businessStreetAddressLineTwo && (
                  <StyledError>{errors.businessStreetAddressLineTwo.message}</StyledError>
                )}
              </label>
              <label htmlFor="businessCity" className="bigThird">City
                <input
                    type="text"
                    name="businessCity"
                    id="businessCity"
                    maxLength="90"
                    defaultValue={state.employmentInfo.businessCity}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.businessCity && (
                  <StyledError>{errors.businessCity.message}</StyledError>
                )}
              </label>
              <label htmlFor="businessState" className="smallThird leftMargin">State/Province/Region
                <input
                    type="text"
                    name="businessState"
                    id="businessState"
                    maxLength="150"
                    defaultValue={state.employmentInfo.businessState}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.businessState && (
                  <StyledError>{errors.businessState.message}</StyledError>
                )}
              </label>
              <label htmlFor="businessZipcode" className="smallThird leftMargin">Zip/Postal Code
                <input
                    type="text"
                    name="businessZipcode"
                    id="businessZipcode"
                    maxLength="20"
                    defaultValue={state.employmentInfo.businessZipcode}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.businessZipcode && (
                  <StyledError>{errors.businessZipcode.message}</StyledError>
                )}
              </label>
              <label htmlFor="businessCountry" className="required bigThird">Country
                <select name="businessCountry" onBlur={e => updateOnChangeValues(e)} defaultValue={state.employmentInfo.businessCountry}>
                  {countryOptions}
                </select>
                {errors.businessCountry && (
                  <StyledError>{errors.businessCountry.message}</StyledError>
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
