import React, { useContext } from "react"
//import { useForm } from "react-hook-form"
import IntroPageSection from "../../page-sections/IntroPageSection"
import { sizes, breakpoints, mixins, colors } from '../../css-variables'
import Buttons from './FormButtons'
import ProgressBar from './ProgressBar'
import { AppContext } from "../../../context/AppContext"


const UpdateSuccess = () => {
    const { state, actions } = useContext(AppContext);
    const { setAddressStep, setPhoneStep, setEmploymentStep, setIdentityStep, setLifeEventStep } = actions;
  
    const variantObject = {
        background_color: colors.formIntroBg,
        color: colors.bgRed,
        scroll_color: colors.bgRed,
        text_align: `center`
    }
    /*const updateCheckbox = ( stepNumber ) => {
        switch(stepNumber){
            case 1:
                setAddressStep(!state.addressStep)
                break;
            case 2:
                setPhoneStep(!state.phoneStep)
                break;
            case 3:
                setEmploymentStep(!state.employmentStep)
                break;
            case 4:
                setIdentityStep(!state.identityStep)
                break;
            case 5:
                setLifeEventStep(!state.lifeEventStep)
                break;
        }
    }*/
    /*const handleSubmit = data =>{
        console.log(data)
        //setCurrentStep(6)
    }*/
  
    return (
        <div>
            <IntroPageSection
            excerpt='Thanks so much for updating your info. Someone will be in contact with you if they have any questions about your submission. If you’d like to make any changes to your communication preferences in the future, simply email recordsupdates@supportuw.org to let us know. '
            heading='Thanks so much. Your info has been updated.'
            variantObject={variantObject}
            headingAlt
            headingCompact
            />
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form  className="success-page">
                <legend>Are you interested in receiving communications about any of the following?</legend>
                <fieldset>
                    <div className="checkboxWrap">
                        <input type="checkbox" name="affinity-list-1" id="affinity-list-1" /*checked={state.addressStep} onChange={()=>updateCheckbox(1)}*//>
                        <label htmlFor="affinity-list-1" selected>Affinity List 1</label>
                        <input type="checkbox" name="affinity-list-2" id="affinity-list-2" /*checked={state.addressStep} onChange={()=>updateCheckbox(1)}*//>
                        <label htmlFor="affinity-list-2" selected>Affinity List 2</label>
                        <input type="checkbox" name="affinity-list-3" id="affinity-list-3" /*checked={state.addressStep} onChange={()=>updateCheckbox(1)}*//>
                        <label htmlFor="affinity-list-3" selected>Affinity List 3</label>
                        <input type="checkbox" name="affinity-list-4" id="affinity-list-4" /*checked={state.addressStep} onChange={()=>updateCheckbox(1)}*//>
                        <label htmlFor="affinity-list-4" selected>Affinity List 4</label>
                        <input type="checkbox" name="affinity-list-5" id="affinity-list-5" /*checked={state.addressStep} onChange={()=>updateCheckbox(1)}*//>
                        <label htmlFor="affinity-list-5" selected>Affinity List 5</label>
                        <input type="checkbox" name="affinity-list-6" id="affinity-list-6" /*checked={state.addressStep} onChange={()=>updateCheckbox(1)}*//>
                        <label htmlFor="affinity-list-6" selected>Affinity List 6</label>
                        <input type="checkbox" name="affinity-list-7" id="affinity-list-7" /*checked={state.addressStep} onChange={()=>updateCheckbox(1)}*//>
                        <label htmlFor="affinity-list-7" selected>Affinity List 7</label>
                    </div>
                    <Buttons signup />
                </fieldset>
            </form>
        </div>
    )
}

export default UpdateSuccess