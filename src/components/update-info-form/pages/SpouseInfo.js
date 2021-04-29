import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { StyledError, currentYear, handleFormSubmit, FormGeneralError } from '../form-helpers'
import PageSection from '../../page-sections/PageSection'
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { colors } from '../../css-variables'
import { AppContext } from "../../../context/AppContext"

const SpouseInfo = () => {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setSpouseInfoOnchange } = actions;
  const [generalError, setGeneralError] = useState('')

  const { register, handleSubmit, errors, formState: { submitCount }} = useForm({mode : 'onChange'})
  const submitForm = data =>{
    handleFormSubmit(state).then((returnedData) =>{
      if(returnedData.is_valid === false){
        throw new Error('something went wrong with submitting the form');
      }
    }).then(() => {
      let currentOrder = state.numberOfSteps
      let currentStep = state.currentStep
      let currentPlaceInOrder = currentOrder.indexOf(currentStep)
      let nextStep = currentOrder[currentPlaceInOrder + 1]
      setCurrentStep(nextStep)
    }).catch(err => {setGeneralError(err.message)})
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
            <PageSection
              excerpt='If there’s been a change regarding your spouse or partner, please indicate that here. If your spouse/partner is a UW-Madison alum, you can even add grad years. Click “Save and Continue” after completing the page to ensure your changes are recorded.'
              heading='Update My Info'
              headingCompact
              backgroundColor={colors.formIntroBg}
              pageTitle
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            {generalError && (
              <FormGeneralError>We’re sorry, but a network issue prevented us from saving your information. Our team has been notified, but you can <a href="mailto:web@supportuw.org">contact WAA</a> if you need immediate assistance.</FormGeneralError>
            )}
            <form id="spouseInfo" onSubmit={handleSubmit(submitForm)} className="spouse-info">
            { requiredFieldsCheck && (Object.keys(errors).length !== 0) && <StyledError className="topError">Please correct error(s) below</StyledError>}
              <legend>Spouse/Partner<span className="requiredInfo">*Required Information</span></legend>
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
              <label htmlFor="uwGrad" >My spouse/partner is a UW-Madison graduate</label>
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
                      /*validate: {
                        validYear: value => value > 1847 && value <= currentYear,
                      },*/
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
                {errors && errors.spouseUndergrad?.type === 'validYear' && (
                  <StyledError>Must be a valid year.</StyledError>
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
                    maxLength="51"
                    defaultValue={state.spouseInfo.spousePostgrad}
                    onChange={e => updateOnChangeValues(e)}
                    ref={register({
                      maxLength: {
                        value: 50,
                        message: "Cannot be more than 50 characters",
                      },
                    })}
                />
              </label></div>) : null }
              
              <label htmlFor="spouseupdate">What is the update you would like to share about your spouse/partner?</label>
              <input type="radio" id="newSpouse" value="newSpouse" name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "newSpouse"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="newSpouse">This is my new spouse/partner.</label>
              <input type="radio" id="deceasedSpouse" value="deceasedSpouse" name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "deceasedSpouse"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="deceasedSpouse">My spouse/partner is now deceased.</label>
              <input type="radio" id="noSpouse" value="noSpouse" name="spouseUpdate" defaultChecked={state.spouseInfo.spouseUpdate === "noSpouse"} onClick={e => updateOnChangeValues(e)}/>
              <label htmlFor="noSpouse">I am no longer with my spouse/partner.</label>
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
