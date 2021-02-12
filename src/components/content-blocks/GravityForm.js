import React from 'react'
import styled from 'styled-components'
import { breakpoints, mixins, sizes, fonts, colors } from '../css-variables'
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
    //console.log(id)
    const gfData = AllGravityData()
    //console.log (gfData.edges)
    let thisForm = gfData.edges.filter(function (e) {
        return e.node.formId == id
    })
    //console.log(thisForm)

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
${mixins.formStyles}
max-width: 100%;
margin: 0 auto;
ul {
    text-align: left;
    margin-bottom: 20px;
}
li{
    list-style:none;
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
}
a {
    ${mixins.a}
}
label.gfield_label {
    font-weight: bold;
    &--subfield {
        font-weight: normal;
    }
    .gfield_required{
        color: ${colors.badgerRed}
    }
}
input {
    width: 100%;  
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

`

export default StyledGravityForm