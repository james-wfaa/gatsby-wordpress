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

    ul {
      justify-self: left;
      margin-left: 0;
    }
    li {
      list-style: none;
      margin: 0;
      padding-top:8px;
      padding-bottom: 8px;
      &:hover {
        font-weight: bold;
      }
      a {
        text-decoration: none;
        color: ${colors.navMenuBlack};
        font-size: 18px;
      }
    }
    @media screen and ${breakpoints.laptopS} {
      border: none;
      margin-top: 7px; // hack to get menu title & page title vertically aligned (curse you, Mrs. Eaves!)
      margin-right: 32px;
      margin-left: 32px;
      padding: 0;
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
        condition={width < 936}
        wrap={children => <ModalHandler onClick={() => setOpen(!open)}>{children}</ModalHandler>}
      >
        <StyledHeader>{name}</StyledHeader>
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
