import React, { useContext } from "react"
import PageSection from "../../page-sections/PageSection"
import { colors } from '../../css-variables'
import Buttons from './../FormButtons'
import { AppContext } from "../../../context/AppContext"

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
            default:
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
        //console.log(data)
        //setCurrentStep(8)
    }
  
    return (
        <div>
            <PageSection
            excerpt='Great, thanks for making those updates. Now, please review the following areas and check the ones you’d like to modify. It’ll only take a few minutes and provide you with many more ways to feel connected. This information helps tailor messages to your location, interests, and more. Otherwise, simply choose Finish Update below.'
            heading='Update My Info'
            headingAlt
            headingCompact
            backgroundColor={colors.formIntroBg}
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
                        <label htmlFor="demographic" selected>Race/Ethnicity/Identity Information</label>
                        <input type="checkbox" name="spouse" id="spouse" checked={state.lifeEventStep} onChange={()=>updateCheckbox(5)} />
                        <label htmlFor="spouse" selected>Spouse/Partner Update</label>
                    </div>
                    <Buttons back finish next disabled={!(state.addressStep || state.phoneStep || state.employmentStep || state.identityStep || state.lifeEventStep)}/>
                </fieldset>
            </form>
        </div>
    )
}

export default SelectSteps