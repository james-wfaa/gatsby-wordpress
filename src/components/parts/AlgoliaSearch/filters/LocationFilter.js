import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CheckBox from "../../Checkbox"

const LocationFilter = props => {

  const LocationDiv = styled.div`
    input[type="checkbox"] {
      margin: 4px;
    }
    ul {
    list-style-type: none;
      li {
        margin-top: 4px;
      }
    }
  `

  return <LocationDiv>{props.children}</LocationDiv>
}

export default LocationFilter
