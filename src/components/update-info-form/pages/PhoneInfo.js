import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, variantObject, checkForLetters } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"

const PhoneInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setPhoneInfoOnchange } = actions;

  const { register, handleSubmit, errors, formState: { submitCount } } = useForm()
  const UpdatePhoneInfo = data =>{

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
                <input
                    type="text"
                    name="seasonalStartDate"
                    id="seasonalStartDate"
                    defaultValue={state.phoneInfo.seasonalStartDate}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
                {errors.seasonalStartDate && (
                  <StyledError>{errors.seasonalStartDate.message}</StyledError>
                )}
              </label>
              <label htmlFor="seasonalEndDate" className="smallThird block">End Date
                <input
                    type="text"
                    name="seasonalEndDate"
                    id="seasonalEndDate"
                    defaultValue={state.phoneInfo.seasonalEndDate}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
                {errors.seasonalEndDate && (
                  <StyledError>{errors.seasonalEndDate.message}</StyledError>
                )}
              </label>
      </div>
    )
  }
  const requiredFieldsCheck = state.phoneInfo.phoneNumber1 !== '';

      return (
        <div>
            <IntroPageSection
              excerpt='Please include any phone numbers you wish to have on file. You’re only required to provide one, but you can include multiple phone numbers if you choose. Important for Badgers living internationally: remember to include your country code. And always click “Save and Continue” after completing a page to ensure your changes are recorded.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form id="phoneInfo" onSubmit={handleSubmit(UpdatePhoneInfo)}>
            { requiredFieldsCheck && (Object.keys(errors).length !== 0) && <StyledError className="topError">Please correct error(s) below</StyledError>}
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
                      validate: {
                        numbersOnly: value => checkForLetters(value) === false,
                      },
                    })}
                />
                {errors.phoneNumber1 && (
                  <StyledError>{errors.phoneNumber1.message}</StyledError>
                )}
                {errors.phoneNumber1?.type === "numbersOnly" && (
                  <StyledError>Letters are not accepted as a valid phone number</StyledError>
                )}
              </label>
              <label htmlFor="phoneType1" className="half leftMargin">Phone Type 1
                <select 
                  id="phoneType1" 
                  name="phoneType1" 
                  defaultValue={state.phoneInfo.phoneType1}
                  onBlur={e => updateOnChangeValues(e)}
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
                      validate: {
                        numbersOnly: value => checkForLetters(value) === false,
                      },
                    })}
                />
                {errors.phoneNumber2?.type === "numbersOnly" && (
                  <StyledError>Letters are not accepted as a valid phone number</StyledError>
                )}
              </label>
              <label htmlFor="phoneType2" className="half leftMargin">Phone Type 2
                <select 
                  defaultValue={state.phoneInfo.phoneType2} 
                  onBlur={e => updateOnChangeValues(e)}
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
                      validate: {
                        numbersOnly: value => checkForLetters(value) === false,
                      },
                    })}
                />
                {errors.phoneNumber3 && (
                  <StyledError>{errors.phoneNumber3.message}</StyledError>
                )}
                {errors.phoneNumber3?.type === "numbersOnly" && (
                  <StyledError>Letters are not accepted as a valid phone number</StyledError>
                )}
              </label>
              <label htmlFor="phoneType3" className="half leftMargin">Phone Type 3
                <select 
                  defaultValue={state.phoneInfo.phoneType3} 
                  onBlur={e => updateOnChangeValues(e)}
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
