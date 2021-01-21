import React, { useContext } from "react"
import styled from 'styled-components'
import { AppContext } from "../../../context/AppContext"

const FormButtons = ({ next, back, finish }) => {
    const { state, actions } = useContext(AppContext);
    const { setCurrentStep } = actions;

    const handleNextBtn = () => {
        setCurrentStep(1)
      }
    const handleBackBtn = () => {
        setCurrentStep(-1)
      }

 return  (
        <div className="form-btns">
            { back && <button className="back" onClick={() => handleBackBtn()}>Go Back</button>}
            { finish && <input
                type="submit"
                name="submitbutton"
                id="submitbutton"
                value="FINISH UPDATE"
              />}
            
            { next && <button className="next" onClick={() => handleNextBtn()}>Save and Continue</button>}
        </div>
    )
}
const StyledFormButtons = styled(FormButtons)`
   
    
        
    

`

export default StyledFormButtons