//import React, { useState } from "react"
import postalCodes from "postal-codes-js"
//import countryList from "react-select-country-list"
import { colors } from '../css-variables'
import styled from "styled-components"

/*const [countries, setCountries] = useState(countryList().getData())
export const countryOptions = countries.map(country => {
    if (country.value === "US") {
      return (
        <option value={country.value} selected>
          {country.label}
        </option>
      )
    }
    return <option value={country.value}>{country.label}</option>
})*/

export const validatePostalCode = (value, country) => {
    return postalCodes.validate(country, value)
}

export const StyledError = styled.p`
font-family: "Verlag A", "Verlag B";
font-style: normal;
margin: 0 auto;
padding: 0;
font-size: 16px;
position: relative;
color: ${colors.buttonRed};
position:absolute;
bottom:-24px;
font-size: 0.778rem;
`