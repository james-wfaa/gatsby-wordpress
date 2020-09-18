import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { colors, sizes, breakpoints } from "../css-variables"
import StyledHeader from "./StyledHeader"
import AccordianSearchBox from "./AccordianSearchBox"
import WcIcon from "../../svg/wechat_icon_gray.svg"

const StyledWrapper = styled.div`
  background-color: ${colors.navcardGrey};
  margin-bottom: 88px;
`

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  width: 200px;
  margin: 0 auto;
  align-items: center;
  h4 {
    justify-self: center;
    font-family: "Verlag A", "Verlag B";
    font-weight: bold;
    padding-top: ${sizes.s24};
    padding-bottom: ${sizes.s24};
    margin-bottom: 0;
    color: ${colors.linkText};
    cursor: pointer;
  }
  p {
    font-family: "Verlag A", "Verlag B";
    font-weight: bold;
    text-align: center;
    padding-top: ${sizes.s24};
    padding-bottom: ${sizes.s24};
    margin-bottom: 0;
    color: ${colors.linkText};
    cursor: pointer;
    span {
      font-size: 1.25em;
      display: inline-block;
      transition: 0.25s ease-in-out;
    }
  }
`

const StyledButtonWrapper = styled.div`
  padding-bottom: 58px;
`

const FilterBox = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
  margin: 0 auto;
`
const FilterButton = styled.button`
  position: relative;
  text-align: left;
  padding-left: ${sizes.s48};
  color: ${colors.titleWhite};
  width: 100%;
  background-color: ${colors.buttonRed};
  height: 60px;
  border: none;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  &:before {
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background-color: ${colors.titleWhite};
    mask: url(${WcIcon});
    content: "";
  }
  span {
    width: 20px;
    height: 20px;
    mask: url(${WcIcon});
  }
`

const AccordianSearch = () => {
  const [open, setOpen] = useState(false)

  const searchstyles = useSpring({ opacity: open ? 1 : 0 })

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <StyledWrapper>
      <StyledInputWrapper>
        <h4 onClick={() => clickHandler()}>
          {!open ? `Expand Event Search` : `Close Search`}
        </h4>
        <p>
          <span
            style={{
              transform: !open
                ? `rotate(-180deg) scale(1.5, 1)`
                : `scale(1.5, 1)`,
            }}
          >
            &#94;
          </span>
        </p>
      </StyledInputWrapper>
      {open ? (
        <StyledButtonWrapper>
          <animated.div style={searchstyles}>
            <AccordianSearchBox />
            <FilterBox>
              <FilterButton>Date</FilterButton>
              <FilterButton>Location</FilterButton>
              <FilterButton>Category</FilterButton>
              <FilterButton>Filters</FilterButton>
            </FilterBox>
          </animated.div>
        </StyledButtonWrapper>
      ) : null}
    </StyledWrapper>
  )
}

export default AccordianSearch
