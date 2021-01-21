import React, { useState, useEffect } from "react"
//import { useForm } from "react-hook-form"
import formHelpers from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import { render } from "react-dom"

const ContactInfo = () => {


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
                />
              </label>
              <label htmlFor="lastname" className="half leftMargin">Last Name
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                />
              </label>
              <label htmlFor="othernames">Other names you use or have used in the past (maiden names, nicknames, given names etc.)
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                />
              </label>
              <label htmlFor="email" className="half">Preferred Email
                <input
                    type="email"
                    name="email"
                    id="email"
                />
              </label>
              <label htmlFor="phone" className="half leftMargin">Mobile Phone
                <input
                    type="phone"
                    name="phone"
                    id="phone"
                />
              </label>
              <label htmlFor="undergradYear" className="third">Undergraduate Year (if applicable)
                <input
                    type="number"
                    name="undergradYear"
                    id="undergradYear"
                />
              </label>
              <label htmlFor="postgradYear" className="third leftMargin">Postgraduate Year(s) (if applicable)
                <input
                    type="number"
                    name="postgradYear"
                    id="postgradYear"
                />
              </label>
            </form>
            <Buttons next />
        </div>
    )
  
  
}

export default ContactInfo