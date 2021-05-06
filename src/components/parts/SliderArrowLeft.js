import React from "react"
import styled from "styled-components"

const LeftArrow = styled.div`
  width: 50px;
  height: 110px;
  background-color: #c5050c;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
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
  @media screen and (min-width: 936px) {
    display: block !important;
  }
`

const SliderArrowLeft = props => {
  const { onClick } = props
  return (
    <LeftArrow onClick={onClick}>
      <span>&#60;</span>
    </LeftArrow>
  )
}

export default SliderArrowLeft
