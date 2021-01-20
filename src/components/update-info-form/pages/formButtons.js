import React, { useContext } from "react"
import Button from "../../parts/Button"
import Context from '../form-context';

const FormButtons = ({ next, back, finish }) => {
    const { UpdateInfoFormContext } = useContext(Context);

 return  (
        <div className="form-btns">
            { back && <button >Go Back</button>}
            { finish && <input
                type="submit"
                name="submitbutton"
                id="submitbutton"
                value="FINISH UPDATE"
              />}
            
            { next && <button /*onClick={this.UpdateInfoFormContext.handleNextBtn()}*/>Save and Continue</button>}
        </div>
    )
}

export default FormButtons