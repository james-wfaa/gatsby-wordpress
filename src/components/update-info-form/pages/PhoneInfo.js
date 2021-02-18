import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, StyledTopError, variantObject } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"

const PhoneInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setPhoneInfoOnchange } = actions;

  const { register, handleSubmit, watch, errors, formState: { submitCount } } = useForm()
  const UpdatePhoneInfo = data =>{
    console.log(data)

    let currentOrder = state.numberOfSteps
    let currentStep = state.currentStep
    let currentPlaceInOrder = currentOrder.indexOf(currentStep)
    let nextStep = currentOrder[currentPlaceInOrder + 1]
    setCurrentStep(nextStep)
  }
  const updateOnChangeValues = (e) => {
    setPhoneInfoOnchange([e.target.name, e.target.value])
  }

  const renderSeasonalDates = () =>{
    return(
      <div>
        <label htmlFor="seasonalStartDate" className="smallThird block">Start Date
                <span className="required">*</span>
                <input
                    type="text"
                    name="seasonalStartDate"
                    id="seasonalStartDate"
                    defaultValue={state.phoneInfo.seasonalStartDate}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Seasonal start date is required" },
                    })}
                />
                {errors.jobtitle && (
                  <StyledError>{errors.jobtitle.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalEndDate" className="smallThird block">End Date
                <span className="required">*</span>
                <input
                    type="text"
                    name="seasonalEndDate"
                    id="seasonalEndDate"
                    defaultValue={state.phoneInfo.seasonalEndDate}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Seasonal end date is required" },
                    })}
                />
                {errors.jobtitle && (
                  <StyledError>{errors.jobtitle.message}</StyledError>
                )}
              </label>
      </div>
    )
  }
  const requiredFieldsCheck = state.phoneInfo.phoneNumber1 !== '';

      return (
        <div>
            <IntroPageSection
              excerpt='Please update any phone numbers you wish to have on file. You only have to update one but can update multiple numbers if desired.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form id="phoneInfo" onSubmit={handleSubmit(UpdatePhoneInfo)}>
            { requiredFieldsCheck && (Object.keys(errors).length !== 0) && <StyledTopError>Please correct error(s) below</StyledTopError>}
            <legend>Phone Numbers<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <label htmlFor="phoneNumber1" className="half">Phone Number 1
                <span className="required">*</span>
                <input
                    type="phone"
                    name="phoneNumber1"
                    id="phoneNumber1"
                    defaultValue={state.phoneInfo.phoneNumber1}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "At least one valid phone number is required" },
                    })}
                />
                {errors.phoneNumber1 && (
                  <StyledError>{errors.phoneNumber1.message}</StyledError>
                )}
              </label>
              <label htmlFor="phoneType1" className="half leftMargin">Phone Type 1
                <select 
                  id="phoneType1" 
                  name="phoneType1" 
                  defaultValue={state.phoneInfo.phoneType1}
                  onChange={e => updateOnChangeValues(e)}
                  ref={register({})}
                  >
                  <option value="home">Home</option>
                  <option value="mobile">Personal Cellular/Mobile</option>
                  <option value="work">Work/Business</option>
                  <option value="work-mobile">Work/Business Cellular/Mobile</option>
                  <option value="seasonal">Seasonal</option>
                </select>
                {errors.phoneType1 && (
                  <StyledError>{errors.phoneType1.message}</StyledError>
                )}
              </label>
              {state.phoneInfo.phoneType1 === "seasonal" ? renderSeasonalDates() : null}
              <label htmlFor="phoneNumber2" className="half">Phone Number 2
                <input
                    type="phone"
                    name="phoneNumber2"
                    id="phoneNumber2"
                    defaultValue={state.phoneInfo.phoneNumber2}
                    onChange={e => updateOnChangeValues(e)}
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
              <label htmlFor="phoneType2" className="half leftMargin">Phone Type 2
                <select 
                  defaultValue={state.phoneInfo.phoneType2} 
                  onChange={e => updateOnChangeValues(e)}
                  name="phoneType2"
                  ref={register({})}>
                  <option value="home">Home</option>
                  <option value="mobile">Personal Cellular/Mobile</option>
                  <option value="work">Work/Business</option>
                  <option value="work-mobile">Work/Business Cellular/Mobile</option>
                  <option value="seasonal">Seasonal</option>
                </select>
                {errors.phoneType2 && (
                  <StyledError>{errors.phoneType2.message}</StyledError>
                )}
              </label>
              {state.phoneInfo.phoneType2 === "seasonal" ? renderSeasonalDates() : null}
              <label htmlFor="phoneNumber3" className="half">Phone Number 3
                <input
                    type="phone"
                    name="phoneNumber3"
                    id="phoneNumber3"
                    defaultValue={state.phoneInfo.phoneNumber3}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      pattern: {
                        value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        message: "Must be a valid phone number",
                      },
                    })}
                />
                {errors.phoneNumber3 && (
                  <StyledError>{errors.phoneNumber3.message}</StyledError>
                )}
              </label>
              <label htmlFor="phoneType3" className="half leftMargin">Phone Type 3
                <select 
                  defaultValue={state.phoneInfo.phoneType3} 
                  onChange={e => updateOnChangeValues(e)}
                  name="phoneType3"
                  ref={register({})}>
                  <option value="home">Home</option>
                  <option value="mobile">Personal Cellular/Mobile</option>
                  <option value="work">Work/Business</option>
                  <option value="work-mobile">Work/Business Cellular/Mobile</option>
                  <option value="seasonal">Seasonal</option>
                </select>
                {errors.phoneType3 && (
                  <StyledError>{errors.phoneType3.message}</StyledError>
                )}
              </label>
              {state.phoneInfo.phoneType3 === "seasonal" ? renderSeasonalDates() : null}
              <Buttons 
                save 
                back
                disabled={ !requiredFieldsCheck }
                error={ requiredFieldsCheck && (Object.keys(errors).length !== 0) }
                errors={errors}
                submitCount={submitCount} />
            </form>
        </div>
    )
}

export default PhoneInfo
