import React, { useContext } from "react"
//import { useForm } from "react-hook-form"
import IntroPageSection from "../../page-sections/IntroPageSection"

import { sizes, breakpoints, mixins, colors } from '../../css-variables'
import Buttons from './FormButtons'
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
    const updateCheckbox = ( stepNumber ) => {
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
    }
    const handleSubmit = data =>{
        console.log(data)
        //setCurrentStep(6)
      }
  
    return (
        <div>
            <IntroPageSection
            excerpt='Thanks so much for updating your info. Someone will be in contact with you if they have any questions about your submission. If you’d like to make any changes to your communication preferences in the future, simply email recordsupdates@supportuw.org to let us know. '
            heading='Thanks so much. Your info has been updated.'
            variantObject={variantObject}
            headingAlt
            headingCompact
            />
            <form className="select-steps" onSubmit={handleSubmit(handleSubmit)}>
                <legend>Are you interested in receiving communications about any of the following?</legend>
                <fieldset>
                    <input type="checkbox" name="affinity-list-1" id="affinity-list-1" /*checked={state.addressStep} onChange={()=>updateCheckbox(1)}*//>
                    <label htmlFor="affinity-list-1" selected>Affinity List 1</label>
                    <Buttons signup />
                </fieldset>
            </form>
        </div>
    )
}

export default UpdateSuccess