import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, StyledTopError, variantObject, checkForLetters, currentYear } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import Buttons from '../FormButtons'
import { AppContext } from "../../../context/AppContext"


const ContactInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfoOnchange } = actions;

  const { register, handleSubmit, errors, formState: { submitCount } } = useForm()
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
              { requiredFieldsCheck && (Object.keys(errors).length !== 0) && <StyledTopError>Please correct error(s) below</StyledTopError>}
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
                {errors.phone?.type === "numbersOnly" && (
                  <StyledError>Letters are not accepted as a valid phone number</StyledError>
                )}
                {console.log(errors)}
                <input
                    type="phone"
                    name="phone"
                    id="phone"
                    maxLength="51"
                    defaultValue={state.contactInfo.phone}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      validate: {
                        numbersOnly: value => checkForLetters(value) === false,
                      },
                    })
                  }
                />
              </label>
              <label htmlFor="undergrad" className="smallThird">Undergraduate Year (if applicable)
                {errors.undergrad && (
                  <StyledError>{errors.undergrad.message}</StyledError>
                )}
                {errors.undergrad?.type === "numbersOnly" && (
                  <StyledError>Letters are not accepted as a valid undergrad year</StyledError>
                )}
                <input
                    type="text"
                    name="undergrad"
                    id="undergrad"
                    maxLength="4"
                    defaultValue={state.contactInfo.undergrad}
                    onChange={e => updateOnChangeValues(e)}
                    placeholder="YYYY"
                    ref={register({
                      maxLength: {
                        value: 4,
                        message: "Must be 4 characters or less",
                      },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Numbers only, please",
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
                disabled={ !requiredFieldsCheck }
                error={ requiredFieldsCheck && (Object.keys(errors).length !== 0) }
                errors={errors}
                submitCount={submitCount} />
            </form>
        </div>
    )
}

export default ContactInfo

