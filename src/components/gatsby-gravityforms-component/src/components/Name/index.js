import classnames from 'classnames'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import React from 'react'
import strings from '../../utils/strings'
import InputWrapper from '../InputWrapper'
import Input from '../Input'

const Name = ({ errors, fieldData, name,  register, value, fieldHidden, ...wrapProps }) => {
    //console.log(fieldData)
    //console.log(inputs)
    //console.log(value)
    //console.log(register)
    const {
        cssClass,
        inputMaskValue,
        isRequired,
        maxLength,
        placeholder,
        size,
        type,
        inputs,
    } = fieldData

    let renderedSubfields = []

    inputs.forEach(i => {
        if (!i.isHidden) {
            if (!i.inputType) { // text field
                //console.log(i)
                // so we need to render this as a subfield inside of Name

                // set this up to pass to <Input> as fieldData
                i.subfieldData = {
                    'cssClass': classnames(
                        'half-width',
                        cssClass,
                    ),
                    'inputMaskValue': inputMaskValue,
                    'isRequired': isRequired,
                    'maxLength': maxLength,
                    'placeholder': placeholder,
                    'size': size,
                    'label': i.label,
                    'id': i.id,
                    'type': 'text',
        
                }
                i.register = register
                renderedSubfields.push(i)
            }
        }
       
    }) 

    //console.log(renderedSubfields)

    const inputFields = renderedSubfields.map(subfield => {
                    
        const {
            cssClass,
        inputMaskValue,
        isRequired,
        maxLength,
        placeholder,
        size,
        type,
        } = subfield.subfieldData
        
        return (<Input subfield
            //errors={errors[name]}
            fieldData={subfield.subfieldData}
            key={subfield.id}
            name={subfield.label}
            register={subfield.register}
            //value={value}
            fieldHidden={fieldHidden}
        />)
    })
return (
    <InputWrapper
            errors={errors}
            inputData={fieldData}
            labelFor={name}
            {...wrapProps}
            fieldHidden={fieldHidden}
        >{inputFields}</InputWrapper>
)
}

export default Name

Name.propTypes = {
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