import React, { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import PageSection from "../../page-sections/PageSection"
import { colors } from '../../css-variables'
import Buttons from './../FormButtons'
import ProgressBar from './../ProgressBar'
import { AppContext } from "../../../context/AppContext"
import { handleCommFormSubmit, FormGeneralError } from '../form-helpers'

const UpdateSuccess = () => {
    const { state, actions } = useContext(AppContext);
    const { setCurrentStep, setCommunicationsSignUpOnchange } = actions;
    const { handleSubmit } = useForm()
    const [generalError, setGeneralError] = useState('')

    useEffect(() => {
        //clear all form inputs
    }, []);

    const submitCommunicationsSignup = data =>{
        handleCommFormSubmit(state).then((returnedData) =>{
            if(returnedData.is_valid === false){
              throw new Error('something went wrong with submitting the form');
            }
        }).then(() =>{
            setCurrentStep(9)
        }).catch(err => {setGeneralError(err.message)})
    }

    const updateOnChangeValues = (e) => {
        if(e.target.checked){
            let newList = [...state.communicationsSignUp, e.target.name]
            setCommunicationsSignUpOnchange(newList)
          } else {
            let newList = [...state.communicationsSignUp.filter(a => a !== e.target.name)]
            setCommunicationsSignUpOnchange(newList)
        }
    }
    //const content = `<div className="successPageIcon"></div>`
    
    const disableButton = state.communicationsSignUp.length > 0 ? false : true;

    const affinityLists = ['Advocating for the UW', 'Alumni chapters', 'Alumni enrichment', 'Alumni travel', 'Career and professional networks','WAA membership','WAA athletics activities','African American Affinity Group','American Indian Affinity Group','Asian Pacific Islander Desi American Affinity Group', 'Latinx Affinity Group', 'LGBTQ+ Affinity Group']
    let listNumber = 0
    const affinityCheckboxes = affinityLists.map((list) => {
        listNumber++
        return(
            <div>
                <input type="checkbox" name={list} id={`affinity-list-${listNumber}`} onChange={e => updateOnChangeValues(e)}/>
                <label htmlFor={`affinity-list-${listNumber}`} selected>{list}</label>
            </div>
        )
    })

    return (
        <div className="success-page">
            <PageSection
            excerpt='Thanks for taking the time to do a complete update of your information. Now you’re all set to receive messages, invitations, and more — and you have a better way to stay connected to UW–Madison and WAA.'
            heading='Thank you. Your information has been updated.'
            headingCompact
            backgroundColor={colors.formIntroBg}
            pageTitle
            formRefresh
            >
                <div className="successPageIcon"></div>
            </PageSection>
            <ProgressBar progress={state.numberOfSteps} currentStep={state.currentStep}/>
            {generalError && (
              <FormGeneralError>We’re sorry, but a network issue prevented us from saving your information. Our team has been notified, but you can <a href="mailto:web@supportuw.org">contact WAA</a> if you need immediate assistance.</FormGeneralError>
            )}
            <form className="success-page" onSubmit={handleSubmit(submitCommunicationsSignup)}>
                <legend>Are you interested in receiving communications about any of the following?</legend>
                <fieldset>
                    <div className="checkboxWrap">
                        {affinityCheckboxes}
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