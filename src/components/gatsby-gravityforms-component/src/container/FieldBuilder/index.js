import classnames from 'classnames'
import get from 'lodash/get'
import React, { useState, useEffect } from 'react'

import Address from '../../components/Address'
import Captcha from '../../components/Captcha'
import Html from '../../components/Html'
import Input from '../../components/Input'
import Multiselect from '../../components/Multiselect'
import Name from '../../components/Name'
import Select from '../../components/Select'
import SelectorList from '../../components/SelectorList'
import Textarea from '../../components/Textarea'
import { filteredKeys } from '../../utils/helpers'
import { ifDefaultValue, islabelHidden } from '../../utils/inputSettings'

const FieldBuilder = ({
    formData,
    presetValues = {},
    register,
    errors,
    setValue,
    onChange
}) => {
    //console.log(formData)
    const [fieldValues, setfieldValues] = useState({});
    useEffect(() => {
        formData.formFields.map(field => {
            //console.log(field, field.type)
            if(field.type === 'radio' || field.type === 'checkbox'){
                populateChoiceValues(field)
            } else if(field.type === 'select'){
                populateSelectDefault(field)
            }
        })
    }, []);

    const populateChoiceValues = (field) => {
        const selected = JSON.parse(field.choices).filter(choice => {
            return choice.isSelected
        })
        setfieldValues({ ...fieldValues, [field.id]: selected.length ? selected[0].value : '' } )
    }

    const populateSelectDefault = (field) => {
        const selected = JSON.parse(field.choices).filter(choice => {
            return choice.isSelected
        })
        setfieldValues({ ...fieldValues, [field.id]: selected.length > 0 ? selected[0].value : JSON.parse(field.choices)[0].value })
    }

    const handleFieldChange = (fieldId, value, inputId) => {
    
        let fieldInfo = formData.formFields.filter(field => field.id === fieldId)

        if(fieldInfo && fieldInfo?.length > 0 && (fieldInfo[0].type === 'radio' ) && inputId){
            setfieldValues({
                ...fieldValues,
                [fieldId]: {
                    [inputId]: value,
                },
            })
        }
        if(fieldInfo && fieldInfo?.length > 0 && (fieldInfo[0].type === 'checkbox') && inputId){
            let checkIfExists = typeof fieldValues[fieldId] === 'object' ? Object.values(fieldValues[fieldId]).includes(value) : false;

            if(checkIfExists){
                const updatefv = {
                    ...fieldValues
                }
                delete updatefv[fieldId][inputId]
    
                setfieldValues(updatefv)

            }else{
                setfieldValues({
                    ...fieldValues,
                    [fieldId]: {
                        ...fieldValues[fieldId],
                        [inputId]: value,
                    },
                })
            }
        }
        if(fieldInfo && fieldInfo?.length > 0 && (fieldInfo[0].type === 'select' ) && value){
            setfieldValues({
                ...fieldValues,
                [fieldId]: value,
            })
        }
        //add default or other cases if not radio/replacing value
    }

    // Loop through fields and create
    return formData.formFields.map(field => {
        // Set the wrapper classes
        const {
            descriptionPlacement: fieldDescPlace,
            isRequired,
            subLabelPlacement: fieldSubLabelPlace,
            visibility,
        } = field

        const descriptionPlacement =
            fieldDescPlace || formData.descriptionPlacement

        const subLabelPlacement =
            fieldSubLabelPlace || formData.subLabelPlacement

        const fieldData = { ...field, descriptionPlacement }
        const isHiddenClass = field.type === "hidden" ? 'gform_hidden' : null
        let inputWrapperClass = classnames(
            'gfield',
            'gravityform__field',
            'gravityform__field__' + field.type,
            'gravityform__field--' + field.size,
            field.cssClass,
            { 'field-required': field.isRequired },
            { 'hidden-label': islabelHidden(field.labelPlacement) },
            { gfield_contains_required: isRequired },
            { [`field_sublabel_${subLabelPlacement}`]: subLabelPlacement },
            `field_description_${descriptionPlacement}`,
            `gfield_visibility_${visibility}`,
            isHiddenClass
        )

        const wrapId = `field_${formData.formId}_${field.id}`

        //TODO: Should this match GF version "input_form.id_input.id"
        const inputName = `input_${field.id}`

        let errorKey = ''

        //console.log(field.type)
        //CONDITIONAL LOGIC
        const handleConditionalLogic = (field) => {
            const rulesMet = !(field?.conditionalLogic) || !(JSON.parse(field.conditionalLogic)?.rules)
                ? null
                : JSON.parse(field.conditionalLogic).rules.map(rule => {
                let conditionalValue = fieldValues[rule.fieldId]
                //console.log(conditionalValue, field, fieldValues)

                if (typeof conditionalValue == 'object') {
                    let matchKey = Object.keys(conditionalValue).filter(key => fieldValues[rule.fieldId][key] == rule.value)
                    conditionalValue = matchKey && fieldValues[rule.fieldId][matchKey] ? fieldValues[rule.fieldId][matchKey] : false
                }
                //console.log(typeof conditionalValue)
                switch (rule.operator) {
                    case 'is':
                        return conditionalValue == rule.value
    
                    case 'is not':
                        return conditionalValue != rule.value
    
                    case 'greater than':
                        return conditionalValue > rule.value
    
                    case 'less than':
                        return conditionalValue < rule.value
    
                    case 'contains':
                        return typeof conditionalValue === 'array' || typeof conditionalValue === 'string' ? conditionalValue.indexOf(rule.value) >= 0 : false
    
                    case 'starts with':
                        return conditionalValue.indexOf(rule.value) == 0
    
                    case 'ends with':
                        return conditionalValue.indexOf(rule.value) == conditionalValue.length - rule.value.length
                }
                //console.log(conditionalValue, field.id, fieldValues)
            })
            
            //console.log(rulesMet, rulesMet.indexOf(false))
            
            if (JSON.parse(field.conditionalLogic)?.actionType && JSON.parse(field.conditionalLogic).actionType == 'show') {
                return JSON.parse(field.conditionalLogic)?.logicType && JSON.parse(field.conditionalLogic).logicType == 'all' 
                    ? rulesMet && rulesMet.indexOf(false) >= 0 
                    : rulesMet && rulesMet.indexOf(true) < 0
            } else {
                return JSON.parse(field.conditionalLogic)?.logicType && JSON.parse(field.conditionalLogic).logicType == 'all' 
                    ? rulesMet && rulesMet.indexOf(true) < 0 
                    : rulesMet && rulesMet.indexOf(false) >= 0
            }
        }
        const fieldHidden = (field) => {
            if (typeof JSON.parse(field.conditionalLogic) == 'object' && field.conditionalLogic !== null) {
                return handleConditionalLogic(field)
            }
            return false
        }
        //console.log(fieldHidden(field), field.id)

        //(field.type)
        switch (field.type) {
            // Add note for unsupported captcha field
            case 'captcha':
                return (
                    <Captcha
                        captchaTheme={field.captchaTheme}
                        errors={errors[`input_${field.id}`]}
                        fieldData={fieldData}
                        key={field.id}
                        name={inputName}
                        register={register}
                        setValue={setValue}
                        wrapClassName={inputWrapperClass}
                    />
                )
            // Start with the standard fields
            case 'text':
            case 'number':
            case 'email':
            case 'hidden':
            case 'phone':
            case 'date':
            case 'fileupload':
            case 'website':
            case 'post_title':
            case 'post_image':
            case 'post_custom_field':
                return (
                    <Input
                        errors={errors[inputName]}
                        fieldData={fieldData}
                        key={field.id}
                        name={inputName}
                        register={register}
                        value={
                            get(presetValues, inputName, false)
                                ? get(presetValues, inputName, false)
                                : ifDefaultValue(field)
                        }
                        wrapClassName={inputWrapperClass}
                        wrapId={wrapId}
                        fieldHidden={fieldHidden(field)}
                    />
                )
            case 'textarea':
            case 'post_content':
                return (
                    <Textarea
                        errors={errors[inputName]}
                        fieldData={fieldData}
                        key={field.id}
                        name={inputName}
                        register={register}
                        wrapClassName={inputWrapperClass}
                        wrapId={wrapId}
                        fieldHidden={fieldHidden(field)}
                    />
                )
            case 'select':
                return (
                    <Select
                        errors={errors[inputName]}
                        fieldData={fieldData}
                        key={field.id}
                        name={inputName}
                        register={register}
                        wrapClassName={inputWrapperClass}
                        wrapId={wrapId}
                        handleFieldChange={handleFieldChange}
                        onChange={onChange}
                        fieldHidden={fieldHidden(field)}
                    />
                )
            case 'multiselect':
                return (
                    <Multiselect
                        errors={errors[inputName]}
                        fieldData={fieldData}
                        key={field.id}
                        name={inputName}
                        register={register}
                        wrapClassName={inputWrapperClass}
                        wrapId={wrapId}
                    />
                )
            case 'radio':
            case 'checkbox':
                errorKey = filteredKeys(errors, RegExp(`input_${field.id}_`))
                return (
                    <SelectorList
                        errors={
                            errorKey.length > 0 ? errors[errorKey[0]] : null
                        }
                        fieldData={fieldData}
                        key={field.id}
                        name={inputName}
                        register={register}
                        wrapClassName={inputWrapperClass}
                        wrapId={wrapId}
                        onChange={onChange}
                        handleFieldChange={handleFieldChange}
                        fieldHidden={fieldHidden(field)}
                    />
                )
            case 'name':
                //console.log(fieldData)
                return (
                    <Name
                        errors={errors}
                        fieldData={fieldData}
                        key={field.id}
                        name={inputName}
                        register={register}
                        value={
                            get(presetValues, inputName, false)
                                ? get(presetValues, inputName, false)
                                : ifDefaultValue(field)
                        }
                        wrapClassName={inputWrapperClass}
                        wrapId={wrapId}
                        fieldHidden={fieldHidden(field)}
                    />
                )
            case 'address':
                // loop through the input fields
                
                return (
                    <Address
                        errors={errors[inputName]}
                        fieldData={fieldData}
                        key={field.id}
                        name={inputName}
                        register={register}
                        value={
                            get(presetValues, inputName, false)
                                ? get(presetValues, inputName, false)
                                : ifDefaultValue(field)
                        }
                        wrapClassName={inputWrapperClass}
                        wrapId={wrapId}
                        fieldHidden={fieldHidden(field)}
                        handleFieldChange={handleFieldChange}
                        onChange={onChange}
                    />
                )
            case 'html':
            case 'section':
                return (
                    <Html
                        fieldData={fieldData}
                        key={field.id}
                        name={inputName}
                        wrapClassName={inputWrapperClass}
                        wrapId={wrapId}
                        fieldHidden={fieldHidden(field)}
                    />
                )

            default:
                return null
        }
    })
}

export default FieldBuilder
