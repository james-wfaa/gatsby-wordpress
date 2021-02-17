import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledError, StyledTopError, variantObject } from '../form-helpers'
import IntroPageSection from '../../page-sections/IntroPageSection'
import { colors } from '../../css-variables'
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"

const SpouseInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setSpouseInfoOnchange } = actions;

  const { register, handleSubmit, errors, formState: { submitCount }} = useForm()
  const submitForm = data =>{
    //setCurrentStep(8)

    let currentOrder = state.numberOfSteps
    let currentStep = state.currentStep
    let currentPlaceInOrder = currentOrder.indexOf(currentStep)
    let nextStep = currentOrder[currentPlaceInOrder + 1]
    setCurrentStep(nextStep)
  }
  const updateOnChangeValues = (e) => {
    if(e.target.type === 'checkbox'){
      setSpouseInfoOnchange([e.target.name, !state.spouseInfo.uwGrad])
    } else{
      setSpouseInfoOnchange([e.target.name, e.target.value])
    }
  }
  const requiredFieldsCheck = state.spouseInfo.firstname !== '' && state.spouseInfo.lastname !== '' ;

      return (
        <div>
            <IntroPageSection
              excerpt='Let us know if we should be aware of anything regarding your spouse or partner.'
              heading='Update My Info'
              variantObject={variantObject}
              headingAlt
              headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form id="spouseInfo" onSubmit={handleSubmit(submitForm)} className="spouse-info">
            { requiredFieldsCheck && (Object.keys(errors).length !== 0) && <StyledTopError>Please correct error(s) below</StyledTopError>}
              <legend>Spouse or Partner<span className="requiredInfo">*Required Information</span></legend>
              <hr></hr>
              <label htmlFor="firstname" className="half required">Spouse/Partner First Name
                <span className="required">*</span>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    maxLength="51"
                    defaultValue={state.spouseInfo.firstname}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Phone is required" },
                      maxLength: {
                        value: 50,
                        message: "First name must be less than 50 characters",
                      },
                    })}
                />
                {errors.firstname && (
                  <StyledError>{errors.firstname.message}</StyledError>
                )}
              </label>
              
              <label htmlFor="lastname" className="half leftMargin required">Spouse/Partner Last Name
                <span className="required">*</span>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    maxLength="51"
                    defaultValue={state.spouseInfo.lastname}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      required: { value: true, message: "Phone is required" },
                      maxLength: {
                        value: 50,
                        message: "Last name must be less than 50 characters",
                      },
                    })}
                />
                {errors.lastname && (
                  <StyledError>{errors.lastname.message}</StyledError>
                )}
              </label>
              <input type="checkbox" id="uwGrad" checked={state.spouseInfo.uwGrad} name="uwGrad" onChange={e => updateOnChangeValues(e)} />
              <label htmlFor="uwGrad" >My spouse/partner is a UW graduate</label>
              { state.spouseInfo.uwGrad ? (<div><label htmlFor="undergrad" className="smallThird">UW Undergraduate Year
                <input
                    type="text"
                    name="undergrad"
                    id="undergrad"
                    maxLength="4"
                    defaultValue={state.spouseInfo.undergrad}
                    onChange={e => updateOnChangeValues(e)}
                    placeholder="YYYY"
                    ref={register({
                      /*pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Must be a valid 4 digit graduation year",
                      },*/
                    })}
                />
                {errors.undergrad && (
                  <StyledError>{errors.undergrad.message}</StyledError>
                )}
              </label>
              <label htmlFor="postgrad" className="smallThird leftMargin">UW Postgraduate Year(s)
                {errors.postgrad && (
                  <StyledError>{errors.postgrad.message}</StyledError>
                )}
                <input
                    type="text"
                    name="postgrad"
                    id="postgrad"
                    defaultValue={state.spouseInfo.postgrad}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                    })}
                />
              </label></div>) : null }
              
              <label htmlFor="spouseupdate">What is the update you would like to share about your spouse or partner?</label>
              <input type="radio" id="newSpouse" value="newSpouse" name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "newSpouse"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="newSpouse">This is my new spouse or partner.</label>
              <input type="radio" id="deceasedSpouse" value="deceasedSpouse" name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "deceasedSpouse"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="deceasedSpouse">My spouse or partner is now deceased.</label>
              <input type="radio" id="noSpouse" value="noSpouse" name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "noSpouse"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="noSpouse">I am no longer with my spouse or partner.</label>
              <input type="radio" id="none" value="none" name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "none"} onClick={e => updateOnChangeValues(e)}/>
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
