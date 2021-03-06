import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { colors, sizes } from "../css-variables"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
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
    { tag: "Chapters & Groups", url: "/waa-groups" },
    { tag: "Badger Bridge Online Network", url: "/alumni-directory" },
    { tag: "Diverse Alumni", url: "/diverse-alumni" },
    { tag: "Recent Grads", url: "/recent-grads" },
  ],
  "Events & Activities": [
    { tag: "Upcoming Activities", url: "/events" },
    { tag: "Signature Events & Activities", url: "/signature-events" },
    { tag: "Learning & Enrichment Programs", url: "/learning" },
    { tag: "Badger Athletics Activities", url: "/athletics" },
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
    { tag: "Show Your Pride", url: "/show-your-pride" },
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
        //outline: none;
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
    width: 100%;
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
        span{
          display: block;
          width: ${sizes.s24};
          height: ${sizes.s24};
          background-color: ${colors.iconGrey};
          font-size:0;
          padding:0;
          &:hover {
            background-color: ${colors.buttonRed};
          }
        }
        &.fb {
          span{
            mask: url(${FbIcon}) no-repeat;
          }
        }
        &.tw {
          span{
            mask: url(${TwIcon}) no-repeat;
          }
        }
        &.ig {
          span{
            mask: url(${IgIcon}) no-repeat;
          }
        }
        &.wc {
          span{
            mask: url(${WcIcon}) no-repeat;
          }
        }
        &.li {
          span{
            mask: url(${LiIcon}) no-repeat;
          }
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
    a {
      margin: 0;
      padding: 0;
      padding-top: 16px;
      padding-bottom: 16px;
      display: block;
      :hover, : active{
        text-decoration:underline;
      }
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

  const transition2 = useTransition(!showLeft, {
    from: { transform: `translate3d(100%, 0, 0)` },
    enter: { transform: `translate3d(0,0,0)` },
    leave: { transform: `translate3d(100%,0, 0)` },
  })

  useEffect(() => {
        const modalLinks = document.getElementById('modal') ? Array.from(document.getElementById('modal').querySelectorAll('a, button')) : null
        const closeBtnLink = document.getElementsByClassName('open') ? Array.from(document.getElementsByClassName('menu')) : null
        const homeBtn = document.getElementsByClassName('link-home') ? Array.from(document.getElementsByClassName('link-home')) : null
        const mobileBackLink = document.getElementById('backLink') ? document.getElementById('backLink') : null
        if (modalLinks && mobileBackLink){
          modalLinks.unshift(mobileBackLink)
          
        }
        const firstLink = modalLinks ? modalLinks[0] : null
        const lastLink = modalLinks ? modalLinks[modalLinks.length - 1] : null 
        const stayInModal = (e) => {
        //console.log(document.activeElement, modalLinks)
        if(document.activeElement === firstLink){
          if (e.shiftKey && e.key === 'Tab'){
            e.preventDefault();
            closeBtnLink[0].focus()
          }
        } else if(document.activeElement === homeBtn[0]){
          if(e.shiftKey && e.key === 'Tab'){
            e.preventDefault();
            lastLink.focus()
          }
        } else if(document.activeElement === lastLink){
          if(e.key === 'Tab' && !e.shiftKey){
            e.preventDefault();
            homeBtn[0].focus()
          }
        } else if(document.activeElement === closeBtnLink[0]){
          if(e.key === 'Tab' && !e.shiftKey){
            e.preventDefault();
            modalLinks[0].focus()
          }
        }
      }
      window.addEventListener('keydown', stayInModal)
    return () => window.removeEventListener('keydown', stayInModal)
  })

  const modalClickHandler = () => {
    setShowLeft(true)
  }
  const modalKeyPressHandler = (e) => {
    if(e.key === 'Enter'){
      setShowLeft(true)
    }
  }

  const parentClickHandler = (str, e) => {
    e.preventDefault()
    e.stopPropagation()
    if (str === select) {
      let links = menuItems[select].map(link => {
        if(link.url === "https://www.uwalumnistore.com" ){
          return (
            <li>
              <a href={link.url} target="_blank" rel="noreferrer" className="gtm-main-menu">{link.tag}</a>
            </li>
          )
        }
        else{
          return (
            <li>
              <Link to={link.url} className="gtm-main-menu">{link.tag}</Link>
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
      <li key={link}>
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
            <li key={link.tag}>
              <a href={link.url} target="_blank" className="gtm-main-menu">{link.tag}</a>
            </li>
          )
        }
        else{
          return (
            <li key={link.tag}>
              <Link to={link.url} className="gtm-main-menu">{link.tag}</Link>
            </li>
          )
        }
      })
      setShowLeft(false)
      setChildLinks(links)
    }
  }, [select])

  useEffect(() => {
    const focusFirstLink = document.getElementById('mChildLinks') ? Array.from(document.getElementById('mChildLinks').querySelectorAll('a, button')) : null
    if(focusFirstLink && focusFirstLink.length > 0){
      focusFirstLink[0].focus()
    }
  }, [childLinks])

  return (
    <div onClick={() => modalClickHandler()}>
      <MenuGrid>
        {transition1.map(
          ({ props, item, key }) =>
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
                  overflow:`scroll`
                }}
              >
                <LeftMenu>
                  <div style={{ marginBottom: `16px`, marginLeft: `16px` }}>
                    <ul>{parentLinks}</ul>
                  </div>
                  <BottomLeft>
                    <ul>
                      <li>
                        <Link to="/about" className="gtm-main-menu">About WAA</Link>
                      </li>
                      <li>
                        <Link to="/about/contact-waa" className="gtm-main-menu">Contact WAA</Link>
                      </li>
                      <li>
                        <Link to="/update-info" className="gtm-main-menu">Update My Info</Link>
                      </li>
                      <li>
                        <Link to="/email" className="gtm-main-menu">Alumni Email Login</Link>
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
          ({ props, item, key }) =>
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
                      onKeyPress={(e) => modalKeyPressHandler(e)}
                      style={{ marginBottom: 0 }}
                      tabIndex="0"
                      id="backLink"
                    >
                      {select}
                    </p>
                  </BackLink>

                  <ul id="mChildLinks">{childLinks.length > 0 ? childLinks : null}</ul>
                </RightMenu>
              </animated.div>
            )
        )}
      </MenuGrid>
    </div>
  )
}

export default PrimaryMenu
