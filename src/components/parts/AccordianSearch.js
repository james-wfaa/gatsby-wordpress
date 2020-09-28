import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { colors, sizes, breakpoints } from "../css-variables"
import StyledHeader from "./StyledHeader"
import AccordianSearchBox from "./AccordianSearchBox"
import WcIcon from "../../svg/wechat_icon_gray.svg"
import DateImg from "../../assets/images/accordian_date.png"
import CategoryImg from "../../assets/images/accordian_category.png"
import FiltersImg from "../../assets/images/accordian_filters.png"
import LocationImg from "../../assets/images/accordian_location.png"

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
  grid-template-columns: 1fr;
  width: 80%;
  margin: 0 auto;
  @media screen and ${breakpoints.tablet} {
    grid-template-columns: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`
const FilterButton = styled.button`
  position: relative;
  text-align: left;
  padding-left: ${sizes.s36};
  color: ${colors.titleWhite};
  width: 100%;
  background-color: ${colors.buttonRed};
  height: 48px;
  border: none;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  &.date:before {
        content: url(${DateImg});
    }
    &.category:before {
        content: url(${CategoryImg});
    }
    &.filters:before {
        content: url(${FiltersImg});
    }
    &.location:before {
        content: url(${LocationImg});
    }
  &:before {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
  }
  span {
    width: 20px;
    height: 20px;
    mask: url(${WcIcon});
  }
`

const AccordianSearch = props => {
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
            <AccordianSearchBox
              handleFilterString={(str) => props.handleFilterString(str)}
              filterString={props.filterString}
            />
            <FilterBox>
              <FilterButton className="date">Date</FilterButton>
              <FilterButton className="location">Location</FilterButton>
              <FilterButton className="category">Category</FilterButton>
              <FilterButton className="filters">Filters</FilterButton>
            </FilterBox>
          </animated.div>
        </StyledButtonWrapper>
      ) : null}
    </StyledWrapper>
  )
}

export default AccordianSearch
