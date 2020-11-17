import React from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../css-variables'

const ButtonWrapper = styled.div`
  .menu {
    width: 32px;
    display: block;
    align-items: center;
    padding-top: 20px;
    cursor: pointer;

    span {
      display: block;
      background-color: ${colors.navMenuBlack};
      height: 3px;
      transition: all 0.3s linear;
      align-self: center;
      position: relative;
      transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

      ::before,
      ::after {
        width: 32px;
        height: 3px;
        background-color: ${colors.navMenuBlack};
        content: "";
        position: absolute;
        transition: all 0.3s linear;
      }
      ::before {
        transform: rotate(0deg);
        top: -9px;
      }
      ::after {
        opacity: 1;
        transform: rotate(0deg);
        top: 9px;
      }
    }
    div {
      font-size: ${sizes.s11};
      margin-top: 7px;
      text-transform: uppercase;
      display: block;
      text-align: center;
    }
    &.open {
      width: 36px;
      height: 36px;
      border: 2px solid ${colors.buttonRed};
      border-radius: 50%;

      span {
        top: -5px;
        left: 4px;
        width: 24px;
        transform: rotate(-45deg);
        background-color: ${colors.buttonRed};
        ::before,
        ::after {
          width: 24px;
        }
        ::before {
          background-color: ${colors.buttonRed};
          transform: rotate(-90deg) translate(-10px, 0px);
          top: -10px;
        }
        ::after {
          background-color: ${colors.buttonRed};
          opacity: 0;
          transform: rotate(90deg);
          top: 10px;
        }
      }
      div {
        display: none;
      }
    }
  }
`

const CloseButton = ({callback, styleProps}) => {
  return (
    <ButtonWrapper
      onClick={() => callback()}
      style={styleProps}
    >
      <div
        className="menu open"
        style={{ justifySelf: `center` }}
      >
        <span></span>
      </div>
    </ButtonWrapper>
  )
}

export default CloseButton
