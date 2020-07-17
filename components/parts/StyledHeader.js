
import React from 'react'
import styled from 'styled-components'
import { breakpoints, fonts, sizes, colors, mixins } from '../css-variables'
import Search from "../../src/svg/search.svg" // Tell webpack this JS file uses this image
import Menu from "../../src/svg/hamburger-text.svg" // Tell webpack this JS file uses this image

const StyledHeader = styled.header`
.mainnav {
  width: 100%;
  height: 86px;
  padding: ${sizes.s18} 0;
  .inner {
    display: grid;
    grid-template-columns: 112px auto 43px 32px;
    @media screen and ${breakpoints.tabletS} {
      grid-template-columns: 112px auto 43px 32px;
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
  width: 100%;
  color: ${colors.bgWhite};
  background-color: ${colors.bgRed};
  height: 32px;
  text-align: right;
  padding: 0 180px;
  font-size: ${sizes.s14};
  z-index: -2;
  
  ul {
    position: relative;
    display: inline-block;
    background: transparent;
    background-color: ${colors.toneRed};
      transform: skew(135deg);
    margin: 0;
    height: 100%;
    padding: 0 1.5rem;
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
    }
    
  }
  @media screen and ${breakpoints.tabletS} {
    display: block;
  }
}
.inner {
  height: 100%;
  width: 90%;
  @media screen and ${breakpoints.tabletS} {
    width: 90%;
    grid-template-columns: 112px auto 43px 32px;
  }
  @media screen and ${breakpoints.laptopS} {
    width: 1080px;

  }
  margin: 0 auto;
}
.logo {
  width: 112px;
  height: 54px;
}
.search {
  width: 43px;
  display: flex;
  align-items: center;
 
  
  @media screen and ${breakpoints.tabletS} {
   
    align-self: flex-end;
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
  display: flex;
  align-items: center;
  @media screen and ${breakpoints.tabletS} {
   
    align-self: flex-end;
  }

  a {
    display: block;
    width: 32px;
    height: 36px;
    margin-bottom: 4px;
    background-color: ${colors.navMenuBlack};
    mask: url(${Menu});
    &:hover {
      background-color: ${colors.buttonRed};
    }
  }
}
`



export default StyledHeader