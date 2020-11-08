import React from "react"
import styled from "styled-components"
import { colors, sizes, breakpoints } from "../../css-variables"
import { connectSearchBox } from "react-instantsearch-dom"
import Search from "../../../svg/search.svg"

const StyledDiv = styled.div`
  width: 80%;
  margin: 0px auto 24px;
  display: grid;
  grid-template-columns: 1fr 30px;
  border: 1px solid grey;
  background-color: white;
  height: 48px;

  span {
    width: 43px;
    display: flex;
    align-items: center;

    a {
      display: block;
      width: 19px;
      height: 19px;
      margin-bottom: 4px;
      background-color: ${colors.navMenuBlack};
      mask: url(${Search});
      &:hover {
        background-color: ${colors.buttonRed};
      }
    }
  }
`

const StyledInput = styled.input`
  width: 96% !important;
  height: 100%;
  border: none !important;
  background: none !important;
  padding-left: 7px !important;
  padding: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`

export default connectSearchBox(
  ({ refine, currentRefinement, onFocus}) => {
    return (
      <StyledDiv>
        <form>
        <StyledInput
          type="text"
          placeholder="Search..."
          aria-label="Search"
          onChange={e => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
        />
      </form>
      <span>
          <a style={{ backgroundColor: `${colors.buttonRed}` }}></a>
        </span>
      </StyledDiv>
    )

  }
)