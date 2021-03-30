import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { colors, sizes } from "../css-variables"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
import { useWindowSize } from "../hooks"
import HeaderSocialIcons from "./HeaderSocialIcons"
import FbIcon from "../../svg/fb_icon_gray.svg" // Tell webpack this JS file uses this image
import TwIcon from "../../svg/twitter_icon_gray.svg" // Tell webpack this JS file uses this image
import IgIcon from "../../svg/instagram_icon_gray.svg" // Tell webpack this JS file uses this image
import WcIcon from "../../svg/wechat_icon_gray.svg" // Tell webpack this JS file uses this image
import LiIcon from "../../svg/linkedin_icon_gray.svg" // Tell webpack this JS file uses this image

const menuItems = {
  "Alumni Communities": [
    { tag: "Become a WAA Member", url: "/membership" },
    { tag: "WAA Member Community", url: "/membership/for-members" },
    { tag: "Chapters & Groups", url: "/groups" },
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
    { tag: "WAA Publications", url: "/publications" },
  ],
  "Ways to Support": [
    { tag: "Advocate for the UW", url: "/advocate" },
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
  top: 48px;
  width: 90%;
  border-collapse: collapse;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
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
      button {
        font-size: ${sizes.s24};
        border: none;
        width: 100%;
        background: none;
        outline: none;
        p {
          position: relative;
          padding-bottom: ${sizes.s32};
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
        font-size: 0;
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
  margin-left: 16px;
  font-size: ${sizes.s18};
  border-top: 1px solid ${colors.navMenuBorderGrey};
  li {
    padding-top: 16px;
    padding-bottom: 16px;
    a {
      margin: 0;
      padding: 0;
    }
  }
`

const BackLink = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  padding: 0px ${sizes.s24} ${sizes.s32};
  font-size: ${sizes.s24};
  border-bottom: 1px solid ${colors.navMenuBorderGrey};
`

const SpanArrowRight = styled.span`
  &:after {
    position: absolute;
    content: "";
    top: 8px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 12px solid ${colors.badgerRed};
    border-bottom: 6px solid transparent;
    transition: 0.25s ease-in-out;
    right: -30px;
  }
`

const SpanArrowLeft = styled.span`
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 12px solid ${colors.badgerRed};
    border-bottom: 6px solid transparent;
  }
`

const PrimaryMenu = () => {
  const [select, setSelect] = useState(null)
  const [childLinks, setChildLinks] = useState([])
  const [showLeft, setShowLeft] = useState(true)

  // const transition1 = useTransition(showLeft, null, {
  //   from: { transform: `translate3d(-100%, 0, 0)` },
  //   enter: { transform: `translate3d(0,0,0)` },
  //   leave: { transform: `translate3d(-100%,0, 0)` },
  // })
  const transition1 = useTransition(showLeft, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const transition2 = useTransition(!showLeft, null, {
    from: { transform: `translate3d(100%, 0, 0)` },
    enter: { transform: `translate3d(0,0,0)` },
    leave: { transform: `translate3d(100%,0, 0)` },
  })

  const modalClickHandler = () => {
    setShowLeft(true)
  }

  const parentClickHandler = (str, e) => {
    e.preventDefault()
    e.stopPropagation()
    if (str === select) {
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
      setShowLeft(false)
      setChildLinks(links)
    } else {
      setSelect(str)
    }
  }

  const parentLinks = Object.keys(menuItems).map(link => {
    return (
      <li>
        <button onClick={e => parentClickHandler(link, e)}>
          <p>
            <SpanArrowRight>{link}</SpanArrowRight>
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
      setShowLeft(false)
      setChildLinks(links)
    }
  }, [select])

  return (
    <div onClick={() => modalClickHandler()}>
      <MenuGrid>
        {transition1.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={{
                  ...props,
                  position: `fixed`,
                  left: 0,
                  zIndex: 5,
                  width: `100vw`,
                  height: `100%`,
                  backgroundColor: `white`,
                }}
              >
                <LeftMenu>
                  <div style={{ marginBottom: `16px`, marginLeft: `16px` }}>
                    <ul>{parentLinks}</ul>
                  </div>
                  <BottomLeft>
                    <ul>
                      <li>
                        <Link to="/about">About WAA</Link>
                      </li>
                      <li>
                        <Link to="/contact-waa">Contact WAA</Link>
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
              </animated.div>
            )
        )}

        {transition2.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={{
                  ...props,
                  position: `fixed`,
                  left: 0,
                  zIndex: 5,
                  width: `100vw`,
                  height: `100%`,
                  backgroundColor: `white`,
                }}
              >
                <RightMenu>
                  <BackLink>
                    <p
                      style={{
                        position: `relative`,
                        margin: 0,
                      }}
                    >
                      <SpanArrowLeft />
                    </p>
                    <p
                      onClick={() => modalClickHandler()}
                      style={{ marginBottom: 0 }}
                    >
                      {select}
                    </p>
                  </BackLink>

                  <ul>{childLinks.length > 0 ? childLinks : null}</ul>
                </RightMenu>
              </animated.div>
            )
        )}
      </MenuGrid>
    </div>
  )
}

export default PrimaryMenu
