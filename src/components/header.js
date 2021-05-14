import { Link } from "gatsby"
import React, { useState, useRef, useEffect } from "react"
import PrimaryMenu from "./parts/PrimaryMenu"
import PrimaryMenuMobile from "./parts/PrimaryMenuMobile"
import StyledHeader from "./parts/StyledHeader"
import SearchModal from "./parts/SearchModal"
import { useTransition, animated } from "react-spring"
import { useWindowSize } from "./hooks"
import Logo from "../svg/waa_logo.svg" // Tell webpack this JS file uses this image

const Header = ({ noborder }) => {
  const [open, setOpen] = useState(false)
  const [opensearch, setOpenSearch] = useState(false)
  const [topOffset, setTopOffset] = useState(0)
  const noborderClass = (noborder) ? 'noborder' : ''

  const { width } = useWindowSize()

  const menuRef = useRef(null)

  useEffect(() => {
    if(open === true){
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else{
      document.getElementsByTagName('body')[0].style.overflow = 'unset';
    }
  }, [open]);

  const transition1 = useTransition(open, null, {
    from: { transform: `translate3d(100%, 0, 0)` },
    enter: { transform: `translate3d(0,0,0)` },
    leave: { transform: `translate3d(100%,0, 0)` },
  })

  const transition2 = useTransition(opensearch, null, {
    from: { transform: `translate3d(100%, 0, 0)` },
    enter: { transform: `translate3d(0,0,0)` },
    leave: { transform: `translate3d(100%,0, 0)` },
  })

  const toggleMenu = () => {
    getMenuHeight()
    setOpen(!open)
  }

  useEffect(() => {
      const close = (e) => {
        if(e.key === 'Escape'){
          setOpen(false)
        }
      }
      window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  },[])

  const toggleSearch = e => {
    e.preventDefault()
    getMenuHeight()
    setOpenSearch(!opensearch)
  }

  const getMenuHeight = () => {
    let pxToTop = menuRef.current.getBoundingClientRect().bottom
    setTopOffset(pxToTop)
  }

  return (
    <StyledHeader className={`header ${open ? "open" : ""} ${noborderClass}`}>
      <nav ref={menuRef}>
        <div className={`__rednav ${open || opensearch ? "suppress" : ""}`}>
          <div className="inner">
            <ul>
            <li>
              <Link
                to="/update-info"
              >
                Update My Info
              </Link>
              </li>
              <li>
                <Link
                  to="/email"
                >
                  Alumni Email Login
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="mainnav">
          <div className="inner">
            <span className="logo">
              <Link to="/" className="link-home">
                <img src={Logo} alt="Logo" width="112" height="54" />
              </Link>
            </span>
            <div>
              <ul className="uberNav">
              <li>
                  <Link to="/events">Upcoming Events</Link>
                </li>
                <li>
                  <Link to="/news">News &amp; Stories</Link>
                </li>
                
              </ul>
            </div>
            {!open ? (
              opensearch ? (
                <div
                  className="menu open"
                  style={{ justifySelf: `center` }}
                  onClick={e => toggleSearch(e)}
                  onKeyPress={e => toggleSearch(e)}
                  tabIndex="0"
                >
                  <span></span>
                </div>
              ) : (
                <span
                  className="search"
                  onKeyPress={e => toggleSearch(e)}
                  tabIndex="0"
                  style={{ justifySelf: `center` }}
                >
                  <a
                    onClick={e => toggleSearch(e)}
                    style={{ margin: `0 auto` }}
                  ></a>
                </span>
              )
            ) : (
              <div></div>
            )}

            {!opensearch ? (
              <div
                className={`menu ${open ? "open" : ""}`}
                onClick={() => toggleMenu()}
                onKeyPress={() => toggleMenu()}
                tabIndex="0"
              >
                <span></span>
                <div>menu</div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>

      {transition1.map(
        ({ props, item, key }) =>
          item && (
            <animated.div
              key={key}
              style={{
                ...props,
                position: `fixed`,
                left: 0,
                top: topOffset,
                zIndex: 20,
                width: `100vw`,
                height: `100%`,
                backgroundColor: `white`,
              }}
              className="overflow"
              id="modal"
            >
              {width > 655 ? <PrimaryMenu /> : <PrimaryMenuMobile />}
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
                top: topOffset,
                zIndex: 20,
                width: `100vw`,
                height: `100%`,
                backgroundColor: `white`
              }}
              className="overflow"
              id="modal"
            >
              <SearchModal
                topOffset={topOffset}
                isMobile={width > 655 ? false : true}
              />
            </animated.div>
          )
      )}
    </StyledHeader>
  )
}

export default Header
