import postalCodes from "postal-codes-js"
import countryList from "react-select-country-list"
/*
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

