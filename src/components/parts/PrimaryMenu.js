import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { colors, sizes } from "../css-variables"
import styled from "styled-components"
import HeaderSocialIcons from "./HeaderSocialIcons"
import LogoImage from "../../assets/svg/menuclouds.svg"
import FbIcon from "../../svg/fb_icon_gray.svg" // Tell webpack this JS file uses this image
import TwIcon from "../../svg/twitter_icon_gray.svg" // Tell webpack this JS file uses this image
import IgIcon from "../../svg/instagram_icon_gray.svg" // Tell webpack this JS file uses this image
import WcIcon from "../../svg/wechat_icon_gray.svg" // Tell webpack this JS file uses this image
import LiIcon from "../../svg/linkedin_icon_gray.svg" // Tell webpack this JS file uses this image

const menuItems = {
  "Alumni Communities": [
    { tag: "WAA Membership", url: "/membership" },
    { tag: "Chapters and Groups", url: "/chapters" },
    { tag: "Badger Bridge Online Network", url: "/badger-bridge" },
    { tag: "Recent UW Grads", url: "/recent-grads" },
  ],
  "Events & Activities": [
    { tag: "Upcoming Events", url: "/upcoming-events" },
    { tag: "Activities Near Me", url: "/near-me" },
    { tag: "Pride Category Events", url: "/pride" },
    { tag: "Discover & Learn with WAA", url: "/discover" },
    { tag: "Badger Athletic Events", url: "/athletic-events" },
    { tag: "Trips with WAA", url: "/trips" },
  ],
  "Stories": [
    { tag: "News & Stories", url: "/news" },
    { tag: "Alumni Achievements", url: "/alumni-achievements" },
    { tag: "Our Publications", url: "/publications" },
    { tag: "News from the UW", url: "/news-from-uw" },
  ],
  "Ways to Support": [
    { tag: "Advocate for the UW", url: "/advocate" },
    { tag: "Get Involved", url: "/get-involved" },
    { tag: "Make a Gift", url: "/give" },
  ],
  "Resources & Services": [
    { tag: "Alumni Directory", url: "/alumni-directory" },
    { tag: "Career Resources", url: "/career-resources" },
    { tag: "Library Access", url: "/library-access" },
    { tag: "Alumni Store", url: "/alumni-store" },
    { tag: "Alumni Partners", url: "/alumni-partners" },
  ],
}

const MenuGrid = styled.div`
  position: relative;
  top: 100px;
  width: 70%;
  border-collapse: collapse;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const LeftMenu = styled.div`
  border-collapse: collapse;
  border-right: 1px solid ${colors.navMenuBorderGrey};
  ul {
    margin: 0;
    li {
      list-style: none;
      margin-bottom: 0;
      a {
        text-decoration: none;
        color: ${colors.navMenuBlack};
      }
      button {
        font-size: ${sizes.s24};
        border: none;
        width: 100%;
        background: none;
        outline: none;
        p {
          position: relative;
          padding-top: ${sizes.s24};
          padding-bottom: ${sizes.s24};
          width: fit-content;
        }
      }
    }
  }
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
  left: 70%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  height: 300px;
  width: 70%;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const PrimaryMenu2 = () => {
  const [select, setSelect] = useState(null)
  const [childLinks, setChildLinks] = useState([])

  const modalClickHandler = () => {
    setSelect(null)
    setChildLinks([])
  }

  const parentEnterHandler = (str, e) => {
    setSelect(str)
  }
  const parentClickHandler = (str, e) => {
    e.preventDefault()
    e.stopPropagation()
    setSelect(str)
  }

  const parentLinks = Object.keys(menuItems).map(link => {
    return (
      <li>
        <button
          onMouseEnter={() => parentEnterHandler(link)}
          onClick={e => parentClickHandler(link, e)}
          style={{
            backgroundColor: select === link ? `${colors.navcardGrey}` : null,
          }}
        >
          <p>
            <SpanArrow pxRight={select === link ? `-40px` : `-25px`}>
              {link}
            </SpanArrow>
          </p>
        </button>
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
                <Link to="/update">Update My Info</Link>
              </li>
              <li>
                <Link to="/email">Log into Email</Link>
              </li>
            </ul>
            <SocialLinks>
              <HeaderSocialIcons />
            </SocialLinks>
          </BottomLeft>
        </LeftMenu>

        <RightMenu>
          <Logo>
            {/* <svg src={LogoImage} alt="Logo" style={{ stroke: `black` }} /> */}
          </Logo>
          <ul>{childLinks.length > 0 ? childLinks : null}</ul>
        </RightMenu>
      </MenuGrid>
    </div>
  )
}

export default PrimaryMenu2
