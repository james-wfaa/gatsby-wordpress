import postalCodes from "postal-codes-js"
import { colors, breakpoints } from '../css-variables'
import styled from "styled-components"
import formErrorIcon from "./../../svg/form-error-icon-red.svg"



export const handleFormSubmit = (data) => {

  let entryData = {
    "payload":{ ...data.contactInfo, ...data.mailingAddress, ...data.phoneInfo, ...data.employmentInfo, ...data.identityInfo, ...data.spouseInfo},
    'entry_id': data.entry_id,
  }
  
  return fetch("https://uwalumni.wpengine.com/wp-json/formsubmit/v1/submit/79", {
  //return fetch("https://devwp.uwalumni.com/wp-json/formsubmit/v1/submit/5", {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(entryData),
  })
  .then(res =>
    (!res.ok)
      ? res.json().then(() => {throw new Error('an error occurred')})
      : res.json()
  )
}

export const handleCommFormSubmit = (data) => {

  let entryData = {
    "payload":{ 
      "communicationsSignUp": data.communicationsSignUp, 
      "firstname":data.commSignUpInfo.firstname,
      "lastname":data.commSignUpInfo.lastname,
      "email": data.commSignUpInfo.email
    }
  }
  
  return fetch("https://uwalumni.wpengine.com/wp-json/formsubmit/v1/submit/80", {
  //return fetch("https://devwp.uwalumni.com/wp-json/formsubmit/v1/submit/4", {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(entryData),
  }).then(res =>
    (!res.ok)
      ? res.json().then(() => {throw new Error('an error occurred')})
      : res.json()
  ) 
}

export const validatePostalCode = (value, country) => {
  return postalCodes.validate(country, value)
}
 
export const currentYear =  new Date().getFullYear();

export const checkForLetters = (value) => {
  let response
  const regExp = /[a-zA-Z]/g;
  if(regExp.test(value)){
    response = true
  } else {
    response = false
  }
  return response
}

export const StyledError = styled.p`
  font-family: "Verlag A", "Verlag B";
  font-style: normal;
  margin: 12px auto 0 24px;
  padding: 0;
  color: ${colors.buttonRed};
  position:relative;
  font-size: 0.778rem;
  line-height: 18px;
  + input{
    border: 2px solid ${colors.buttonRed} !important;
    background-color: ${colors.errorBGYellow} ;
  }
  &:before{
    content: ' ';
    background-image: url(${formErrorIcon});
    background-size: contain;
    width: 14px;
    height: 14px;
    position:absolute;
    left: -24px;
    top: 2px;
  }
  &.topError{
    margin: 0 auto;
    font-size: 16px;
    top: -42px;
    left: calc(50% - 80px);
    position:absolute;
    &:before{
      width: 16px;
      height: 16px;
      left: -28px;
      top: 0;
    }
    @media screen and ${breakpoints.tabletS} {
      top: -35px;
    }
  }
  &.bottomButtonError{
    top: -50px;
    font-size:16px;
    display:inline-block;
    left: calc(50% - 100px);
    position:absolute;
    @media screen and ${breakpoints.tabletS} {
      top: -35px;
    }
  }
`
export const FormGeneralError = styled.p`
  width: 80%;
  text-align: center;
  color: black;
  margin: 32px auto;
  padding: 16px 16px 16px 42px;
  position:relative;
  max-width: 640px;
  /*background-color: ${colors.progressBarLightRed};*/
  background-color: ${colors.errorBGYellow};
  &:before{
    content: ' ';
    background-image: url(${formErrorIcon});
    background-size: contain;
    width: 24px;
    height: 24px;
    position:absolute;
    left: 10px;
    top: 26px;
  }
  a{
    color:${colors.linkText};
    :hover{
      color:${colors.linkTextHover};
    }
  }
`