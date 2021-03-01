import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { colors, sizes, breakpoints } from "../css-variables"

const SidebarMenu = ({name="Menu Title", link='/', menuItems, width}) => {

  //console.log(name)
  const [open, setOpen] = useState(false)
  const menuMargin = open ? `32px` : 0;
  
  const StyledMenu = styled.div`
    position: relative;
    border-top: 2px solid ${colors.bgActiveGrey};
    border-bottom: 2px solid ${colors.bgActiveGrey};

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
        margin-bottom: 58px;
    }

    ul {
      justify-self: left;
      margin-left: 0;
      margin-right: ${sizes.s18};
    }
    li {
      list-style: none;
      margin: 0;
      padding-top:4px;
      padding-bottom: 4px;
      a {
        text-decoration: none;
        color: ${colors.navMenuBlack};
        font-size: 18px;
        padding-top:4px;
        padding-bottom: 4px;
        display:block;
        &:hover {
          color: ${colors.linkTextHover};
        }
        &.active {
          font-weight: bold;
        }
      }
      li{
        margin-left:16px;
      }
    }
    @media screen and ${breakpoints.laptopS} {
      border: none;
      margin-top: 7px; // hack to get menu title & page title vertically aligned (curse you, Mrs. Eaves!)
      padding: 0;
    }
    @media screen and ${breakpoints.laptopSMax}{
      h4{
        padding: 32px 0px;
        margin-bottom: 0;
      }
      .menuIcon{
        display: inline-block;
        margin-left:12px;
        width: 32px;
      }
      h4 span{
        display: inline-block;
        background-color: ${colors.buttonRed};
        height: 2px;
        transition: all 0.3s linear;
        position: relative;
        width:32px;
        top: -6px;
      }
      h4 span::before{
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
      h4 span::after{
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
      h4.open span{
        width: 20px;
        height: 20px;
        border: 1px solid #c5050c;
        border-radius: 50%;
        background-color:white;
        top:4px;
      }
      h4.open span::before{
        background-color: #c5050c;
        -webkit-transform: rotate(-45deg) translate(-8.5px,13px);
        -ms-transform: rotate(-45deg) translate(-8.5px,13px);
        transform: rotate(-45deg) translate(-8.5px,13px);
        width: 12px;
      }
      h4.open span::after{
        -webkit-transform: rotate(45deg) translate(-8px,-13px);
        -ms-transform: rotate(45deg) translate(-8px,-13px);
        transform: rotate(45deg) translate(-8px,-13px);
        width: 12px;
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
    a {
      color: ${colors.buttonRed};
      text-decoration: none;
    }
  `
  useEffect(() => {
    setOpen(width >= 1200)
  }, [width])

  const ConditionalWrap = ({condition, wrap, children}) => condition ? wrap(children) : children;

  const items = menuItems.map(item => {
    let secondChildren = {}
    let thirdChildren = {}
    if(item.wpChildren.nodes){
      secondChildren.nodes = item.wpChildren.nodes.map( item => {
        if(item.wpChildren.nodes){
          thirdChildren.nodes = item.wpChildren.nodes.map( item => {
            item.path = item.uri
            item.label = item.title
            return item
          })
        }
        item.path = item.uri
        item.label = item.title
        return item
      })
    }

    return (
      <li>
        <a href={item.path} className={item.path === (typeof window !== "undefined" && window.location.pathname) ? 'active': ''}>{item.label}</a>
        {secondChildren.nodes?.length > 0 ? (secondChildren.nodes.map(item => <li><a href={item.path} className={item.path === (typeof window !== "undefined" && window.location.pathname) ? 'active': ''}>{item.label}</a>
            {thirdChildren.nodes?.length > 0 ? (thirdChildren.nodes.map(item => <li><a href={item.path} className={item.path === (typeof window !== "undefined" && window.location.pathname) ? 'active': ''}>{item.label}</a></li> )) : null }
        </li>)) : null}
      </li>
    )
  })

  return (
    <StyledMenu>
      <ConditionalWrap
        condition={width <= 1200}
        wrap={children => <ModalHandler onClick={() => setOpen(!open)}>{children}</ModalHandler>}
      >
        <StyledHeader className={open ? `open` : null}>
          { link && (<a href={link}>{name}</a>)
          }
          { !link && ({name} )}
          <div className="menuIcon"><span></span></div>
        </StyledHeader>
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
