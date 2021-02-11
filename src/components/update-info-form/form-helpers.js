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
font-size: 16px;
position: relative;
color: ${colors.buttonRed};
position:absolute;
bottom:-24px;
font-size: 0.778rem;
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
export const StyledNextToButtonError = styled.p`

}
`