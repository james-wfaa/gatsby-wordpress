import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
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
              excerpt='Please let us know anything you wish to share about your race/ethnicity as well as your identity.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <form id="contact" onSubmit={handleSubmit(UpdateContactInfo)}>
              <legend>Race/Ethnicity/Identity</legend>
              <hr></hr>
              <label htmlFor="lastname" className="half">What is your country of origin?
                <select name="country" /*onChange={e => handleCountryChange(e)}*/>
                  {countryOptions}
                </select>
                {errors.lastname && (
                  <StyledError>{errors.lastname.message}</StyledError>
                )}
              </label>
              <label htmlFor="streetaddress">What else is important to your identity?
                <input
                    type="textbox"
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
              <Buttons save back />
            </form>
        </div>
    )
}

export default IdentityInfo
