import React from "react"
import Button from "../../parts/Button"

const formButtons = ({ next, back, finish }) => {
    

 return  (
        <div className="form-btns">
            { back && <button >Go Back</button>}
            { finish && <input
                type="submit"
                name="submitbutton"
                id="submitbutton"
                value="FINISH UPDATE"
              />}
            
            { next && <button >Save and Continue</button>}
        </div>
    )
}

export default formButtons