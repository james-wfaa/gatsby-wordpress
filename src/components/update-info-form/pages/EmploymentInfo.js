import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import styled from "styled-components"
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

const EmploymentInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfo } = actions;

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  })
  const UpdateContactInfo = data =>{
    setContactInfo(data)
    setCurrentStep(1)
  }
  
    let variantObject = {
      background_color: colors.formIntroBg,
      color: colors.bgRed,
      scroll_color: colors.bgRed,
      text_align: `center`
    }
      return (
        <div>
            <IntroPageSection
              excerpt='Please update your employment info and click “Save and Continue”.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <form id="contact" onSubmit={handleSubmit(UpdateContactInfo)}>
              <legend>Employment Info</legend>
              <hr></hr>
              <label htmlFor="bussinessname" className="half required">Business Name
                <input
                    type="text"
                    name="bussinessname"
                    id="bussinessname"
                    //defaultValue={state.employmentInfo.bussinessname}
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
                {errors.bussinessname && (
                  <StyledError>{errors.bussinessname.message}</StyledError>
                )}
              </label>
              <label htmlFor="jobtitle" className="half leftMargin">Job Title
                <input
                    type="text"
                    name="jobtitle"
                    id="jobtitle"
                    //defaultValue={state.employmentInfo.jobtitle}
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
                {errors.jobtitle && (
                  <StyledError>{errors.jobtitle.message}</StyledError>
                )}
              </label>
              <label htmlFor="streetaddress">Business Street Address
                <span class="required">*</span>
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
                <span class="required">*</span>
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
                <span class="required">*</span>
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
                <span class="required">*</span>
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

export default EmploymentInfo
