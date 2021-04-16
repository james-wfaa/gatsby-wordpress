import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { colors } from "../../css-variables"
import { StyledError, checkForLetters, handleFormSubmit, FormGeneralError } from '../form-helpers'
import PageSection from "../../page-sections/PageSection"
import Buttons from '../FormButtons'
import { AppContext } from "../../../context/AppContext"


const ContactInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfoOnchange, setEntryId, setCommSignUpInfo } = actions;
  const [generalError, setGeneralError] = useState('')

  const { register, handleSubmit, errors, formState: { submitCount } } = useForm()
  const UpdateContactInfo = () => {
    setCommSignUpInfo({
      firstname: state.contactInfo.firstname,
      lastname: state.contactInfo.lastname,
      email: state.contactInfo.email
    })
    handleFormSubmit(state).then((returnedData) =>{
      if(returnedData.is_valid === false){
        throw new Error('something went wrong with submitting the form');
      }
      setEntryId(returnedData.entry_id)
    }).then(() => {
      setCurrentStep(2)
    }).catch(err => {setGeneralError(err.message)})
  }

  const updateOnChangeValues = (e) => {
      setContactInfoOnchange([e.target.name, e.target.value])
  }
  
  const requiredFieldsCheck = state.contactInfo.firstname !== '' && state.contactInfo.lastname !== '' && state.contactInfo.email !== '';
      return (
        <div>
          <PageSection
            excerpt="Make sure you stay in the know — and more connected to the UW and WAA! Please take a moment to complete this form with your current contact information to ensure you receive communications about events, programs, and services that matter to you."
            heading="Update My Info"
            headingCompact
            backgroundColor={colors.formIntroBg}
          />
          {generalError && (
            <FormGeneralError>We’re sorry, but a network issue prevented us from saving your information. Our team has been notified, but you can <a href="mailto:web@supportuw.org">contact WAA</a> if you need immediate assistance.</FormGeneralError>
          ) }
          <form
            id="contact"
            className="contact-info"
            onSubmit={handleSubmit(UpdateContactInfo)}
          >
            {requiredFieldsCheck && Object.keys(errors).length !== 0 && (
              <StyledError className="topError">
                Please correct error(s) below
              </StyledError>
            )}
            <legend>
              Contact Information
              <span className="requiredInfo">*Required Information</span>
            </legend>
            <hr></hr>
            <label htmlFor="firstname" className="half required">
              First Name
              <span className="required">*</span>
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
              {errors.firstname && (
                <StyledError>{errors.firstname.message}</StyledError>
              )}
            </label>
            <label htmlFor="lastname" className="half leftMargin required">
              Last Name
              <span className="required">*</span>
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
              {errors.lastname && (
                <StyledError>{errors.lastname.message}</StyledError>
              )}
            </label>
            <label htmlFor="othernames">
              Other names you use or have used in the past (maiden name,
              nicknames, given name etc.)
              <input
                type="text"
                name="othernames"
                id="othernames"
                defaultValue={state.contactInfo.othernames}
                onChange={e => updateOnChangeValues(e)}
                ref={register({})}
              />
              {errors.othernames && (
                <StyledError>{errors.othernames.message}</StyledError>
              )}
            </label>
            <label htmlFor="email" className="half required">
              Preferred Email
              <span className="required">*</span>
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
              {errors.email && (
                <StyledError>{errors.email.message}</StyledError>
              )}
            </label>
            <label htmlFor="phone" className="half leftMargin">
              Mobile Phone
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
                })}
              />
              {errors.phone && (
                <StyledError>{errors.phone.message}</StyledError>
              )}
              {errors.phone?.type === "numbersOnly" && (
                <StyledError>
                  Letters are not accepted as a valid phone number
                </StyledError>
              )}
            </label>
            <label htmlFor="undergrad" className="smallThird">
              Undergraduate Year (if applicable)
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
              {errors.undergrad && (
                <StyledError>{errors.undergrad.message}</StyledError>
              )}
              {errors.undergrad?.type === "numbersOnly" && (
                <StyledError>
                  Letters are not accepted as a valid undergrad year
                </StyledError>
              )}
            </label>
            <label htmlFor="postgrad" className="smallThird leftMargin">
              Postgraduate Year(s) (if applicable)
              <input
                type="text"
                name="postgrad"
                id="postgrad"
                defaultValue={state.contactInfo.postgrad}
                onChange={e => updateOnChangeValues(e)}
                ref={register({})}
              />
              {errors.postgrad && (
                <StyledError>{errors.postgrad.message}</StyledError>
              )}
            </label>

            <Buttons
              save
              disabled={!requiredFieldsCheck}
              error={requiredFieldsCheck && Object.keys(errors).length !== 0}
              errors={errors}
              submitCount={submitCount}
            />
          </form>
        </div>
      )
}

export default ContactInfo

