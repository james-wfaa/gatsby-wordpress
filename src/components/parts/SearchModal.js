import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import styled from "styled-components"
import { breakpoints, colors } from "../css-variables"
import { useLockBodyScroll } from "../hooks"


const StyledDiv = styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1px solid grey;
  @media screen and ${breakpoints.tabletS} {
    position: absolute;
    width: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 30px;
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

const SearchModal = ({ topOffset, isMobile }) => {
  const [searchText, setSearchText] = useState("")

  const searchHandler = e => {
    setSearchText(e.target.value)
  }


  useLockBodyScroll()

  return (
    <div>
      <StyledDiv
        style={{ top: isMobile ? `10%` : `calc(50% - ${topOffset}px)` }}
      >
        <StyledForm
          onSubmit={event => {
            event.preventDefault()
            navigate("/search", {
              state: { string: searchText },
            })
          }}
        >
          <StyledInput
            type="text"
            placeholder="Search"
            autoFocus
            value={searchText}
            onChange={e => searchHandler(e)}
            className="st-default-search-input"
          />
          <span className="search">
            <Link
              to="/search"
              state={{ string: searchText }}
              style={{ backgroundColor: `${colors.buttonRed}` }}
            ></Link>
          </span>
        </StyledForm>
      </StyledDiv>
    </div>
  )
}

export default SearchModal
