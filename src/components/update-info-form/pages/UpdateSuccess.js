import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import IntroPageSection from "../../page-sections/IntroPageSection"
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"
import { variantObject } from '../form-helpers'

const UpdateSuccess = () => {
    const { state, actions } = useContext(AppContext);
    const { setCurrentStep } = actions;
    const { handleSubmit, errors, formState: { isValid } } = useForm({
        mode: "onChange",
      })
    const submitCommunicationsSignup = data =>{
        console.log(data)
        setCurrentStep(9)
    }
    const content = `<div className="successPageIcon"></div>`
  
    return (
        <div className="success-page">
            <IntroPageSection
            excerpt='Thanks so much for updating your info. Someone will be in contact with you if they have any questions about your submission. If you’d like to make any changes to your communication preferences in the future, simply email <span class="red">recordsupdates@supportuw.org</span> to let us know. '
            heading='Thanks so much. Your info has been updated.'
            variantObject={variantObject}
            headingAlt
            headingCompact
            content={content}
            />
            <div className="successPageIcon"></div>
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form className="success-page" onSubmit={handleSubmit(submitCommunicationsSignup)}>
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