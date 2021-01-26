import React, { useContext } from "react"
//import { useForm } from "react-hook-form"
import IntroPageSection from "../../page-sections/IntroPageSection"

import { sizes, breakpoints, mixins, colors } from '../../css-variables'
import Buttons from './FormButtons'
import { AppContext } from "../../../context/AppContext"


const SelectSteps = () => {
    const { state, actions } = useContext(AppContext);
    const { setAddressStep, setPhoneStep, setEmploymentStep, setIdentityStep, setLifeEventStep, setNumberOfSteps } = actions;
  
    const variantObject = {
        background_color: colors.formIntroBg,
        color: colors.bgRed,
        scroll_color: colors.bgRed,
        text_align: `center`
    }
    const updateCheckbox = ( stepNumber ) => {
        switch(stepNumber){
            case 1:
                updateNumberOfSteps(!state.addressStep)
                setAddressStep(!state.addressStep)
                break;
            case 2:
                updateNumberOfSteps(!state.phoneStep)
                setPhoneStep(!state.phoneStep)
                break;
            case 3:
                updateNumberOfSteps(!state.employmentStep)
                setEmploymentStep(!state.employmentStep)
                break;
            case 4:
                updateNumberOfSteps(!state.identityStep)
                setIdentityStep(!state.identityStep)
                break;
            case 5:
                updateNumberOfSteps(!state.lifeEventStep)
                setLifeEventStep(!state.lifeEventStep)
                break;
        }
    }
    const updateNumberOfSteps = (change) => {
        console.log(change)
        if (change === true){
            setNumberOfSteps(1)
        } else if (change === false){
            setNumberOfSteps(-1)
        }
    }
    const handleSubmit = data =>{
        console.log(data)
        //setCurrentStep(6)
      }

    const disabledBtn = () => {
        console.log('disabled')
        return state.addressStep || state.phoneStep || state.employmentStep || state.identityStep || state.lifeEventStep
        
    }
  
    return (
        <div>
            <IntroPageSection
            excerpt='Thanks so much. Now, let us know what else you are wanting to update, if anything.'
            heading='Update My Info'
            variantObject={variantObject}
            headingAlt
            headingCompact
            />
            <form className="select-steps" onSubmit={handleSubmit(handleSubmit)}>
                <fieldset>
                    <div className="checkboxWrap">
                        <input type="checkbox" name="address" id="address" checked={state.addressStep} onChange={()=>updateCheckbox(1)}/>
                        <label htmlFor="address" selected>Mailing Address</label>
                        <input type="checkbox" name="phone" id="phone" checked={state.phoneStep} onChange={()=>updateCheckbox(2)}/>
                        <label htmlFor="phone" selected>Phone Number</label>
                        <input type="checkbox" name="employment" id="employment" checked={state.employmentStep} onChange={()=>updateCheckbox(3)}/>
                        <label htmlFor="employment" selected>Employment Information</label>
                        <input type="checkbox" name="demographic" id="demographic" checked={state.identityStep} onChange={()=>updateCheckbox(4)} />
                        <label htmlFor="demographic" selected>Demographic/Identity/Country Information</label>
                        <input type="checkbox" name="spouse" id="spouse" checked={state.lifeEventStep} onChange={()=>updateCheckbox(5)} />
                        <label htmlFor="spouse" selected>Spouse Update (Marriage/Divorce/Death)</label>
                    </div>
                    <Buttons back finish next disabled={!(state.addressStep || state.phoneStep || state.employmentStep || state.identityStep || state.lifeEventStep)}/>
                </fieldset>
            </form>
        </div>
    )
}

export default SelectSteps