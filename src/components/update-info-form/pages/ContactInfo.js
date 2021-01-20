import React, { useState, useEffect } from "react"
//import { useForm } from "react-hook-form"
import formHelpers from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'

import { sizes, breakpoints, mixins, colors } from '../../css-variables'
import Buttons from './formButtons'

const ContactInfo = ({  }) => {
  /*return (
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
              <label htmlFor="country">My country is</label>
              <select name="country" onChange={e => handleCountryChange(e)}>
                {countryOptions}
              </select>

              {errors.country && (
                <StyledError>{errors.countrycode.message}</StyledError>
              )}
              <label htmlFor="postalcode">and my postal code is</label>
              <input
                type="text"
                name="postalcode"
                id="postalcode"
                placeholder="Postal Code"
                ref={register({
                  required: { value: true, message: "Postal Code is required" },
                  validate: {
                    validCode: (value) => validatePostalCode(value, selectedCountry),
                  },
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
  )*/
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
          <form>
            <legend>Contact Information</legend>
            <hr></hr>
            <label htmlFor="firstname" className="half">First Name
              <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Buckingham U."
              />
            </label>
            
            <label htmlFor="lastname"  className="half leftMargin">Last Name
              <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Badger"
              />
            </label>
            
            <label htmlFor="othernames">Other names you use or have used in the past (maiden names, nicknames, given names etc.)</label>
            <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="The Buckster"
            />
            <label htmlFor="email"  className="half">Preferred Email
              <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="bucky.badger@gmail.com"
              />
            </label>
            
            <label htmlFor="phone"  className="half leftMargin">Mobile Phone
              <input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="+1-123-456-7890"
              />
            </label>
            
            <label htmlFor="undergradYear"  className="third">Undergraduate Year (if applicable)
              <input
                  type="number"
                  name="undergradYear"
                  id="undergradYear"
                  placeholder="1998"
              />
            </label>
            
            <label htmlFor="postgradYear" className="third leftMargin">Postgraduate Year(s) (if applicable)
              <input
                  type="number"
                  name="postgradYear"
                  id="postgradYear"
                  placeholder="2004"
              />
            </label>
            
          </form>
          <Buttons next />

      </div>
  )
  
}

export default ContactInfo