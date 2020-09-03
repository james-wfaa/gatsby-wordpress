import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import { breakpoints, sizes, colors } from "../css-variables"
<<<<<<< HEAD
import SwifType from "./SwifType"
=======
>>>>>>> dfabe55c55d1b42c123af381e9cf4b7424d4ef49

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden auto"
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}

const StyledDiv = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr 30px;
  border: 1px solid grey;
`

const StyledInput = styled.input`
<<<<<<< HEAD
  width: 96% !important;
  border: none !important;
  background: none !important;
  padding-left: 7px !important;
=======
>>>>>>> dfabe55c55d1b42c123af381e9cf4b7424d4ef49
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

  return (
    <div>
<<<<<<< HEAD
      <SwifType />
=======
>>>>>>> dfabe55c55d1b42c123af381e9cf4b7424d4ef49
      <StyledDiv>
        <StyledInput
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={e => searchHandler(e)}
<<<<<<< HEAD
          className="st-default-search-input"
=======
>>>>>>> dfabe55c55d1b42c123af381e9cf4b7424d4ef49
        />
        <span className="search">
          <a style={{ backgroundColor: `${colors.buttonRed}` }}></a>
        </span>
      </StyledDiv>
    </div>
  )
}

export default SearchModal
