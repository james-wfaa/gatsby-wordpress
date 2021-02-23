import React, { useContext } from "react"
import styled from 'styled-components'
import { AppContext } from "../../context/AppContext"
import { StyledError } from './form-helpers'
import { mixins, colors, fonts, sizes, breakpoints } from '../../components/css-variables'
import formErrorIcon from "./../../svg/form-error-icon-red.svg"

const FormButtons = ({ next, back, save, finish, signup, disabled, error, errors, submitCount }) => {
    const { state, actions } = useContext(AppContext);
    const { setCurrentStep, setContactInfo, } = actions;

    const handleNextBtn = () => {
      let currentOrder = state.numberOfSteps
      let currentStep = state.currentStep
      let currentPlaceInOrder = currentOrder.indexOf(currentStep)
      let nextStep = currentOrder[currentPlaceInOrder + 1]
      setCurrentStep(nextStep)
    }
    const handleBackBtn = () => {
      let currentOrder = state.numberOfSteps
      let currentStep = state.currentStep
      let currentPlaceInOrder = currentOrder.indexOf(currentStep)
      let nextStep = currentOrder[currentPlaceInOrder - 1]
      setCurrentStep(nextStep)
    }
    const handleFinishBtn = () => {
      setCurrentStep(8)
    }

 return  (
        <div className="form-btns">
            { disabled && (<p className="validFormMessage">Please complete all required (<span className="red">*</span>) fields. </p>) }
            { error && (<StyledError className="bottomButtonError">Please correct error(s) above</StyledError>)}
            { back && <button className="back" onClick={() => handleBackBtn()}>Go Back</button>}
            { finish && <button
                type="submit"
                name="finish"
                onClick={() => handleFinishBtn()}
                id="submitbutton"
                disabled={!disabled}
                >Finish Update</button>}
            { save && <button 
                type="submit"
                name="savebutton"
                id="savebutton"
                disabled={disabled}
                className="save">Save and Continue</button>}
            { next && <button className="next" onClick={() => handleNextBtn()} disabled={disabled}>Save and Continue</button>}
            { signup && <button 
                type="submit"
                name="signupbutton"
                id="signupbutton"
                className="signup"
                disabled={disabled}>Sign up for Communications</button>}
        </div>
    )
}

const StyledFormButtons = styled(FormButtons)`

  margin: 58px auto;
  text-align: center;
  position:relative;
  button{
    display: block;
    width: 100%;
    min-width: 6.5rem;
    font-family: ${fonts.verlag};
    font-style: normal;
    font-size: ${sizes.s16};
    line-height: ${sizes.s16};
    font-weight: bold;
    padding: ${sizes.s16};
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    margin: ${sizes.s24} auto 0 ;
    border:none;
    max-width:315px;
    border-radius: 0;
    &:hover {
      cursor:pointer;
    }
    &.next, &.save, &.signup{
      background-color: ${colors.buttonRed};
      color: ${colors.titleWhite};
      &:after{
        content:'';
            border: solid #ffffff;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 5px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            margin-left:12px;
      }
      &:hover {
        background-color: ${colors.buttonHoverRed};
        box-shadow: 4px 4px 6px rgba(0,0,0,0.2);
      }
      &:active {
          background-color: ${colors.buttonHoverRed};
      }
      &:disabled {
        background-color: ${colors.disabledButtonGrey};
        box-shadow:none;
        cursor: default;
      }
    }
    &.back{
      border: 1px solid ${colors.buttonRed};
      background-color: ${colors.bgWhite};
      color: ${colors.buttonRed};
      line-height: ${sizes.s12};
      &:before{
        content:'';
            border: solid ${colors.buttonRed};
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 5px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
            margin-right:8px;
      }
      @media screen and ${breakpoints.tabletS} {
        margin-right: 40px;
      }
    }
    &.address{
      color:white;
      background-color: ${colors.buttonRed};
    }
    &.address{
      margin-right:40px;
    }
    &#submitbutton{
      background-color: ${colors.buttonRed};
      color: ${colors.titleWhite};
      &:hover {
        background-color: ${colors.buttonHoverRed};
        box-shadow: 4px 4px 6px rgba(0,0,0,0.2);
      }
      &:disabled {
        background-color: ${colors.disabledButtonGrey};
        box-shadow: none;
        cursor:default;
      }
      @media screen and ${breakpoints.tabletS} {
        margin-right: 40px;
      }
    }
    &.errorMessage{
      position:Relative;
    }
    &.errorMessage::before{
      content: 'Please correct error(s) above';
      font-family: ${fonts.verlag};
      font-style: normal;
      margin: 0 auto;
      padding: 0 0 0 24px;
      font-size: 16px;
      position: absolute;
      color: ${colors.buttonRed};
      text-transform: none;
      font-weight:normal;
      top: -36px;
      background-image: url(${formErrorIcon});
      background-repeat: no-repeat;
      @media screen and ${breakpoints.tabletS} {
        top: unset;
        right: -215px;
      }
    }
    @media screen and ${breakpoints.tabletS} {
      width: auto;
      display: inline-block;
    }
  }

`

export default StyledFormButtons