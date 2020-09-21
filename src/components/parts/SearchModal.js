import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { breakpoints, colors } from "../css-variables"
import { useLockBodyScroll } from "../hooks"
import SwifType from "./SwifType"

const StyledDiv = styled.div`
  width: 80%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 30px;
  border: 1px solid grey;
  @media screen and ${breakpoints.tabletS} {
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const StyledInput = styled.input`
  width: 96% !important;
  border: none !important;
  background: none !important;
  padding-left: 7px !important;
  padding: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`

const SearchModal = () => {
  const [searchText, setSearchText] = useState("")

  const searchHandler = e => {
    setSearchText(e.target.value)
  }

  useLockBodyScroll()

  useEffect(() => {
    // _st("install", "eyjN94XLv8vdiF3H87-P", "2.0.0")
  }, [])

  return (
    <div>
      <SwifType />
      <StyledDiv>
        <StyledInput
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={e => searchHandler(e)}
          className="st-default-search-input"
        />
        <span className="search">
          <a style={{ backgroundColor: `${colors.buttonRed}` }}></a>
        </span>
      </StyledDiv>
    </div>
  )
}

export default SearchModal
