import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import formHelpers from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import styled from "styled-components"
import { AppContext } from "../../../context/AppContext"

const ContactInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfo } = actions;

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  })
  const UpdateContactInfo = data =>{
    setContactInfo(data)
    setCurrentStep(1)
  }
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
    let variantObject = {
      background_color: colors.formIntroBg,
      color: colors.bgRed,
      scroll_color: colors.bgRed,
      text_align: `center`
    }
      return (
        <div>
            <IntroPageSection
              excerpt='We want to be certain we have the correct information for all UW Alumni and friends. Please take a minute to complete this brief form.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <form onSubmit={handleSubmit(UpdateContactInfo)}>
              <legend>Contact Information</legend>
              <hr></hr>
              <label htmlFor="firstname" className="half required">First Name
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    ref={register({
                      required: { value: true, message: "First Name is required" },
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
                {errors.firstname && (
                  <StyledError>{errors.firstname.message}</StyledError>
                )}
              </label>
              
              <label htmlFor="lastname" className="half leftMargin required">Last Name
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    ref={register({
                      required: { value: true, message: "Last Name is required" },
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
                {errors.lastname && (
                  <StyledError>{errors.lastname.message}</StyledError>
                )}
              </label>
              <label htmlFor="othernames">Other names you use or have used in the past (maiden names, nicknames, given names etc.)
                <input
                    type="text"
                    name="othernames"
                    id="othernames"
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
                {errors.othernames && (
                  <StyledError>{errors.othernames.message}</StyledError>
                )}
              </label>
              <label htmlFor="email" className="half required">Preferred Email
                <input
                    type="email"
                    name="email"
                    id="email"
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
              <label htmlFor="phone" className="half leftMargin">Mobile Phone
                <input
                    type="phone"
                    name="phone"
                    id="phone"
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
              <label htmlFor="undergrad" className="third">Undergraduate Year (if applicable)
                <input
                    type="text"
                    name="undergrad"
                    id="undergrad"
                    maxLength="4"
                    ref={register({
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid year",
                      },
                    })}
                />
                {errors.undergrad && (
                  <StyledError>{errors.undergrad.message}</StyledError>
                )}
              </label>
              <label htmlFor="postgrad" className="third leftMargin">Postgraduate Year(s) (if applicable)
                <input
                    type="text"
                    name="postgrad"
                    id="postgrad"
                    maxLength="4"
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
              <Buttons save />
            </form>
        </div>
    )
}

export default ContactInfo