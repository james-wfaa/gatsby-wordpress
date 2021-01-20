import React, { useContext } from "react"
import Context from '../form-context'
import styled from 'styled-components'
import { mixins, colors, fonts, sizes } from '../../css-variables'

const FormButtons = ({ next, back, finish }) => {
    const { UpdateInfoFormContext } = useContext(Context);

 return  (
        <div className="form-btns">
            { back && <button className="back">Go Back</button>}
            { finish && <input
                type="submit"
                name="submitbutton"
                id="submitbutton"
                value="FINISH UPDATE"
              />}
            
            { next && <button className="next"/*onClick={this.UpdateInfoFormContext.handleNextBtn()}*/>Save and Continue</button>}
        </div>
    )
}
const StyledFormButtons = styled(FormButtons)`
   
    
        
    

`

export default StyledFormButtons