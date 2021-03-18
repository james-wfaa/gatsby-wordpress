import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import PageSection from "../../page-sections/PageSection"
import { colors } from '../../css-variables'
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"

const UpdateSuccess = () => {
    const { state, actions } = useContext(AppContext);
    const { setCurrentStep, setCommunicationsSignUpOnchange } = actions;
    const { handleSubmit } = useForm()

    const submitCommunicationsSignup = data =>{
        //console.log(data)
        setCurrentStep(9)
    }

    const updateOnChangeValues = (e) => {
        if(e.target.checked){
            //console.log(state.communicationsSignUp)
            let newList = [...state.communicationsSignUp, e.target.name]
            //console.log(newList)
            setCommunicationsSignUpOnchange(newList)
          } else {
            let newList = [...state.communicationsSignUp.filter(a => a !== e.target.name)]
            //console.log(newList)
            setCommunicationsSignUpOnchange(newList)
        }

    }
    const content = `<div className="successPageIcon"></div>`

    const disableButton = state.communicationsSignUp.length > 0 ? false : true;

    return (
        <div className="success-page">
            <PageSection
            excerpt='Thanks for taking the time to do a complete update of your information. Now you’re all set to receive messages, invitations, and more — and you have a better way to stay connected to UW–Madison and WAA. On, Wisconsin!'
            heading='Thank you. Your information has been updated.'
            headingAlt
            headingCompact
            content={content}
            backgroundColor={colors.formIntroBg}
            >
                <div className="successPageIcon"></div>
            </PageSection>
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            <form className="success-page" onSubmit={handleSubmit(submitCommunicationsSignup)}>
                <legend>Are you interested in receiving communications about any of the following?</legend>
                <fieldset>
                    <div className="checkboxWrap">
                        <input type="checkbox" name="affinity-list-1" id="affinity-list-1" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-1" selected>Advocating for the UW</label>
                        <input type="checkbox" name="affinity-list-2" id="affinity-list-2" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-2" selected>Alumni chapters</label>
                        <input type="checkbox" name="affinity-list-3" id="affinity-list-3" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-3" selected>Alumni travel</label>
                        <input type="checkbox" name="affinity-list-4" id="affinity-list-4" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-4" selected>Career and professional networks</label>
                        <input type="checkbox" name="affinity-list-5" id="affinity-list-5" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-5" selected>Recent grad network</label>
                        <input type="checkbox" name="affinity-list-6" id="affinity-list-6" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-6" selected>WAA membership</label>
                        <input type="checkbox" name="affinity-list-7" id="affinity-list-7" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-7" selected>African American Affinity Group</label>
                        <input type="checkbox" name="affinity-list-8" id="affinity-list-8" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-8" selected>American Indian Affinity Group</label>
                        <input type="checkbox" name="affinity-list-9" id="affinity-list-9" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-9" selected>Asian Pacific Islander Desi American Affinity Group</label>
                        <input type="checkbox" name="affinity-list-10" id="affinity-list-10" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-10" selected>Latinx Affinity Group</label>
                        <input type="checkbox" name="affinity-list-11" id="affinity-list-11" onChange={e => updateOnChangeValues(e)}/>
                        <label htmlFor="affinity-list-11" selected>LGBTQ+ Affinity Group</label>
                    </div>
                    <Buttons
                        signup
                        disabled={disableButton} />
                </fieldset>
            </form>
        </div>
    )
}

export default UpdateSuccess