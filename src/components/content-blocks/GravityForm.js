import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { breakpoints, mixins, sizes, fonts, colors } from '../css-variables'
//import Block from './WordPressBlock'
import GravityFormForm from '../gatsby-gravityforms-component/src/'
import { useStaticQuery, graphql } from 'gatsby'
import formErrorIcon from "./../../svg/form-error-icon-red.svg"

const AllGravityData = () => {
    const { allGfForm } = useStaticQuery(
        graphql`
            query {
                allGfForm {
                    edges {
                        node {
                            formId
                            slug
                            apiURL
                            descriptionPlacement
                            formFields {
                                id
                                label
                                description
                                descriptionPlacement
                                type
                                choices
                                conditionalLogic
                                content
                                errorMessage
                                inputMaskValue
                                isRequired
                                visibility
                                cssClass
                                placeholder
                                size
                                defaultValue
                                maxLength
                                inputName
                                inputType
                                inputs {
                                  id
                                  name
                                  label
                                  inputType
                                  isHidden
                                  choices {
                                    isSelected
                                    value
                                    text
                                  }
                                }
                              }
                            button {
                                text
                            }
                            confirmations {
                                message
                            }
                        }
                    }
                }
            }
        `
    )
    return allGfForm
}

function handleError({values, error, reset}) {
    //handle error
    //console.log('values', values, 'error', error)
}

function handleSuccess({values, reset, confirmations}) {
    //handle success
    //console.log('success', values, confirmations)
}

const GravityForm = ({className, id}) => {
    const [formData, setFormData] = useState([]);
    const [checkboxFieldData, setCheckboxFieldData] = useState({});
    const [keepTrackOfCheckboxes, setkeepTrackOfCheckboxes] = useState([]);
    //const [choices, setChoices] = useState({});
    //console.log(id)
    const gfData = AllGravityData()
    useEffect(() => {
        let selectCurrentForm = gfData.edges.filter(function (e) {
            return e.node.formId == id
        })
        setFormData(selectCurrentForm[0].node)
      }, []);
    
    //console.log(formData)

    const handleFieldChange = (fieldId, value, inputId) => {
        let input = `input_${fieldId}_${inputId}`;
        let checkForInput = keepTrackOfCheckboxes.includes(input)
        if (checkForInput){
            const updateCheckboxData = {
                ...checkboxFieldData
            }
            delete updateCheckboxData[input]

            setCheckboxFieldData(updateCheckboxData)

            let updateChecks = keepTrackOfCheckboxes
            setkeepTrackOfCheckboxes(updateChecks.filter(i => i !== input))
        } else{
            setCheckboxFieldData(checkboxFieldData => ({
                ...checkboxFieldData,
                [input]:value
            }))

            let updateChecks = keepTrackOfCheckboxes
            setkeepTrackOfCheckboxes(updateChecks.concat(input))
        }
        
    }

    //console.log (gfData.edges)
    let thisForm = gfData.edges.filter(function (e) {
        return e.node.formId == id
    })
    //console.log(thisForm)
    let fullhostname = 'https://uwalumni.wpengine.com'
    /*if (typeof window !== 'undefined') {
    const { protocol, hostname } = window.location;
    fullhostname = protocol.concat("//").concat(hostname);
    }*/
    
    return (
        <div className={className}>
            <GravityFormForm
                        id={id}
                        formData={gfData}
                        lambda={`${fullhostname}/wp-json/formsubmit/v1/submit/${id}`}
                        successCallback={handleSuccess}
                        errorCallback={handleError}
                        onChange={handleFieldChange}
                        checkboxes={checkboxFieldData}
                    />
        </div>
    )
}
    
const StyledGravityForm = styled(GravityForm)`
${mixins.formStyles}
max-width: 100%;
margin: 0 auto 24px auto;
ul {
    text-align: left;
    margin-bottom: 24px;
}
li{
    margin-bottom: 24px;
}

ul.gform_fields {
    list-style-type: none;
    margin: 0;
}
p {
    text-align: left;
}
button.gravityform__button {
    ${mixins.buttons}
    border:none;
    cursor:pointer;
    :disabled{
        background-color: #CCCCCC;
        cursor: auto;
        :hover{
            box-shadow:none;
        }
    }
}
a {
    ${mixins.a}
}
label.gfield_label {
    font-weight: bold;
    margin-bottom:12px;
    &--subfield {
        font-weight: normal;
    }
    .gfield_required{
        color: ${colors.badgerRed};
        margin-left: 5px;
    }
}
input {
    width: 100%;  
}
input[type='date']{
    max-width: 250px;
}
.gfield_radio, .gfield_checkbox {
    margin-left: 0;
    li {
        list-style:none;
        margin-top:-26px;
        label{
            padding-left:0;
            
        }
        input[type="radio"]:checked + label::after, input[type="checkbox"]:checked + label::after{
            left: 3px;
        }
    }
}
.ginput_container {
    &_address,
    &_name {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        flex-flow: row-wrap;
    }
}
.subfield__wrapper {
    width: 100%;
    margin: 0 0 10px 0;
    @media screen and ${breakpoints.tabletS} {
        &.half-width {
            width: calc( 50% - 5px );
            margin: 0 5px 10px 0;
            &:nth-child(2n) {
                margin: 0 0 10px 5px;
              }
        }
      }
}
.validation_message, .validation_error, .gravityform_error_info{
    color:${colors.badgerRed};
    font-size: 16px;
    p{
        margin-bottom:12px;
        position:relative;
        :first-of-type{
            margin-left: 24px;
            :before{
                content: '';
                height:24px;
                width:24px;
                margin: 0 auto;
                padding: 0 0 0 24px;
                position: absolute;
                color: ${colors.buttonRed};
                top: 4px;
                left: -24px;
                background-image: url(${formErrorIcon});
                background-repeat: no-repeat;
              }
        }
    }
    ul{
        margin-left:48px;
        li{
            margin-bottom: 6px;
        }
    }
    .unknownError{
        color:black;
        background-color: ${colors.errorBGYellow};
        :first-of-type{
            padding: 12px 12px 12px 36px;
            margin: 0;
            :before{
                padding: 0 0 0 24px;
                top: 16px;
                left: 12px;
              }
        }
        
    }
}
.gravityform__error_message{
    margin-left: 24px;
    position: relative;
            :before{
                content: '';
                height:24px;
                width:24px;
                margin: 0 auto;
                padding: 0 0 0 24px;
                position: absolute;
                color: ${colors.buttonRed};
                top: 4px;
                left: -24px;
                background-image: url(${formErrorIcon});
                background-repeat: no-repeat;
              }
        }
}
.gform_confirmation_message{
}
.gfield_description{
    font-size:16px;
}
.gravityform__field__section{
    label{
        padding-bottom: 5px;
        border-bottom: 2px solid ${colors.borderGrey};
        text-transform: uppercase;
        font-weight:900;
    }
}
.gform_hidden, .gfield_visibility_administrative{
    display: none !important;
}
.half-width{
    select{
        margin-top: 0;
    }
}

`

export default StyledGravityForm