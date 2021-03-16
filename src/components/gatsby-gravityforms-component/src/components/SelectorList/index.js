import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import strings from '../../utils/strings'
import InputWrapper from '../InputWrapper'

// TODO: Enable Select All Choice
const SelectorList = ({ errors, fieldData, name, register, onChange, handleFieldChange, fieldHidden, ...wrapProps }) => {
    const { choices, cssClass, isRequired, size, type } = fieldData
    const options = JSON.parse(choices)

    const handleBothOnChangeCalls = (fieldData, value, choiceID) => {
        onChange(fieldData, value, choiceID)
        handleFieldChange(fieldData, value, choiceID)
    }
    return (
        <InputWrapper
            errors={errors}
            inputData={fieldData}
            labelFor={name}
            {...wrapProps}
        >
            <ul className={`gfield_${type}`} id={name}>
                {options.map(({ isSelected, text, value }, index) => {
                    const choiceID = index + 1
                    return (
                        <li key={`${name}-${index + 1}`}>
                            <input
                                className={classnames(
                                    `gravityform__field__input__${type}`,
                                    `gravityform__field__input__${type}--` +
                                        choiceID,
                                    cssClass,
                                    size
                                )}
                                defaultChecked={isSelected}
                                id={`${name}_${choiceID}`}
                                name={`input_${fieldData.id}`}
                                ref={register({
                                    required:
                                        isRequired && strings.errors.required,
                                })}
                                type={type}
                                value={value}
                                onChange={() => handleBothOnChangeCalls(fieldData.id, value, choiceID)}
                            />
                            &nbsp;
                            <label htmlFor={`${name}_${choiceID}`}>
                                {ReactHtmlParser(text)}
                            </label>
                        </li>
                    )
                })}
            </ul>
        </InputWrapper>
    )
}

export default SelectorList

SelectorList.propTypes = {
    errors: PropTypes.object,
    fieldData: PropTypes.shape({
        choices: PropTypes.string,
        cssClass: PropTypes.string,
        id: PropTypes.number,
        isRequired: PropTypes.bool,
        size: PropTypes.string,
        type: PropTypes.string,
    }),
    name: PropTypes.string,
    register: PropTypes.func,
    wrapProps: PropTypes.object,
}
