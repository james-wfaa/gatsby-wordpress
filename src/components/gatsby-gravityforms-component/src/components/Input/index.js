import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useLayoutEffect, useEffect, useState} from 'react'
import strings from '../../utils/strings'
import InputWrapper from '../InputWrapper'
import InputSubfieldWrapper from '../InputSubfieldWrapper'

const Input = ({ errors, fieldData, name, register, value, subfield, fieldHidden, ...wrapProps }) => {
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
        const param = hiddenFieldType && paramToCheck && queryToCheck ? queryToCheck.get(paramToCheck) : null;
        
        const hiddenValue = checkForPageTitle ? pageTitle : hiddenFieldType && param && param.match(/^[0-9a-zA-Z\-]+$/)? param : null; //if defaultValue exists, set to defaultvalue, otherwise, check if param exists in query - returns null if it does not
        return hiddenValue !== null ? hiddenValue : value
    }

    return (subfield) ? (<InputSubfieldWrapper
        errors={errors}
        inputData={fieldData}
        labelFor={name}
        fieldHidden={fieldHidden}
        {...wrapProps}
    > <input
        aria-invalid={errors}
        aria-required={isRequired}
        className={classnames(
            'gravityform__field__input',
            `gravityform__field__input__${type}`,
            cssClass,
            size
        )}
        defaultValue={defaultValue}
        id={`input_${id.replace(".", "_")}`}
        maxLength={maxLength || 524288} // 524288 = 512kb, avoids invalid prop type error if maxLength is undefined.
        name={`input_${id.replace(".", "_")}`}
        placeholder={placeholder}
        ref={register({
            required: isRequired && strings.errors.required,
            maxlength: {
                value: maxLength > 0 && maxLength,
                message:
                    maxLength > 0 &&
                    `${strings.errors.maxChar.front}  ${maxLength} ${strings.errors.maxChar.back}`,
            },
            pattern: {
                value: regex,
                message: regex && strings.errors.pattern,
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
                aria-required={isRequired}
                className={classnames(
                    'gravityform__field__input',
                    `gravityform__field__input__${type}`,
                    cssClass,
                    size
                )}
                defaultValue={defaultValue}
                id={name}
                maxLength={maxLength || 524288} // 524288 = 512kb, avoids invalid prop type error if maxLength is undefined.
                name={name}
                placeholder={placeholder}
                ref={register({
                    required: isRequired && strings.errors.required,
                    maxlength: {
                        value: maxLength > 0 && maxLength,
                        message:
                            maxLength > 0 &&
                            `${strings.errors.maxChar.front}  ${maxLength} ${strings.errors.maxChar.back}`,
                    },
                    pattern: {
                        value: regex,
                        message: regex && strings.errors.pattern,
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
