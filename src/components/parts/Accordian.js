import React, { useState } from 'react'
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { colors, sizes } from "../css-variables"

const Accordian = ({opentext, closetext, children, useAsMenu}) => {
  const [open, setOpen] = useState(false)

  const searchstyles = useSpring({ opacity: open ? 1 : 0, paddingBottom: `56px` })

  const StyledWrapper = styled.div`
  background-color: ${colors.navcardGrey};
  position: relative;
  z-index: 5;
  

`
const StyledClickWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`
const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  width: max-content;
  max-width: 500px;
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
  .menuTitle {
    text-transform: uppercase;
    font-weight: bold;
    color: ${colors.badgerRed};
    font-size: ${sizes.s16};
  }
  .menuIcon{
    display: inline-block;
    margin-left:20px;
    width: 32px;
    span{
      display: inline-block;
      background-color: ${colors.buttonRed};
      height: 2px;
      transition: all 0.3s linear;
      position: relative;
      width:32px;
      top: -6px;
    }
    span::before{
      width: 32px;
      height: 2px;
      background-color: ${colors.buttonRed};
      content: "";
      position: absolute;
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
      top: -7px;
      left:0;
    }
    span::after{
      width: 32px;
      height: 2px;
      background-color: ${colors.buttonRed};
      content: "";
      position: absolute;
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
      bottom:-7px;
      left:0;
    }
    &.open{
      span{
        width: 20px;
        height: 20px;
        border: 1px solid ${colors.buttonRed};
        border-radius: 50%;
        background-color:transparent;
        top:2px;
      }
      span::before{
        -webkit-transform: rotate(-45deg) translate(-8.5px,13px);
        -ms-transform: rotate(-45deg) translate(-8.5px,13px);
        transform: rotate(-45deg) translate(-8.5px,13px);
        width: 12px;
      }
      span::after{
        -webkit-transform: rotate(45deg) translate(-8px,-13px);
        -ms-transform: rotate(45deg) translate(-8px,-13px);
        transform: rotate(45deg) translate(-8px,-13px);
        width: 12px;
      }
    }
  }
  

`
const isOpenClass = open ? 'open' : ''
  const clickHandler = () => {
    setOpen(!open)
  }
  const menuToggleAriaLabel = isOpenClass ? `Close ${opentext}` : `Open ${closetext}` ;

  return (
    <StyledWrapper>
      <StyledClickWrapper onClick={() => clickHandler()} onKeyPress={() => clickHandler()} aria-label={useAsMenu ? menuToggleAriaLabel : null} tabIndex={useAsMenu ? '0' : null}>
        <StyledInputWrapper>
          <div className="menuTitle">
            {!open ? opentext : closetext}
          </div>
          <p>
            { useAsMenu ? (<div className={`menuIcon ${isOpenClass}`}><span></span></div>) : (<span
              style={{
                transform: !open
                  ? `rotate(-180deg) scale(1.5, 1)`
                  : `scale(1.5, 1)`,
              }}
            >
              &#94;
            </span>)}
          </p>
        </StyledInputWrapper>
      </StyledClickWrapper>
      {open ? (
        <animated.div style={searchstyles}>
          {children}
        </animated.div>
      ) : null}
    </StyledWrapper>
  )
}

export default Accordian
