import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, StyledTopError, variantObject } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import Buttons from '../FormButtons'
import { AppContext } from "../../../context/AppContext"


const ContactInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfoOnchange } = actions;

  const { register, handleSubmit, watch, errors, formState: { isValid } } = useForm({
    mode: "onChange",
  })
  const UpdateContactInfo = data =>{
    //console.log(data)
    setCurrentStep(2)
  }

  const updateOnChangeValues = (e) => {
      setContactInfoOnchange([e.target.name, e.target.value])
  }
  
  const requiredFieldsCheck = state.contactInfo.firstname !== '' && state.contactInfo.lastname !== '' && state.contactInfo.email !== '';

      return (
        <div>
            <IntroPageSection
              excerpt='We want to be certain we have the correct information for all UW Alumni and friends. Please take a minute to complete this brief form.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <form id="contact" onSubmit={handleSubmit(UpdateContactInfo)}>
              { (requiredFieldsCheck && !isValid)  && <StyledTopError>Please correct error(s) below</StyledTopError>}
              <legend>Contact Information<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <label htmlFor="firstname" className="half required">First Name
                <span className="required">*</span>
                {errors.firstname && (
                  <StyledError>{errors.firstname.message}</StyledError>
                )}
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    maxLength="51"
                    defaultValue={state.contactInfo.firstname}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "First Name is required" },
                      maxLength: {
                        value: 50,
                        message: "First name cannot be more than 50 characters",
                      },
                    })}
                />
              </label>
              <label htmlFor="lastname" className="half leftMargin required">Last Name
                <span className="required">*</span>
                {errors.lastname && (
                  <StyledError>{errors.lastname.message}</StyledError>
                )}
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    maxLength="51"
                    defaultValue={state.contactInfo.lastname}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Last Name is required" },
                      maxLength: {
                        value: 50,
                        message: "Last name cannot be more than 50 characters",
                      },
                    })}
                />
              </label>
              <label htmlFor="othernames">Other names you use or have used in the past (maiden names, nicknames, given names etc.)
                {errors.othernames && (
                    <StyledError>{errors.othernames.message}</StyledError>
                  )}
                <input
                    type="text"
                    name="othernames"
                    id="othernames"
                    defaultValue={state.contactInfo.othernames}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
              </label>
              <label htmlFor="email" className="half required">Preferred Email
                <span className="required">*</span>
                {errors.email && (
                  <StyledError>{errors.email.message}</StyledError>
                )}
                <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={state.contactInfo.email}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: {
                        value: true,
                        message: "Preferred Email is required",
                      },
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Must be valid email address",
                      },
                    })}
                />
              </label>
              <label htmlFor="phone" className="half leftMargin">Mobile Phone
                {errors.phone && (
                  <StyledError>{errors.phone.message}</StyledError>
                )}
                <input
                    type="phone"
                    name="phone"
                    id="phone"
                    maxLength="51"
                    defaultValue={state.contactInfo.phone}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      pattern: {
                        value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        message: "Must be a valid phone number",
                      },
                      maxLength: {
                        value: 50,
                        message: "Cannot be more than 50 characters",
                      },
                    })}
                />
              </label>
              <label htmlFor="undergrad" className="smallThird">Undergraduate Year (if applicable)
                {errors.undergrad && (
                  <StyledError>{errors.undergrad.message}</StyledError>
                )}
                <input
                    type="text"
                    name="undergrad"
                    id="undergrad"
                    maxLength="4"
                    defaultValue={state.contactInfo.undergrad}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid 4 digit graduation year, formatted yyyy",
                      },
                      maxLength: {
                        value: 4,
                        message: "Must be 4 characters or less",
                      },
                    })}
                />
              </label>
              <label htmlFor="postgrad" className="smallThird leftMargin">Postgraduate Year(s) (if applicable)
                {errors.postgrad && (
                  <StyledError>{errors.postgrad.message}</StyledError>
                )}
                <input
                    type="text"
                    name="postgrad"
                    id="postgrad"
                    defaultValue={state.contactInfo.postgrad}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
              </label>
              <Buttons 
                save
                disabled={ !requiredFieldsCheck || !isValid }
                error={ requiredFieldsCheck && !isValid } />
            </form>
        </div>
    )
}

export default ContactInfo

