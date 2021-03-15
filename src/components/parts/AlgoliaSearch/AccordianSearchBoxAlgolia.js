import React from "react"
import styled from "styled-components"
import { colors } from "../../css-variables"
import { connectSearchBox } from "react-instantsearch-dom"
import Search from "../../../svg/search.svg"

const StyledDiv = styled.div`
  width: 80%;
  max-width: 760px;
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

    button {
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
    const submitHandler = (e) => {
      e.preventDefault();
    }

    return (
      <StyledDiv>
        <form onSubmit={e => submitHandler(e)}>
          <StyledInput
            type="text"
            placeholder="Search..."
            ariaLabel="SearchInput"
            onChange={e => refine(e.target.value)}
            value={currentRefinement}
            onFocus={onFocus}
          />
        </form>
        <span>
          <button
            ariaLabel="SearchButton"
            style={{ backgroundColor: `${colors.buttonRed}` }}
          ></button>
        </span>
      </StyledDiv>
    )

  }
)