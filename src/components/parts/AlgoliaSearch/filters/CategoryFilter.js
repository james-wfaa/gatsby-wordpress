import React from "react"
import styled from "styled-components"

const CategoryFilter = props => {
  const CategoryDiv = styled.div`
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

  return <CategoryDiv>{props.children}</CategoryDiv>
}

export default CategoryFilter
