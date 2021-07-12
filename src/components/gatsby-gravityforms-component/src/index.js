import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form/dist/index.ie11'
import ReactHtmlParser from 'react-html-parser'
import FormGeneralError from './components/FormGeneralError'
import FieldBuilder from './container/FieldBuilder'
import getForm from './utils/getForm'
import {
    handleGravityFormsValidationErrors,
    // manageMainFormError,
} from './utils/manageErrors'
import { submissionHasOneFieldEntry } from './utils/manageFormData'
import passToGravityForms from './utils/passToGravityForms'

/**
 * Component to take Gravity Form graphQL data and turn into
 * a fully functional form.
 * @param {mixed} formData Form dataset from graphQL
 * @param {int} id Form ID from Gravity Forms
 * @param {string} lambda API link for Lambda functions when working with
 *                        netlify or similar
 */
const GravityFormForm = ({
    id,
    formData,
    lambda,
    presetValues = {},
    successCallback = ({ reset }) => reset(),
    errorCallback,
    onChange,
    checkboxes
}) => {
    // Pull in form functions
    const {
        errors,
        handleSubmit,
        register,
        reset,
        setError,
        setValue,
        formState: { isValid, isDirty, isSubmitted },
    } = useForm({mode : 'onChange'})
    const [generalError, setGeneralError] = useState('')
    const [formLoading, setLoadingState] = useState(false)
    const [errorList, setErrorList] = useState()
    const recaptchaRef = useRef(null)

    // State for confirmation message
    const [confirmationMessage, setConfirmationMessage] = useState('')

    // Take ID argument and graphQL Gravity Form data for this form
    const singleForm = getForm(formData, id)
    //console.log(singleForm)

    const isMultipart = singleForm && singleForm?.formFields ? checkForMultipart(singleForm.formFields) : false

    function checkForMultipart( myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].type === "fileupload" || myArray[i].type === "post_image") {
                return true
            }
        }
    }

    const onSubmitCallback = async values => {
        // Make sure we are not already waiting for a response
        if (!formLoading) {
            // Clean error
            setGeneralError('')
            
    //console.log(values)
            // Check that at least one field has been filled in
            if (submissionHasOneFieldEntry(values)) {
                setLoadingState(true)

                if(Object.keys(values).includes('g-recaptcha-response')){
                    const token = await recaptchaRef.current.executeAsync();
                    values['g-recaptcha-response'] = token
                }

                if(Object.keys(checkboxes).length > 0){
                    values = {...values, ...checkboxes}
                }

                function checkForPhoneInput( myArray){
                    for (var i=0; i < myArray.length; i++) {
                        if (myArray[i].type === "phone") {
                            return true
                        }
                    }
                }
                if(singleForm && singleForm?.formFields){
                    if(checkForPhoneInput(singleForm?.formFields)){
                        Object.keys(values).forEach(key =>{
                            if(values[key] === '+1' ){
                                values[key] = ''
                            }
                        })
                    }
                }

                const { data, status } = await passToGravityForms({
                    baseUrl: singleForm.apiURL,
                    formData: values,
                    id,
                    lambdaEndpoint: lambda,
                    isMultipart: isMultipart
                })
                //console.log(data)
                setLoadingState(false)

                const returnData = data?.data
                //console.log(returnData)

                if (status === 'error' || returnData?.is_valid === false) {
                    // Handle the errors
                    // First check to make sure we have the correct data

                    if (data?.status === 'gravityFormErrors') {
                        // Pass messages to handle that sets react-hook-form errors
                        handleGravityFormsValidationErrors(
                            data.validation_messages,
                            setError,
                            singleForm
                        )
                    } else if(returnData?.is_valid === false){
                        if(returnData?.validation_messages && Object.keys(returnData?.validation_messages).length > 0){
                            /*let newList = []
                            Object.keys(returnData?.validation_messages).forEach(function(key) {
                                const id = key.replace('.', '_')
                                const fieldId = `input_${id}`
                                newList.push(`${fieldId} : ${returnData?.validation_messages[key]}`)
                            })
                            setErrorList(newList)
                            setGeneralError('formHasErrorWithMsg')*/
                            handleGravityFormsValidationErrors(
                                returnData.validation_messages,
                                setError,
                                singleForm
                            )
                        } else{
                            setGeneralError('formHasError')
                        }
                    } else {
                        // Seemed to be an unknown issue
                        setGeneralError('unknownError')
                    }

                    errorCallback &&
                        errorCallback({ values, error: data, reset })
                }

                if (status === 'success') {
                    const { confirmation_message } = data?.data

                    const { confirmations } = singleForm

                    const confirmation = confirmations?.find(el => el.isDefault)

                    setConfirmationMessage(
                        confirmation_message || confirmation?.message || false
                    )

                    successCallback({
                        values,
                        reset,
                        confirmations,
                        formData: singleForm,
                    })
                }
            } else {
                setGeneralError('leastOneField')
            }
        }
    }

    if (!confirmationMessage) {
        return (
            <div className="gform_wrapper" id={`gform_wrapper_${id}`}>
                <div className="gform_anchor" id={`gf_${id}`} />
                {singleForm && (
                    <form
                        className={
                            formLoading
                                ? `gravityform gravityform--loading gravityform--id-${id}`
                                : `gravityform gravityform--id-${id}`
                        }
                        //TODO: ID change go GF standard "gfrom_1"?
                        id={`gravityform--id-${id}`}
                        key={`gravityform--id-${id}`}
                        onSubmit={handleSubmit(onSubmitCallback)}
                        encType={isMultipart ? "multipart/form-data" : null}
                    >
                        {generalError && (
                            <FormGeneralError errorCode={generalError} errorList={errorList}/>
                        )}
                        <div className="gform_body">
                            <ul
                                className={classnames(
                                    'gform_fields',
                                    {
                                        [`form_sublabel_${singleForm.subLabelPlacement}`]: singleForm.subLabelPlacement,
                                    },
                                    `description_${singleForm.descriptionPlacement}`,
                                    `${singleForm.labelPlacement}`
                                )}
                                id={`gform_fields_${id}`}
                            >
                                <FieldBuilder
                                    errors={errors}
                                    formData={singleForm}
                                    formId={id}
                                    presetValues={presetValues}
                                    register={register}
                                    setValue={setValue}
                                    onChange={onChange}
                                    recaptchaRef={recaptchaRef}
                                />
                            </ul>
                        </div>

                        <div
                            className={`gform_footer ${singleForm.labelPlacement}`}
                        >
                            <button
                                className="gravityform__button gform_button button"
                                id={`gform_submit_button_${id}`}
                                type="submit"
                                disabled={isSubmitted ? !isDirty : !isDirty || !isValid }
                            >
                                {formLoading ? (
                                    <span className="gravityform__button__loading_span">
                                        Loading
                                    </span>
                                ) : (
                                    singleForm?.button?.text || 'Submit'
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        )
    }

    return ReactHtmlParser(confirmationMessage)
}

GravityFormForm.defaultProps = {
    lambda: '',
}

GravityFormForm.propTypes = {
    errorCallback: PropTypes.func,
    formData: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    lambda: PropTypes.string,
    successCallback: PropTypes.func,
    onChange: PropTypes.func,
    checkboxes: PropTypes.object,
}

export default GravityFormForm
