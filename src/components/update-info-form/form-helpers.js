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