import styled from "styled-components"
import { breakpoints, sizes, colors } from "../css-variables"
import Search from "../../svg/search.svg" // Tell webpack this JS file uses this image

const StyledHeader = styled.header`
  position: relative;
  &.sticky {
    position: sticky;
    height: 116px;
  }
  border-bottom: 2px solid ${colors.navMenuBottomBorder};
  &.open {
    .mainnav .uberNav {
      display: none;
    }
    border-bottom: none;
  }
  &.noborder {
    border-color: transparent;
  }
  
  .mainnav {
    width: 100%;
    height: 84px;
    padding: ${sizes.s18} 0;

    .inner {
      display: grid;
      grid-template-columns: 112px auto 100px 32px;
      @media screen and ${breakpoints.tabletS} {
        grid-template-columns: 112px auto 60px 32px;
      }
    }
    .uberNav {
      display: none;
      margin: 0 0 0 ${sizes.s52};
      @media screen and ${breakpoints.tabletS} {
        display: flex;
        height: 100%;
        li {
          display: flex;
          align-self: flex-end;
          padding-right: ${sizes.s36};
          margin: 0;
          &:last-child {
            padding: 0;
          }
        }
        a {
          text-decoration: none;
          color: ${colors.navMenuBlack};
          &:hover {
            color: ${colors.linkTextHover};
            text-decoration: underline;
          }
        }
      }
    }
  }
  .__rednav {
    display: none;
    position: relative;
    width: 100%;
    color: ${colors.bgWhite};
    background-color: ${colors.bgRed};
    height: 32px;
    text-align: right;
    padding: 0;
    font-size: ${sizes.s14};
    transition: all ease 0.35s;
    @media screen and ${breakpoints.laptopS} {
      padding: 0 180px;
    }

    ul {
      position: relative;
      display: inline-block;
      background: transparent;
      background-color: ${colors.toneRed};
      transform: skew(135deg);
      margin: 0;
      height: 100%;
      padding: 0 1.5rem;
      padding-top: 2px;

      li {
        display: inline-block;
        height: 100%;
        padding-right: ${sizes.s24};
        text-align: right;
        margin: 0;
        transform: skew(45deg);
        &:last-child {
          padding: 0;
        }
        a {
          color: ${colors.titleWhite};
          text-decoration: none;

          :hover{
            text-decoration: underline;
          }
        }
      }
    }
    @media screen and ${breakpoints.tabletS} {
      display: block;
    }
    &.suppress {
      background-color: ${colors.rednavGrey};
      ul {
        color: ${colors.sectionBorder};
        background-color: ${colors.sectionBorder};
        a {
          color: ${colors.sectionBorder};
        }
      }
    }
  }
  .inner {
    height: 100%;
    width: 90%;

    @media screen and ${breakpoints.laptopS} {
      width: 1080px;
    }
    margin: 0 auto;
  }

  .logo {
    width: 112px;
    height: 54px;
    img {
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .search {
    width: 43px;
    display: flex;
    align-items: center;

    @media screen and ${breakpoints.tabletS} {
    }

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

  .menu {
    width: 32px;
    display: block;
    align-items: center;
    padding-top: 20px;
    cursor:pointer;

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
    &:hover {
      span {
        background-color: ${colors.buttonRed};
        ::before,
        ::after {
          background-color: ${colors.buttonRed};
        }
      }
      div {
        color: ${colors.buttonRed};
      }
    }
    &:active {
      span {
        background-color: ${colors.toneRed};
        ::before,
        ::after {
          background-color: ${colors.toneRed};
        }
      }
      div {
        color: ${colors.toneRed};
      }
    }
    &.open {
      width: 36px;
      height: 36px;
      margin-top: 10px;
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

export default StyledHeader
