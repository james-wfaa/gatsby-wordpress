import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import PageSection from "../page-sections/PageSection"
import StyledCommunicationForm from "./StyledCommunicationForm"

const CommunicationForm = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  })
  const [disableButton, setDisableButton] = useState(false)

  const [formInteracted, setFormInteracted] = useState(false)

  const onSubmit = data => {
    // canBeSubmitted()
    console.log(data)
  }

  const handleShowForm = () => {
    if (!formInteracted) {
      setFormInteracted(true)
    }
  }

  const StyledError = styled.p`
    font-family: "Verlag A", "Verlag B";
    font-style: normal;
    margin: 0 auto;
    padding: 0;
    font-size: 16px;
    position: relative;
    top: -30px;
  `

  return (
    <PageSection preheading="Sign up for WAA Communications" topBorder>
      <StyledCommunicationForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="firstname">My name is</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              onKeyPress={() => handleShowForm()}
              ref={register({
                required: { value: true, message: "First Name is required" },
                minLength: {
                  value: 2,
                  message: "Must be greater than 2 letters",
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
          </fieldset>
          {formInteracted ? (
            <fieldset className="hiddenfields">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                ref={register({
                  required: { value: true, message: "Last Name is required" },
                  minLength: {
                    value: 2,
                    message: "Must be greater than 2 letters",
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
              <label htmlFor="emailaddress">My email is</label>
              <input
                type="email"
                name="emailaddress"
                id="emailaddress"
                placeholder="Email"
                ref={register({
                  required: {
                    value: true,
                    message: "Email Address is required",
                  },
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Must be valid email address",
                  },
                })}
              />
              {errors.emailaddress && (
                <StyledError>{errors.emailaddress.message}</StyledError>
              )}
              <label htmlFor="postalcode">My postal code is</label>
              <input
                type="text"
                name="postalcode"
                id="postalcode"
                placeholder="postal code"
                ref={register({
                  required: { value: true, message: "Postal Code is required" },
                })}
              />
              {errors.postalcode && (
                <StyledError>{errors.postalcode.message}</StyledError>
              )}
              <div className="label">and I Badger On.</div>
              <input
                type="submit"
                name="submitbutton"
                id="submitbutton"
                value="SUBMIT"
                disabled={Object.keys(errors).length > 0 ? true : false}
              />
            </fieldset>
          ) : null}
        </form>
      </StyledCommunicationForm>
    </PageSection>
  )
}

export default CommunicationForm
