import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useLayoutEffect, useEffect, useState} from 'react'
import strings from '../../utils/strings'
import InputWrapper from '../InputWrapper'
import InputSubfieldWrapper from '../InputSubfieldWrapper'

const Input = ({ errors, fieldData, name, register, value, subfield, fieldHidden, fromNameField, ...wrapProps }) => {
    const {
        cssClass,
        inputMaskValue,
        isRequired,
        maxLength,
        placeholder,
        size,
        type,
        id
    } = fieldData
    const regex = inputMaskValue ? new RegExp(inputMaskValue) : false
    const [defaultValue, setDefaultValue] = useState(null);
    
    //check if things are loaded, component did mount
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
        }
    });
    //console.log(firstUpdate, firstUpdate.current === false)
    useEffect(() => {
        setDefaultValue(updateDefaultValue())
        
    }, [firstUpdate.current]);
    
    const updateDefaultValue = () => {
        const fieldValue = fieldData.inputName ? fieldData.inputName : null //if it's a hidden field, the parameter value is stored under inputName
        const hiddenFieldType = fieldData.type === 'hidden' ? true : false
        const adminField = fieldData.visibility === 'administrative' ? true : false
        const checkForPageTitle = adminField && fieldData.defaultValue === '{embed_post:post_title}' ? true : false //if it's a regular text field w/visibility set to admin, the value is stored under defaultValue
        const pageTitle = firstUpdate.current === false ? document.querySelector("title").textContent.replace(' | Wisconsin Alumni Association', '') : null
        const paramToCheck = fieldValue && fieldValue !== '' ? fieldValue : null
        const queryToCheck = firstUpdate.current === false ? new URLSearchParams(document.location.search.substring(1)): null;
        //const param = hiddenFieldType && paramToCheck && queryToCheck ? queryToCheck.get(paramToCheck) : null;
        //form #12 has a visible admin field
        const param = paramToCheck && queryToCheck ? queryToCheck.get(paramToCheck) : null;
        
        const hiddenValue = checkForPageTitle ? pageTitle : param && param.match(/^[0-9a-zA-Z\-]+$/)? param : null; //if defaultValue exists, set to defaultvalue, otherwise, check if param exists in query - returns null if it does not
        //const hiddenValue = checkForPageTitle ? pageTitle : hiddenFieldType && param && param.match(/^[0-9a-zA-Z\-]+$/)? param : null; //if defaultValue exists, set to defaultvalue, otherwise, check if param exists in query - returns null if it does not
        return hiddenValue !== null ? hiddenValue : value
    }

    const isAddressLineTwo = name && name === 'Address Line 2' ? true : false
    const inputName = id && typeof id === 'string' ? `input_${id.replace(".", "_")}` : id ? id : name
    
    return (subfield) ? (<InputSubfieldWrapper
        errors={errors}
        inputData={fieldData}
        labelFor={name}
        fieldHidden={fieldHidden}
        {...wrapProps}
    ><input
        aria-invalid={errors}
        aria-required={!isAddressLineTwo ? isRequired : false}
        className={classnames(
            'gravityform__field__input',
            `gravityform__field__input__${type}`,
            cssClass,
            size
        )}
        defaultValue={defaultValue}
        id={`input_${id.replace(".", "_")}`}
        maxLength={fromNameField ? 51 : maxLength || 524288} // 524288 = 512kb, avoids invalid prop type error if maxLength is undefined.
        name={inputName}
        placeholder={placeholder}
        ref={register({
            required: isRequired && strings.errors.required && !isAddressLineTwo,
            maxLength: fromNameField ? {
                value: 50,
                message: "Name must be less than 50 characters",
            } : maxLength > 0 && maxLength ? {
                value: maxLength > 0 && maxLength,
                message:
                    maxLength > 0 &&
                    `${strings.errors.maxChar.front}  ${maxLength} ${strings.errors.maxChar.back}`,
            } : null,
            pattern: {
                value: fromNameField ?  /^[a-zA-Z' -]+$/ : regex,
                message: fromNameField ?  'Name can contain letters, hyphen and apostrophes' : regex && strings.errors.pattern,
            },
        })}
        type={type === 'phone' ? 'tel' : type === 'fileupload' ? 'file' : type === 'website' ? 'url' : type}
    /></InputSubfieldWrapper>) : (
        <InputWrapper
            errors={errors}
            inputData={fieldData}
            labelFor={name}
            fieldHidden={fieldHidden}
            {...wrapProps}
        >
            <input
                aria-invalid={errors}
                aria-required={!fieldHidden ? isRequired : false}
                className={classnames(
                    'gravityform__field__input',
                    `gravityform__field__input__${type}`,
                    cssClass,
                    size
                )}
                defaultValue={defaultValue}
                id={name}
                maxLength={type === 'phone' ? 26 : type === 'text' ? 256 : maxLength || 524288} // 524288 = 512kb, avoids invalid prop type error if maxLength is undefined.
                name={name}
                placeholder={placeholder}
                ref={register({
                    required: !fieldHidden ? isRequired && strings.errors.required : false,
                    maxLength: type === 'phone' ? {
                        value: 25,
                        message: 'Phone must be 25 characters or less',
                    } : type === 'text' ? {
                        value: 255,
                        message: "Must be less than 255 characters",
                    } : maxLength > 0 && maxLength ? {
                        value: maxLength > 0 && maxLength,
                        message:
                            maxLength > 0 &&
                            `${strings.errors.maxChar.front}  ${maxLength} ${strings.errors.maxChar.back}`,
                    } : null,
                    pattern: {
                        value: type === 'phone' 
                            ? /^[- ]*[0-9][- 0-9]*$/ 
                            : type === 'email' 
                                ? /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                                : regex,
                        message: type === 'phone' 
                            ? 'this is not a valid phone' 
                            : type === 'email' 
                                ? "Must be valid email address" 
                                : regex && strings.errors.pattern,
                    },
                })}
                type={type === 'phone' 
                ? 'tel' 
                : type === 'fileupload' || type === 'post_image'
                    ? 'file' 
                    : type === 'website' 
                        ? 'url' 
                        : type}
            />
        </InputWrapper>
    )
}

export default Input

Input.propTypes = {
    errors: PropTypes.object,
    fieldData: PropTypes.shape({
        cssClass: PropTypes.string,
        inputMaskValue: PropTypes.string,
        maxLength: PropTypes.number,
        placeholder: PropTypes.string,
        isRequired: PropTypes.bool,
        type: PropTypes.string,
        size: PropTypes.string,
    }),
    name: PropTypes.string,
    register: PropTypes.func,
    value: PropTypes.string,
    wrapProps: PropTypes.object,
}
