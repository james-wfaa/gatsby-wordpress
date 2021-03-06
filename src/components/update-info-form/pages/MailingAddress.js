import React, { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, handleFormSubmit, FormGeneralError } from '../form-helpers'
import { colors } from '../../css-variables'
import PageSection from '../../page-sections/PageSection'
import Buttons from '../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

const MailingAddress = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setMailingAddressOnchange } = actions;
  const [ countries ] = useState(countryList().getData())
  const [generalError, setGeneralError] = useState('')

  const { register, handleSubmit, errors, formState: { submitCount } } = useForm({mode : 'onChange'})
  const UpdateMailingAddressInfo = data =>{
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
    setMailingAddressOnchange([e.target.name, e.target.value])
  }

  //check country, check if seasonal address checked
  let requiredFieldsCheck = state.mailingAddress.country === "US" ? state.mailingAddress.streetAddress !== '' && state.mailingAddress.city !== '' && state.mailingAddress.state !== '' && state.mailingAddress.zipcode !== '' : state.mailingAddress.streetAddress !== '';
  if (state.mailingAddress.seasonalResidence === "yes"){
    let checkSeasonalAddressFields = state.mailingAddress.seasonalCountry === "US" ? state.mailingAddress.seasonalStreetAddress !== '' && state.mailingAddress.seasonalCity !== '' && state.mailingAddress.seasonalState !== '' && state.mailingAddress.seasonalZipcode !== '' : state.mailingAddress.seasonalStreetAddress !== ''
    requiredFieldsCheck = requiredFieldsCheck && checkSeasonalAddressFields && state.mailingAddress.seasonalStartDate !== '' &&  state.mailingAddress.seasonalEndDate !== '';
  }
  const requiredForUS = state.mailingAddress.country === "US" ? `required: { value: true, message: "This field is required" },` : null
  const requiredForSeasonalUS = state.mailingAddress.seasonalCountry === "US" ? `required: { value: true, message: "This field is required" },` : null

  const countryOptions = countries.map(country => {
    if (country.value === state.mailingAddress.country) {
      return (
        <option value={country.value} key={country.value} defaultValue={state.mailingAddress.country}>
          {country.label}
        </option>
      )
    }
    return <option value={country.value} key={country.value}>{country.label}</option>
  })
      return (
        <div>
            <PageSection
              excerpt='Please update your primary or seasonal mailing address below. By doing so, you’ll receive communications on happenings in your area to help you stay connected to fellow Badgers nearby.'
              heading='Update My Info'
              headingCompact
              backgroundColor={colors.formIntroBg}
              pageTitle
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            {generalError && (
              <FormGeneralError>We’re sorry, but a network issue prevented us from saving your information. Our team has been notified, but you can <a href="mailto:web@supportuw.org">contact WAA</a> if you need immediate assistance.</FormGeneralError>
            )}
            <form className="mailing-address" onSubmit={handleSubmit(UpdateMailingAddressInfo)}>
            { requiredFieldsCheck && (Object.keys(errors).length !== 0) && <StyledError className="topError">Please correct error(s) below</StyledError>}
              <legend>Mailing Address<span className="requiredInfo">*Required Information</span></legend>
              <hr />
              <label htmlFor="streetAddress">Street Address
                <span className="required">*</span>
                <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    maxLength="150"
                    defaultValue={state.mailingAddress.streetAddress}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Street address is required" },
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
                    maxLength="150"
                    defaultValue={state.mailingAddress.streetAddressLineTwo}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
                {errors.streetAddressLineTwo && (
                  <StyledError>{errors.streetAddressLineTwo.message}</StyledError>
                )}
              </label>
              <label htmlFor="city" className="bigThird">City
                <span className="required">*</span>
                <input
                    type="text"
                    name="city"
                    id="city"
                    maxLength="90"
                    defaultValue={state.mailingAddress.city}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
                {errors.city && (
                  <StyledError>{errors.city.message}</StyledError>
                )}
              </label>
              <label htmlFor="state" className="smallThird leftMargin">State/Province/Region
                {state.mailingAddress.country === 'US' ? <span className="required">*</span> : null}
                <input
                    type="text"
                    name="state"
                    id="state"
                    maxLength="150"
                    defaultValue={state.mailingAddress.state}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.state && (
                  <StyledError>{errors.state.message}</StyledError>
                )}
              </label>
              <label htmlFor="zipcode" className="smallThird leftMargin">Zip/Postal Code
                {state.mailingAddress.country === 'US' && <span className="required">*</span> }
                <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    maxLength="20"
                    defaultValue={state.mailingAddress.zipcode}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      requiredForUS,
                    })}
                />
                {errors.zipcode && (
                  <StyledError>{errors.zipcode.message}</StyledError>
                )}
              </label>
              <label htmlFor="country" className="half required">Country
                <select name="country" onChange={e => updateOnChangeValues(e)} defaultValue={state.mailingAddress.country}>
                  {countryOptions}
                </select>
                {errors.country && (
                  <StyledError>{errors.country.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalResidence" >Do you have a seasonal residence?</label>
              <input type="radio" id="yesSeasonal" value="yes" name="seasonalResidence" onChange={e => updateOnChangeValues(e)} checked={state.mailingAddress.seasonalResidence === "yes"} />
              <label htmlFor="yesSeasonal">Yes</label>
              <input type="radio" id="noSeasonal" value="no" name="seasonalResidence" onChange={e => updateOnChangeValues(e)} checked={state.mailingAddress.seasonalResidence === "no"}/>
              <label htmlFor="noSeasonal">No</label>
              { state.mailingAddress.seasonalResidence === "yes" ? (
              <div className="seasonal-address-wrapper">
              <legend>Seasonal Address</legend>
              <hr />
              <label htmlFor="seasonalStartDate" className="smallThird block">Start Date
                <span className="required">*</span>
                <input
                    type="text"
                    name="seasonalStartDate"
                    id="seasonalStartDate"
                    maxLength="31"
                    defaultValue={state.mailingAddress.seasonalStartDate}
                    onChange={e => updateOnChangeValues(e)}
                    placeholder="MM/DD"
                    ref={register({
                      required: { value: true, message: "Start date of seasonal address is required" },
                      maxLength: {
                        value: 30,
                        message: "Cannot be more than 30 characters",
                      },
                    })}
                />
                {errors.seasonalStartDate && (
                  <StyledError>{errors.seasonalStartDate.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalEndDate" className="smallThird block">End Date
                <span className="required">*</span>
                <input
                    type="text"
                    name="seasonalEndDate"
                    id="seasonalEndDate"
                    maxLength="31"
                    placeholder="MM/DD"
                    defaultValue={state.mailingAddress.seasonalEndDate}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "End date of seasonal address is required" },
                      maxLength: {
                        value: 30,
                        message: "Cannot be more than 30 characters",
                      },
                    })}
                />
                {errors.seasonalEndDate && (
                  <StyledError>{errors.seasonalEndDate.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalStreetAddress">Street Address
                <span className="required">*</span>
                <input
                    type="text"
                    name="seasonalStreetAddress"
                    id="seasonalStreetAddress"
                    maxLength="150"
                    defaultValue={state.mailingAddress.seasonalStreetAddress}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Street address is required" },
                    })}
                />
                {errors.seasonalStreetAddress && (
                  <StyledError>{errors.seasonalStreetAddress.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalStreetAddressLineTwo">Street Address Line Two
                <input
                    type="text"
                    name="seasonalStreetAddressLineTwo"
                    id="seasonalStreetAddressLineTwo"
                    maxLength="150"
                    defaultValue={state.mailingAddress.seasonalStreetAddressLineTwo}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.seasonalStreetAddressLineTwo && (
                  <StyledError>{errors.seasonalStreetAddressLineTwo.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalCity" className="bigThird">City
                <span className="required">*</span>
                <input
                    type="text"
                    name="seasonalCity"
                    id="seasonalCity"
                    maxLength="90"
                    defaultValue={state.mailingAddress.seasonalCity}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.seasonalCity && (
                  <StyledError>{errors.seasonalCity.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalState" className="smallThird leftMargin">State/Province/Region
                {state.mailingAddress.seasonalCountry === 'US' ? <span className="required">*</span> : null}
                <input
                    type="text"
                    name="seasonalState"
                    id="seasonalState"
                    maxLength="150"
                    defaultValue={state.mailingAddress.seasonalState}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      requiredForSeasonalUS,
                    })}
                />
                {errors.seasonalState && (
                  <StyledError>{errors.seasonalState.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalZipcode" className="smallThird leftMargin">Zip/Postal Code
                {state.mailingAddress.seasonalCountry === 'US' && <span className="required">*</span> }
                <input
                    type="text"
                    name="seasonalZipcode"
                    id="seasonalZipcode"
                    maxLength="20"
                    defaultValue={state.mailingAddress.seasonalZipcode}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      requiredForSeasonalUS,
                      /*pattern: {
                        value: /^\d{5}(?:[-\s]\d{4})?$/,
                        message: "Must be valid zip/postal code",
                      },*/
                    })}
                />
                {errors.seasonalZipcode && (
                  <StyledError>{errors.seasonalZipcode.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalCountry" className="half required">Country
                <select name="seasonalCountry" onChange={e => updateOnChangeValues(e)} defaultValue={state.mailingAddress.seasonalCountry}>
                  {countryOptions}
                </select>
                {errors.seasonalCountry && (
                  <StyledError>{errors.seasonalCountry.message}</StyledError>
                )}
              </label>
              </div> ) : null }

              <Buttons 
                save 
                back
                disabled={ !requiredFieldsCheck }
                error={ requiredFieldsCheck && (Object.keys(errors).length !== 0) }
                errors={errors}
                submitCount={submitCount}
                  />
            </form>
        </div>
    )
}

export default MailingAddress
