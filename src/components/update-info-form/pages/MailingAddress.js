import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import ProgressBar from './ProgressBar'
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

const MailingAddress = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setMailingAddress, setMailingAddressOnchange } = actions;
  const [countries, setCountries] = useState(countryList().getData())

  const { register, handleSubmit, watch, errors, formState: { isValid } } = useForm({
    mode: "onChange",
  })
  const UpdateMailingAddressInfo = data =>{
    console.log(data)
    setMailingAddress(data)

    //figure out next page
    let currentOrder = state.numberOfSteps
    let currentStep = state.currentStep
    let currentPlaceInOrder = currentOrder.indexOf(currentStep)
    let nextStep = currentOrder[currentPlaceInOrder + 1]
    setCurrentStep(nextStep)
  }
  const updateOnChangeValues = (e) => {
    setMailingAddressOnchange([e.target.name, e.target.value])
  }

  const requiredFieldsCheck = state.mailingAddress.country === "US" ? state.mailingAddress.streetAddress !== '' && state.mailingAddress.city !== '' && state.mailingAddress.state !== '' && state.mailingAddress.zipcode !== '' : state.mailingAddress.streetAddress !== '';

  const requiredForUS = state.mailingAddress.country === "US" ? `required: { value: true, message: "Required field" },` : null
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
              excerpt='Please update your address. You will have the option to update multiple addresses after clicking “Save and Continue”.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form id="mailingAddress" onSubmit={handleSubmit(UpdateMailingAddressInfo)}>
              <legend>Mailing Address<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <label htmlFor="addressType" className="half select-dropdown">Address Type
                <select name="addressType" defaultValue={state.mailingAddress.addressType}>
                  <option value="home">Home</option>
                </select>
                {errors.addressType && (
                  <StyledError>{errors.addressType.message}</StyledError>
                )}
              </label>
              
              <label htmlFor="country" className="half leftMargin required">Country
                <select name="country" onChange={e => updateOnChangeValues(e)}>
                  {countryOptions}
                </select>
                {errors.country && (
                  <StyledError>{errors.country.message}</StyledError>
                )}
              </label>
              <label htmlFor="streetAddress">Street Address
                <span className="required">*</span>
                <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    defaultValue={state.mailingAddress.streetAddress}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 letters",
                      },
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
                    defaultValue={state.mailingAddress.streetAddressLineTwo}
                    ref={register({
                      minLength: {
                        value: 2,
                        message: "Must be at least 2 letters",
                      },
                    })}
                />
                {errors.streetAddressLineTwo && (
                  <StyledError>{errors.streetAddressLineTwo.message}</StyledError>
                )}
              </label>
              <label htmlFor="city" className="third">City
                {state.mailingAddress.country === 'US' ? <span className="required">*</span> : null}
                <input
                    type="text"
                    name="city"
                    id="city"
                    //defaultValue={state.mailingAddress.city}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.city && (
                  <StyledError>{errors.city.message}</StyledError>
                )}
              </label>
              <label htmlFor="state" className="third leftMargin">State/Province/Region
                {state.mailingAddress.country === 'US' ? <span className="required">*</span> : null}
                <input
                    type="text"
                    name="state"
                    id="state"
                    defaultValue={state.mailingAddress.state}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      
                    })}
                />
                {errors.state && (
                  <StyledError>{errors.state.message}</StyledError>
                )}
              </label>
              <label htmlFor="zipcode" className="third leftMargin">Zip/Postal Code
                {state.mailingAddress.country === 'US' && <span className="required">*</span> }
                <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    //defaultValue={state.mailingAddress.zipcode}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      requiredForUS
                    })}
                />
                {errors.zipcode && (
                  <StyledError>{errors.zipcode.message}</StyledError>
                )}
              </label>
              <Buttons 
                save 
                back
                disabled={ !requiredFieldsCheck || !isValid }  />
            </form>
        </div>
    )
}

export default MailingAddress
