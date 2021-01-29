import React from 'react'
import styled from 'styled-components'
import { breakpoints, mixins, sizes } from '../css-variables'
import Block from './WordPressBlock'
import GravityFormForm from '../gatsby-gravityforms-component/src/'
import { useStaticQuery, graphql } from 'gatsby'

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
}

function handleSuccess({values, reset, confirmations}) {
    //handle success
}

const GravityForm = ({className, id}) => {
    console.log(id)
    const gfData = AllGravityData()
    console.log (gfData.edges)
    let thisForm = gfData.edges.filter(function (e) {
        return e.node.formId == id
    })
    console.log(thisForm)

    return (
        <div className={className}>
            <GravityFormForm
                        id={id}
                        formData={gfData}
                        lambda={process.env.LAMBDA_ENDPOINT}
                        successCallback={handleSuccess}
                        errorCallback={handleError}
                    />
        </div>
    )
}
    
const StyledGravityForm = styled(GravityForm)`
max-width: 500px;
margin: 0 auto;
ul {
    text-align: left;
}
ul.gform_fields {
    list-style-type: none;
}
p {
    text-align: left;
}
button.gravityform__button {
    ${mixins.buttons}
}

    
`

export default StyledGravityForm