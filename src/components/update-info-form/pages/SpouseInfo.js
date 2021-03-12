import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, variantObject, currentYear, handleFormSubmit } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"

const SpouseInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setSpouseInfoOnchange } = actions;

  const { register, handleSubmit, errors, formState: { submitCount }} = useForm()
  const submitForm = data =>{
    //setCurrentStep(8)
    handleFormSubmit(state).then(() => {
      let currentOrder = state.numberOfSteps
      let currentStep = state.currentStep
      let currentPlaceInOrder = currentOrder.indexOf(currentStep)
      let nextStep = currentOrder[currentPlaceInOrder + 1]
      setCurrentStep(nextStep)
    })
  }
  const updateOnChangeValues = (e) => {
    if(e.target.type === 'checkbox'){
      setSpouseInfoOnchange([e.target.name, !state.spouseInfo.uwGrad])
    } else{
      setSpouseInfoOnchange([e.target.name, e.target.value])
    }
  }
  const requiredFieldsCheck = state.spouseInfo.spouseFirstname !== '' && state.spouseInfo.spouseLastname !== '' ;

      return (
        <div>
            <IntroPageSection
              excerpt='If there’s been a change or update regarding your spouse or partner please indicate that here. You can even add grad years for your spouse/partner. And always click “Save and Continue” after completing the page to ensure your changes are recorded.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form id="spouseInfo" onSubmit={handleSubmit(submitForm)} className="spouse-info">
            { requiredFieldsCheck && (Object.keys(errors).length !== 0) && <StyledError className="topError">Please correct error(s) below</StyledError>}
              <legend>Spouse or Partner<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <label htmlFor="spouseFirstname" className="half required">Spouse/Partner First Name
                <span className="required">*</span>
                <input
                    type="text"
                    name="spouseFirstname"
                    id="spouseFirstname"
                    maxLength="51"
                    defaultValue={state.spouseInfo.spouseFirstname}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Phone is required" },
                      maxLength: {
                        value: 50,
                        message: "First name must be less than 50 characters",
                      },
                    })}
                />
                {errors.spouseFirstname && (
                  <StyledError>{errors.spouseFirstname.message}</StyledError>
                )}
              </label>
              
              <label htmlFor="spouseLastname" className="half leftMargin required">Spouse/Partner Last Name
                <span className="required">*</span>
                <input
                    type="text"
                    name="spouseLastname"
                    id="spouseLastname"
                    maxLength="51"
                    defaultValue={state.spouseInfo.spouseLastname}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Phone is required" },
                      maxLength: {
                        value: 50,
                        message: "Last name must be less than 50 characters",
                      },
                    })}
                />
                {errors.spouseLastname && (
                  <StyledError>{errors.spouseLastname.message}</StyledError>
                )}
              </label>
              <input type="checkbox" id="uwGrad" checked={state.spouseInfo.uwGrad} name="uwGrad" onChange={e => updateOnChangeValues(e)} />
              <label htmlFor="uwGrad" >My spouse/partner is a UW graduate</label>
              { state.spouseInfo.uwGrad ? (<div><label htmlFor="spouseUndergrad" className="smallThird">UW Undergraduate Year
                <input
                    type="text"
                    name="spouseUndergrad"
                    id="spouseUndergrad"
                    maxLength="4"
                    defaultValue={state.spouseInfo.spouseUndergrad}
                    onChange={e => updateOnChangeValues(e)}
                    placeholder="YYYY"
                    ref={register({
                      validate: {
                        validYear: value => value > 1847 && value <= currentYear,
                      },
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
                {errors.spouseUndergrad && (
                  <StyledError>{errors.spouseUndergrad.message}</StyledError>
                )}
              </label>
              <label htmlFor="spousePostgrad" className="smallThird leftMargin">UW Postgraduate Year(s)
                {errors.spousePostgrad && (
                  <StyledError>{errors.spousePostgrad.message}</StyledError>
                )}
                <input
                    type="text"
                    name="spousePostgrad"
                    id="spousePostgrad"
                    defaultValue={state.spouseInfo.spousePostgrad}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
              </label></div>) : null }
              
              <label htmlFor="spouseupdate">What is the update you would like to share about your spouse or partner?</label>
              <input type="radio" id="newSpouse" value="This is my new spouse or partner." name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "newSpouse"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="newSpouse">This is my new spouse or partner.</label>
              <input type="radio" id="deceasedSpouse" value="My spouse or partner is now deceased." name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "deceasedSpouse"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="deceasedSpouse">My spouse or partner is now deceased.</label>
              <input type="radio" id="noSpouse" value="I am no longer with my spouse or partner." name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "noSpouse"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="noSpouse">I am no longer with my spouse or partner.</label>
              <input type="radio" id="none" value="None of the above." name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "none"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="none">None of the above.</label>
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

export default SpouseInfo
