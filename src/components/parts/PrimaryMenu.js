import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { colors, sizes, breakpoints } from "../css-variables"
import styled from "styled-components"
import HeaderSocialIcons from "./HeaderSocialIcons"
import LogoImage from "../../assets/svg/main_nav_illustration.svg" 
import FbIcon from "../../svg/fb_icon_gray.svg" // Tell webpack this JS file uses this image
import TwIcon from "../../svg/twitter_icon_gray.svg" // Tell webpack this JS file uses this image
import IgIcon from "../../svg/instagram_icon_gray.svg" // Tell webpack this JS file uses this image
import WcIcon from "../../svg/wechat_icon_gray.svg" // Tell webpack this JS file uses this image
import LiIcon from "../../svg/linkedin_icon_gray.svg" // Tell webpack this JS file uses this image

const menuItems = {
  "Alumni Communities": [
    { tag: "Become a WAA Member", url: "/membership" },
    { tag: "WAA Member Community", url: "/membership/for-members" },
    { tag: "Chapters & Groups", url: "/waa-groups" },
    { tag: "Badger Bridge Online Network", url: "/alumni-directory" },
    { tag: "Diverse Alumni", url: "/diverse-alumni" },
    { tag: "Recent Grads", url: "/recent-grads" },
  ],
  "Events & Activities": [
    { tag: "Upcoming Activities", url: "/events" },
    { tag: "Signature Events & Activities", url: "/signature-events" },
    { tag: "Learning & Enrichment Programs", url: "/learning" },
    { tag: "Badger Athletic Events", url: "/athletics" },
    { tag: "Travel Tours", url: "/travel" },
  ],
  "News & Stories": [
    { tag: "News & Stories", url: "/news" },
    { tag: "Alumni Achievements", url: "/alumni-achievements" },
    { tag: "Alumni Notes", url:"/alumni-notes" },
    { tag: "WAA Publications", url: "/publications" },
  ],
  "Ways to Support": [
    { tag: "Advocate for the UW", url: "/advocate" },
    { tag: "Show your Pride", url: "/show-your-pride" },
    { tag: "Get Involved", url: "/get-involved" },
    { tag: "Make a Gift", url: "/give" },
  ],
  "Resources & Services": [
    { tag: "Alumni Directory", url: "/alumni-directory" },
    { tag: "Career Resources", url: "/career-resources" },
    { tag: "UW Library Resources", url: "/about/library" },
    { tag: "Alumni Store", url: "https://www.uwalumnistore.com" },
    { tag: "Alumni Partners & Perks", url: "/about/partners-perks" },
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
  @media screen and ${breakpoints.tabletL} {
    grid-template-columns: .6fr 1fr;
  }
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
        //outline: none;
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
    &:hover {
      background-color: ${colors.navcardGrey};
    }
    a {
      text-decoration: none;
      color: ${colors.navMenuBlack};
      padding: 16px ${sizes.s24};
      display: block;
      width: 100%;
    }
  }
`

const SocialLinks = styled.div`
  margin-bottom: 110px;
  .socialLinks {
    width: 200px;
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
        font-size:0;
        padding:0;
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
    a {
      margin: 0;
      padding: 0;
      padding-top: 16px;
      padding-bottom: 16px;
      display: block;
      :hover{
        text-decoration:underline;
      }
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
  height: 600px;
  width: 100%;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: -1;
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
        if(link.url === "https://www.uwalumnistore.com" ){
          return (
            <li>
              <a href={link.url} target="_blank">{link.tag}</a>
            </li>
          )
        }
        else{
          return (
            <li>
              <Link to={link.url}>{link.tag}</Link>
            </li>
          )
        }
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
                <Link to="/about/contact-waa">Contact WAA</Link>
              </li>
              <li>
                <Link to="/update-info">Update My Info</Link>
              </li>
              <li>
                <Link to="/email">Log Into Email</Link>
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
