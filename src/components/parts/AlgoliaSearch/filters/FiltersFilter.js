import React from "react"
import styled from "styled-components"


const FiltersFilter = props => {
  const FiltersDiv = styled.div`
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

  return <FiltersDiv>{props.children}</FiltersDiv>
}

export default FiltersFilter
