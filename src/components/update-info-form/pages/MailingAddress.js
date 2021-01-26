import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import ProgressBar from './ProgressBar'
//import styled from "styled-components"
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

const MailingAddress = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfo } = actions;
  const [countries, setCountries] = useState(countryList().getData())

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  })
  const UpdateContactInfo = data =>{
    setContactInfo(data)
    setCurrentStep(1)
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
              excerpt='Please update your address. You will have the option to update multiple addresses after clicking “Save and Continue”.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} totalSteps={state.currentStep}/>
            <form id="contact" onSubmit={handleSubmit(UpdateContactInfo)}>
              <legend>Mailing Address</legend>
              <hr></hr>
              <label htmlFor="addresstype" className="half select-dropdown">Address Type
                <select name="country" /*onChange={e => handleCountryChange(e)}*/>
                  <option value="home">Home</option>
                </select>
                {errors.addresstype && (
                  <StyledError>{errors.addresstype.message}</StyledError>
                )}
              </label>
              
              <label htmlFor="lastname" className="half leftMargin required">Country
                <select name="country" /*onChange={e => handleCountryChange(e)}*/>
                  {countryOptions}
                </select>
                {errors.lastname && (
                  <StyledError>{errors.lastname.message}</StyledError>
                )}
              </label>
              <label htmlFor="streetaddress">Street Address
                <span className="required">*</span>
                <input
                    type="text"
                    name="streetaddress"
                    id="streetaddress"
                    //defaultValue={state.MailingAddress.streetaddress}
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
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid year",
                      },
                    })}
                />
                {errors.city && (
                  <StyledError>{errors.city.message}</StyledError>
                )}
              </label>
              <label htmlFor="postgrad" className="third leftMargin">State/Province/Region
                <span className="required">*</span>
                <input
                    type="text"
                    name="postgrad"
                    id="postgrad"
                    defaultValue={state.contactInfo.postgrad}
                    ref={register({
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid year",
                      },
                    })}
                />
                {errors.postgrad && (
                  <StyledError>{errors.postgrad.message}</StyledError>
                )}
              </label>
              <label htmlFor="postgrad" className="third leftMargin">Zip/Postal Code
                <span className="required">*</span>
                <input
                    type="text"
                    name="postgrad"
                    id="postgrad"
                    defaultValue={state.contactInfo.postgrad}
                    ref={register({
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid year",
                      },
                    })}
                />
                {errors.postgrad && (
                  <StyledError>{errors.postgrad.message}</StyledError>
                )}
              </label>
              <Buttons save back />
            </form>
        </div>
    )
}

export default MailingAddress
