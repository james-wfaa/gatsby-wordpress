import React, { useContext } from "react"
import styled from "styled-components"
import { colors, sizes, breakpoints } from "../css-variables"
import { AppContext } from "../../context/AppContext"
import Search from "../../svg/search.svg"

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
  border: none !important;
  background: none !important;
  padding-left: 7px !important;
  padding: 4px;
  border: none;
  &:focus {
    outline: none;
  }
`

const AccordianSearchBox = props => {

  const { state, dispatch, actions } = useContext(AppContext);
  const { setSearchString } = actions;

  const handleFilterString = (str) => {
    setSearchString(str)
  }

  return (
    <StyledDiv>
      <StyledInput
        type="text"
        placeholder="Search.."
        value={state.searchstring}
        onChange={e => handleFilterString(e.target.value)}
        className="st-default-search-input"
      />
      <span>
        <a style={{ backgroundColor: `${colors.buttonRed}` }}></a>
      </span>
    </StyledDiv>
  )
}

export default AccordianSearchBox
