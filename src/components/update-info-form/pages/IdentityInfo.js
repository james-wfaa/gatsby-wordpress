import React, { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, variantObject } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"
import countryList from "react-select-country-list"

let charactersLeft = 500
const IdentityInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setIdentityInfo, setIdentityInfoOnchange } = actions;
  const [countries, setCountries] = useState(countryList().getData())

  const { register, handleSubmit, watch, errors, formState: { submitCount } } = useForm()
  const UpdateIdentityInfo = data =>{
    //setIdentityInfo(data)
    let currentOrder = state.numberOfSteps
    let currentStep = state.currentStep
    let currentPlaceInOrder = currentOrder.indexOf(currentStep)
    let nextStep = currentOrder[currentPlaceInOrder + 1]
    setCurrentStep(nextStep)
  }
  
  const updateOnChangeValues = (e) => {
    
    //if checkbox, update array accordingly
    if(e.target.type === 'checkbox'){
        if(e.target.checked){
          console.log(e.target.checked)
          let newIdentity = [...state.identityInfo.identity, e.target.name]
          setIdentityInfoOnchange(['identity', newIdentity])
        } else {
         
          let newIdentity = [...state.identityInfo.identity.filter(a => a !== e.target.name)]
          setIdentityInfoOnchange(['identity', newIdentity])
        }
    }
    //otherwise, update field like normal
    else{
      setIdentityInfoOnchange([e.target.name, e.target.value])
    }
    if(e.target.type === 'textarea'){
      let currentLength = e.target.value.length
      console.log(currentLength)
      if(currentLength > 500){
        charactersLeft = 0
      } else{
        charactersLeft = 500 - currentLength
      }
    }
  }

  const countryOptions = countries.map(country => {
    return <option value={country.value} key={country.value}>{country.label}</option>
  })
  
      return (
        <div>
            <IntroPageSection
              excerpt='Please provide information regarding how you would best identify yourself. And always click “Save and Continue” after completing the page to ensure your changes are recorded.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep} />
            <form className="identity-info" id="contact" onSubmit={handleSubmit(UpdateIdentityInfo)}>
              { (Object.keys(errors).length !== 0) && <StyledError className="topError">Please correct error(s) below</StyledError>}
              <legend>Race/Ethnicity/Identity<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <input type="checkbox" name="select1" id="select1" onChange={e => updateOnChangeValues(e)} defaultChecked={state.identityInfo.identity.includes("select1")}/>
              <label htmlFor="select1" selected>American Indian/Alaska Native</label>
              <input type="checkbox" name="select2" id="select2" onChange={e => updateOnChangeValues(e)} defaultChecked={state.identityInfo.identity.includes("select2")}/>
              <label htmlFor="select2" selected>Black/African-American</label>
              <input type="checkbox" name="select3" id="select3" onChange={e => updateOnChangeValues(e)} defaultChecked={state.identityInfo.identity.includes("select3")}/>
              <label htmlFor="select3" selected>Native Hawaiian/Other Pacific Islander</label>
              <input type="checkbox" name="select4" id="select4" onChange={e => updateOnChangeValues(e)} defaultChecked={state.identityInfo.identity.includes("select4")}/>
              <label htmlFor="select4" selected>Asian/Asian American</label>
              <input type="checkbox" name="select5" id="select5" onChange={e => updateOnChangeValues(e)} defaultChecked={state.identityInfo.identity.includes("select5")}/>
              <label htmlFor="select5" selected>Hispanic/Latinx</label>
              <input type="checkbox" name="select6" id="select6" onChange={e => updateOnChangeValues(e)} defaultChecked={state.identityInfo.identity.includes("select6")}/>
              <label htmlFor="select6" selected>White/Caucasian</label>
              <input type="checkbox" name="select7" id="select7" onChange={e => updateOnChangeValues(e)} defaultChecked={state.identityInfo.identity.includes("select7")}/>
              <label htmlFor="select7" selected>Not Specified</label>
              <label htmlFor="origincountry" className="half">What is your country of origin?
                <select name="originCountry" onChange={e => updateOnChangeValues(e)} defaultValue={state.identityInfo.originCountry}>
                  <option value="Not Specified" key="NA"> </option>
                  {countryOptions}
                </select>
              </label>
              <label htmlFor="identitydescrip">What else is important to your identity?
                <textarea
                    type="textbox"
                    name="identitydescrip"
                    id="identitydescrip"
                    maxLength="500"
                    defaultValue={state.identityInfo.identitydescrip}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      maxLength: {
                        value: 500,
                        message: "Cannot be more than 500 characters",
                      },
                    })}
                />
                {state.identityInfo.identitydescrip !== "" && <p>{charactersLeft} characters left</p>}
                {errors.identitydescrip && (
                  <StyledError>{errors.identitydescrip.message}</StyledError>
                )}
              </label>
              <Buttons 
                save 
                back
                error={ (Object.keys(errors).length !== 0) }
                errors={errors}
                submitCount={submitCount} />
            </form>
        </div>
    )
}

export default IdentityInfo