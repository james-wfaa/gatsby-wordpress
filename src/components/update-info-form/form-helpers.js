
import postalCodes from "postal-codes-js"
//import countryList from "react-select-country-list"

export const validatePostalCode = (value, country) => {
    return postalCodes.validate(country, value)
}