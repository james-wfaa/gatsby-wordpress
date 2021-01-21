import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { colors, sizes, breakpoints } from "../css-variables"
import { useWindowSize } from "../hooks"

const SidebarMenu = ({name, menuItems, width}) => {
  const [open, setOpen] = useState(false)
  const menuMargin = open ? `32px` : 0;
  const StyledMenu = styled.div`
    position: relative;
    border-top: 2px solid ${colors.bgActiveGrey};
    border-bottom: 2px solid ${colors.bgActiveGrey};
    padding: 32px 0;
    
    margin-bottom: 32px;

    @media screen and ${breakpoints.tabletS} {
        width:100%;
        max-width: 536px;
        padding-left: 0;
        padding-right: 0;
        margin-left: auto;
        margin-right: auto;

    }
    @media screen and ${breakpoints.laptopS} {
        margin-left: 0;
        max-width: 712px;
    }

    ul {
      justify-self: left;
      margin-left: 0;
    }
    li {
      list-style: none;
      margin: 0;
      padding-top:8px;
      padding-bottom: 8px;
      a {
        text-decoration: none;
        color: ${colors.navMenuBlack};
        font-size: 18px;
        &:hover {
          color: ${colors.linkTextHover};
        }
      }
    }
    @media screen and ${breakpoints.laptopS} {
      border: none;
      margin-top: 7px; // hack to get menu title & page title vertically aligned (curse you, Mrs. Eaves!)
      padding: 0;
    }
    @media screen and ${breakpoints.laptopSMax}{
      h4::after {
        content:'';
        border: solid #c5050c;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 5px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        margin-left:20px;
        vertical-align: top;
        margin-top: 4px;
      }
      h4.open::after{
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        vertical-align: middle;
      }
    }
    
  `
  const ModalHandler = styled.div`
    cursor: pointer;
  `
  const StyledHeader = styled.h4`
    color: ${colors.buttonRed};
    font-size: 22px;
    width: 100%;
    text-align: center;
    margin-bottom: ${menuMargin};
    @media screen and ${breakpoints.laptopS} {
      text-align: left;
    }
  `
  useEffect(() => {
    setOpen(width > 1200)
  }, [width])

  const ConditionalWrap = ({condition, wrap, children}) => condition ? wrap(children) : children;

  const items = menuItems.map(item => {
    return (
      <li>
        <a href={item.path}>{item.label}</a>
      </li>
    )
  })

  return (
    <StyledMenu>
      <ConditionalWrap
        condition={width < 1200}
        wrap={children => <ModalHandler onClick={() => setOpen(!open)}>{children}</ModalHandler>}
      >
        <StyledHeader className={open ? `open` : null}>{name}</StyledHeader>
      </ConditionalWrap>
        {open &&
          <ul>
            {items}
          </ul>
        }
    </StyledMenu>
  )
}

export default SidebarMenu
