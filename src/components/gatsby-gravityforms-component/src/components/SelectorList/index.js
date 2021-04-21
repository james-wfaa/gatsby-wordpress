import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import ReactHtmlParser from 'react-html-parser'
import strings from '../../utils/strings'
import InputWrapper from '../InputWrapper'

// TODO: Enable Select All Choice
const SelectorList = ({ errors, fieldData, name, register, onChange, handleFieldChange, fieldHidden, ...wrapProps }) => {
    const { choices, cssClass, isRequired, size, type } = fieldData
    const options = JSON.parse(choices)
    //const [checkedInputs, setCheckedInputs] = useState([]);

    const fieldHiddenClass = fieldHidden === true ? 'gform_hidden' : ''

    const handleBothOnChangeCalls = (fieldData, value, choiceID) => {
        onChange(fieldData, value, choiceID)
        handleFieldChange(fieldData, value, choiceID)
        /*if(checkedInputs.includes(value)){
            const updateChecks = checkedInputs
            updateChecks.pop(value)
            setCheckedInputs(updateChecks)
        } else{
            const updateChecks = checkedInputs
            updateChecks.push(value)
            setCheckedInputs(updateChecks)
        }*/
    }
    return (
        <InputWrapper
            errors={errors}
            inputData={fieldData}
            labelFor={name}
            {...wrapProps}
            fieldHidden={fieldHidden}
        >
            <ul className={`gfield_${type}`} id={name}>
                {options.map(({ isSelected, text, value }, index) => {
                    const choiceID = index + 1
                    const matchInput = fieldData.inputs ? fieldData.inputs.filter(input => value == input.label) : null
                    const actualId = matchInput && Array.isArray(matchInput) && matchInput[0]?.id ? matchInput[0].id : null
                    const newInput = actualId ? `input_${actualId.replace('.', '_')}` : null
                    const newSubmitId = actualId ? actualId.substring(2) : null

                    return (
                        <li key={`${name}-${index + 1}`}>
                            <input
                                className={classnames(
                                    `gravityform__field__input__${type}`,
                                    `gravityform__field__input__${type}--` +
                                        choiceID,
                                    cssClass,
                                    size,
                                    fieldHiddenClass
                                )}
                                defaultChecked={isSelected}
                                id={`${name}_${choiceID}`}
                                //name={newInput !== null ? newInput : `input_${fieldData.id}`}
                                name={name}
                                ref={register({
                                    required: isRequired && strings.errors.required,
                                    //validate: {
                                        //checkChecked:() => checkedInputs.length > 0 === true,
                                    //},
                                })}
                                type={type}
                                value={value}
                                onChange={() => handleBothOnChangeCalls(fieldData.id, value, newSubmitId ? newSubmitId : choiceID)}
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