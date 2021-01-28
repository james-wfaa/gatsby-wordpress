import { attributesToProps } from "html-react-parser";
import React, { useContext } from "react"
import styled from 'styled-components'
import { AppContext } from "../../../context/AppContext"

const FormButtons = ({ next, back, save, finish, signup, address, backAddress, nextAddress, disabled }) => {
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
    const handleBackAddressBtn = () => {
        setCurrentStep(3)
      }
    const handleAddressBtn = () => {
        setCurrentStep(3)
      }
    const handleNextAddressBtn = () => {
        let currentOrder = state.numberOfSteps
        let currentStep = 3
        let currentPlaceInOrder = currentOrder.indexOf(currentStep)
        let nextStep = currentOrder[currentPlaceInOrder + 1]
        setCurrentStep(nextStep)
    }
    //const disabledClass = disabled ? `disabled` : ''

 return  (
        <div className="form-btns">
            { back && <button className="back" onClick={() => handleBackBtn()}>Go Back</button>}
            { backAddress && <button className="back" onClick={() => handleBackAddressBtn()}>Go Back</button>}
            { finish && <button
                type="submit"
                name="submitbutton"
                id="submitbutton"
                disabled={!disabled}
                >Finish Update</button>}
            { address && <button className="address" onClick={() => handleAddressBtn()}>Update Another Address</button>}
            { save && <button 
                type="submit"
                name="savebutton"
                id="savebutton"
                disabled={disabled}
                className="save">Save and Continue</button>}
            { next && <button className="next" onClick={() => handleNextBtn()} disabled={disabled}>Save and Continue</button>}
            { nextAddress && <button className="next" onClick={() => handleNextAddressBtn()} disabled={disabled}>Save and Continue</button>}
            { signup && <button 
                type="submit"
                name="signupbutton"
                id="signupbutton"
                className="signup">Sign up for Communications</button>}
        </div>
    )
}
const StyledFormButtons = styled(FormButtons)`
   
    
        
    

`

export default StyledFormButtons