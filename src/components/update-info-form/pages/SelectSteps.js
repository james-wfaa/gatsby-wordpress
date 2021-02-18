import React, { useContext } from "react"
import IntroPageSection from "../../page-sections/IntroPageSection"
import Buttons from './../FormButtons'
import { AppContext } from "../../../context/AppContext"
import { variantObject } from '../form-helpers'

const SelectSteps = () => {
    const { state, actions } = useContext(AppContext);
    const { setAddressStep, setPhoneStep, setEmploymentStep, setIdentityStep, setLifeEventStep, setNumberOfStepsAdd, setNumberOfStepsDelete } = actions;

    const updateCheckbox = ( stepNumber ) => {
        switch(stepNumber){
            case 1:
                updateNumberOfSteps(!state.addressStep, 3)
                setAddressStep(!state.addressStep)
                break;
            case 2:
                updateNumberOfSteps(!state.phoneStep, 4)
                setPhoneStep(!state.phoneStep)
                break;
            case 3:
                updateNumberOfSteps(!state.employmentStep, 5)
                setEmploymentStep(!state.employmentStep)
                break;
            case 4:
                updateNumberOfSteps(!state.identityStep, 6)
                setIdentityStep(!state.identityStep)
                break;
            case 5:
                updateNumberOfSteps(!state.lifeEventStep, 7)
                setLifeEventStep(!state.lifeEventStep)
                break;
        }
    }

    const updateNumberOfSteps = (change, step) => {
        if (change === true){
            let newOrder = [...state.numberOfSteps, step]
            newOrder.sort(function(a, b){
                return a - b;
            })
            setNumberOfStepsAdd(newOrder)
        } else if (change === false){
            setNumberOfStepsDelete(step)
        }
    }

    const handleSubmit = data =>{
        console.log(data)
        //setCurrentStep(8)
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
                        <label htmlFor="spouse" selected>Spouse/Partner Update (Marriage/Divorce/Death)</label>
                    </div>
                    <Buttons back finish next disabled={!(state.addressStep || state.phoneStep || state.employmentStep || state.identityStep || state.lifeEventStep)}/>
                </fieldset>
            </form>
        </div>
    )
}

export default SelectSteps