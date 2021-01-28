import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { colors, sizes, breakpoints,mixins } from "../css-variables"

const Accordian = ({opentext, closetext, children}) => {
  const [open, setOpen] = useState(false)

  const searchstyles = useSpring({ opacity: open ? 1 : 0, paddingBottom: `56px` })

  const StyledWrapper = styled.div`
  background-color: ${colors.navcardGrey};
  a{
    ${mixins.textlink}
  }

  .navWrap{
    width: 100px;;
    margin: 0 auto;
  }

`
const StyledClickWrapper = styled.div`
  width: 100%;
  cursor: pointer;
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

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <StyledWrapper>
      <StyledClickWrapper onClick={() => clickHandler()}>
        <StyledInputWrapper>
          <h4>
            {!open ? opentext : closetext}
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
      </StyledClickWrapper>
      {open ? (
        <animated.div className="navWrap" style={searchstyles}>
          {children}
        </animated.div>
      ) : null}
    </StyledWrapper>
  )
}

export default Accordian
