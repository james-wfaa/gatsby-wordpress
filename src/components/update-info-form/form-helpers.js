import postalCodes from "postal-codes-js"
import { colors } from '../css-variables'
import styled from "styled-components"


export const validatePostalCode = (value, country) => {
  return postalCodes.validate(country, value)
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
  margin: 0 auto;
  padding: 0;
  position: relative;
  color: ${colors.buttonRed};
  position:absolute;
  font-size: 0.778rem;
  top: 90px;
  line-height: 18px;
  + input{
    border: 2px solid ${colors.buttonRed} !important;
    //background-image: ;
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
  top: -45px;
  }
`

