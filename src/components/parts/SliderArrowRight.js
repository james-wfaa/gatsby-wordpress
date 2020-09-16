import React from "react"
import styled from "styled-components"

const RightArrow = styled.div`
  width: 50px;
  height: 110px;
  background-color: #c5050c;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  span {
    color: #fff;
    font-size: 2.5em;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1, 1.75);
  }
  display: none;
  @media screen and (min-width: 1200px) {
    display: block !important;
  }
`

const SliderArrowRight = props => {
  const { onClick } = props
  return (
    <RightArrow onClick={onClick}>
      <span>&#62;</span>
    </RightArrow>
  )
}

export default SliderArrowRight
