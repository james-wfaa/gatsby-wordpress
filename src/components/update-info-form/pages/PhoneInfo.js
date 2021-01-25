import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import formHelpers from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import styled from "styled-components"
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

const PhoneInfo = () => {
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
            <form id="contact" onSubmit={handleSubmit(UpdateContactInfo)}>
              <legend>Phone Numbers</legend>
              <hr></hr>
              <label htmlFor="addresstype" className="half">Phone Type 1
                <span class="required">*</span>
                <select>
                  <option value="home">Home</option>
                  <option value="mobile">Cellular/Mobile</option>
                  <option value="work">Work/Business</option>
                </select>
                {errors.addresstype && (
                  <StyledError>{errors.addresstype.message}</StyledError>
                )}
              </label>
              <label htmlFor="phone" className="half leftMargin">Phone Number 1
                <span class="required">*</span>
                <input
                    type="phone"
                    name="phone"
                    id="phone"
                    defaultValue={state.contactInfo.phone}
                    ref={register({
                      pattern: {
                        value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        message: "Must be a valid phone number",
                      },
                    })}
                />
                {errors.phone && (
                  <StyledError>{errors.phone.message}</StyledError>
                )}
              </label>
              <label htmlFor="addresstype" className="half">Phone Type 2
                <select>
                  <option value="home">Home</option>
                  <option value="mobile">Cellular/Mobile</option>
                  <option value="work">Work/Business</option>
                </select>
                {errors.addresstype && (
                  <StyledError>{errors.addresstype.message}</StyledError>
                )}
              </label>
              <label htmlFor="phone" className="half leftMargin">Phone Number 2
                <input
                    type="phone"
                    name="phone"
                    id="phone"
                    defaultValue={state.contactInfo.phone}
                    ref={register({
                      pattern: {
                        value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        message: "Must be a valid phone number",
                      },
                    })}
                />
                {errors.phone && (
                  <StyledError>{errors.phone.message}</StyledError>
                )}
              </label>
              <label htmlFor="addresstype" className="half">Phone Type 3
                <select>
                  <option value="home">Home</option>
                  <option value="mobile">Cellular/Mobile</option>
                  <option value="work">Work/Business</option>
                </select>
                {errors.addresstype && (
                  <StyledError>{errors.addresstype.message}</StyledError>
                )}
              </label>
              <label htmlFor="phone" className="half leftMargin">Phone Number 3
                <input
                    type="phone"
                    name="phone"
                    id="phone"
                    defaultValue={state.contactInfo.phone}
                    ref={register({
                      pattern: {
                        value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        message: "Must be a valid phone number",
                      },
                    })}
                />
                {errors.phone && (
                  <StyledError>{errors.phone.message}</StyledError>
                )}
              </label>
              <Buttons save back />
            </form>
        </div>
    )
}

export default PhoneInfo

const StyledError = styled.p`
  font-family: "Verlag A", "Verlag B";
  font-style: normal;
  margin: 0 auto;
  padding: 0;
  font-size: 16px;
  position: relative;
  color: ${colors.buttonRed};
  position:absolute;
  bottom:-24px;
  font-size: 0.778rem;
`