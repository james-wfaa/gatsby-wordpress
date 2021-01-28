import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './FormButtons'
import ProgressBar from './ProgressBar'
//import styled from "styled-components"
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

const MailingAddress = () => {
  const { state, actions } = useContext(AppContext);

  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
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
              excerpt='Thanks for updating your address - your information has been recorded. You can either opt to update another address or proceed to update other types of information by clicking “Save and Continue.”'
              heading='Thanks'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <Buttons nextAddress backAddress address />
        </div>
    )
}

export default MailingAddress
