import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
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
    const pageTitle = document.querySelector("title").textContent.replace(' | Wisconsin Alumni Association', '')

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
        defaultValue={value !== '{embed_post:post_title}' ? value : pageTitle}
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
                defaultValue={value !== '{embed_post:post_title}' ? value : pageTitle}
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
