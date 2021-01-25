import { attributesToProps } from "html-react-parser";
import React, { useContext } from "react"
import styled from 'styled-components'
import { AppContext } from "../../../context/AppContext"

const FormButtons = ({ next, back, save, finish, disabled }) => {
    const { state, actions } = useContext(AppContext);
    const { setCurrentStep, setContactInfo, } = actions;

    const handleNextBtn = () => {
        setCurrentStep(1)
      }
    const handleBackBtn = () => {
        setCurrentStep(-1)
      }
    //const disabledClass = disabled ? `disabled` : ''

 return  (
        <div className="form-btns">
            { back && <button className="back" onClick={() => handleBackBtn()}>Go Back</button>}
            { finish && <input
                type="submit"
                name="submitbutton"
                id="submitbutton"
                value="FINISH UPDATE"
                />}
            { save && <button 
                type="submit"
                name="savebutton"
                id="savebutton"
                disabled={disabled}
                className="save">Save and Continue</button>}
            { next && <button className="next" onClick={() => handleNextBtn()}>Save and Continue</button>}
        </div>
    )
}
const StyledFormButtons = styled(FormButtons)`
   
    
        
    

`

export default StyledFormButtons