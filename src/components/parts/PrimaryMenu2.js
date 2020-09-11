import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { colors, sizes, breakpoints } from "../css-variables"
import styled, { css } from "styled-components"
import HeaderSocialIcons from "./HeaderSocialIcons"
import Header from "../header"
import FbIcon from "../../svg/fb_icon_gray.svg" // Tell webpack this JS file uses this image
import TwIcon from "../../svg/twitter_icon_gray.svg" // Tell webpack this JS file uses this image
import IgIcon from "../../svg/instagram_icon_gray.svg" // Tell webpack this JS file uses this image
import WcIcon from "../../svg/wechat_icon_gray.svg" // Tell webpack this JS file uses this image
import LiIcon from "../../svg/linkedin_icon_gray.svg" // Tell webpack this JS file uses this image

const menuItems = {
  "Test 1": [
    { tag: "For Waa", url: "/waa" },
    { tag: "Chapters and Groups", url: "/chapters" },
    { tag: "Similar", url: "/similar" },
    { tag: "Stories", url: "/stories" },
  ],
  "Test 2": [
    { tag: "test 5", url: "/waa" },
    { tag: "test 6", url: "/chapters" },
  ],
  "Test 3": [
    { tag: "test 7", url: "/waa" },
    { tag: "test 8", url: "/chapters" },
    { tag: "test 9", url: "/chapters" },
  ],
  "Test 4": [
    { tag: "L", url: "/waa" },
    { tag: "Natural", url: "/chapters" },
    { tag: "Lorem", url: "/chapters" },
    { tag: "Ipsum et al verirtas unas", url: "/chapters" },
    { tag: "Chapters and Groups", url: "/chapters" },
    { tag: "Last line", url: "/chapters" },
  ],
}

const MenuGrid = styled.div`
  position: relative;
  top: 100px;
  width: 60%;
  border-collapse: collapse;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const LeftMenu = styled.div`
  border-collapse: collapse;
  ul {
    margin: 0;
    li {
      list-style: none;
      margin-bottom: 0;
      a {
        text-decoration: none;
        color: ${colors.navMenuBlack};
      }
      div {
        font-size: ${sizes.s24};
        p {
          position: relative;
          padding-top: ${sizes.s24};
          padding-bottom: ${sizes.s24};
          width: fit-content;
        }
      }
    }
  }
  border-right: 1px solid ${colors.navMenuBorderGrey};
`

const RightMenu = styled.div`
  position: relative;
  display: grid;
  ul {
    justify-self: left;
    margin-left: 0;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 16px ${sizes.s24};
    &:hover {
      background-color: ${colors.navcardGrey};
    }
    a {
      text-decoration: none;
      color: ${colors.navMenuBlack};
    }
  }
`

const SocialLinks = styled.div`
  .socialLinks {
    width: 160px;
    display: flex;
    list-style-type: none;

    margin: 0;

    li {
      display: block;
      width: ${sizes.s24};
      height: ${sizes.s24};
      margin: 0 ${sizes.s16} 0 0;

      a {
        display: block;
        width: ${sizes.s24};
        height: ${sizes.s24};
        background-color: ${colors.iconGrey};
        &:hover {
          background-color: ${colors.buttonRed};
        }
        &.fb {
          mask: url(${FbIcon});
        }
        &.tw {
          mask: url(${TwIcon});
        }
        &.ig {
          mask: url(${IgIcon});
        }
        &.wc {
          mask: url(${WcIcon});
        }
        &.li {
          mask: url(${LiIcon});
        }
      }
    }
  }
`

const BottomLeft = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: ${sizes.s18};
  li {
    padding-top: 16px;
    padding-bottom: 16px;
    a {
      margin: 0;
      padding: 0;
    }
  }
`

const SpanArrow = styled.span`
  &:after {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 12px solid ${colors.badgerRed};
    border-bottom: 6px solid transparent;
    transition: 0.25s ease-in-out;
    right: ${props => props.pxRight};
  }
`

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
`

const PrimaryMenu2 = () => {
  const [select, setSelect] = useState(null)
  const [childLinks, setChildLinks] = useState([])

  const modalClickHandler = () => {
    setSelect(null)
    setChildLinks([])
  }

  const parentEnterHandler = str => {
    setSelect(str)
  }
  const parentClickHandler = (str, e) => {
    e.stopPropagation()
    setSelect(str)
  }

  const parentLinks = Object.keys(menuItems).map(link => {
    return (
      <li>
        <div
          onMouseEnter={() => parentEnterHandler(link)}
          onClick={e => parentClickHandler(link, e)}
          style={{
            backgroundColor: select === link ? `${colors.navcardGrey}` : null,
            paddingTop: `24px`,
            paddingBottom: `24px`,
          }}
        >
          <p style={{ paddingTop: 0, paddingBottom: 0 }}>
            <SpanArrow pxRight={select === link ? `-40px` : `-25px`}>
              {link}
            </SpanArrow>
          </p>
        </div>
      </li>
    )
  })

  useEffect(() => {
    if (select !== null) {
      let links = menuItems[select].map(link => {
        return (
          <li>
            <Link to={link.url}>{link.tag}</Link>
          </li>
        )
      })
      setChildLinks(links)
    }
  }, [select])

  return (
    <div onClick={() => modalClickHandler()}>
      <MenuGrid>
        <LeftMenu>
          <div
            style={{
              borderBottom: `1px solid ${colors.navMenuBorderGrey}`,
              borderRight: `1px solid ${colors.navMenuBorderGrey}`,
            }}
          >
            <ul>{parentLinks}</ul>
          </div>
          <BottomLeft>
            <ul>
              <li>
                <Link to="/about">About WAA</Link>
              </li>
              <li>
                <Link to="/contact">Contact WAA</Link>
              </li>
              <li>
                <Link to="/update">ABE Update</Link>
              </li>
              <li>
                <Link to="/email">Email Login</Link>
              </li>
            </ul>
            <SocialLinks>
              <HeaderSocialIcons />
            </SocialLinks>
          </BottomLeft>
        </LeftMenu>
        <RightMenu>
          <Logo>Logo</Logo>
          <ul>{childLinks.length > 0 ? childLinks : null}</ul>
        </RightMenu>
      </MenuGrid>
    </div>
  )
}

export default PrimaryMenu2
