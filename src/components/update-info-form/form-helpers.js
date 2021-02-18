import postalCodes from "postal-codes-js"
import { colors, breakpoints } from '../css-variables'
import styled from "styled-components"
import formErrorIcon from "./../../svg/form-error-icon-red.svg"


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

export const variantObject = {
    background_color: colors.formIntroBg,
    color: colors.bgRed,
    scroll_color: colors.bgRed,
    text_align: `center`
}

export const StyledError = styled.p`
  font-family: "Verlag A", "Verlag B";
  font-style: normal;
  margin: 0 auto 0 24px;
  padding: 0;
  position: relative;
  color: ${colors.buttonRed};
  position:absolute;
  font-size: 0.778rem;
  top: 90px;
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
`
export const StyledTopError = styled.p`
  font-family: "Verlag A", "Verlag B";
  font-style: normal;
  margin: 0 auto;
  padding: 0;
  font-size: 16px;
  position: absolute;
  color: ${colors.buttonRed};
  top: -50px;
  left: calc(50% - 80px);
  &:before{
    content: ' ';
    background-image: url(${formErrorIcon});
    width: 16px;
    height: 16px;
    position:absolute;
    left: -28px;
    top: 3.5px;
  }
  @media screen and ${breakpoints.tabletS} {
    top: -40px;
  }
  
`

