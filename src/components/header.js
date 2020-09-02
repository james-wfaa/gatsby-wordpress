import { Link } from "gatsby"
import React, { useState, useRef } from "react"
import PrimaryMenu from "./parts/PrimaryMenu"
import StyledHeader from "./parts/StyledHeader"
import SearchModal from "./parts/SearchModal"
import { useTransition, animated } from "react-spring"
import Logo from "../svg/waa_logo.svg" // Tell webpack this JS file uses this image

const Header = () => {
  const [open, setOpen] = useState(false)
  const [opensearch, setOpenSearch] = useState(false)
  const childMenu = useRef(null)

  const transition = useTransition(opensearch, null, {
    from: { transform: `translate3d(100%, 0, 0)` },
    enter: { transform: `translate3d(0,0,0)` },
    leave: { transform: `translate3d(100%,0, 0)` },
  })

  const toggleMenu = () => {
    setOpen(!open)
    childMenu.current.toggle()
  }

  const toggleSearch = e => {
    e.preventDefault()
    setOpenSearch(!opensearch)
  }

  return (
    <StyledHeader className={`header ${open ? "open" : ""}`}>
      <nav>
        <div className={`__rednav ${open || opensearch ? "suppress" : ""}`}>
          <div className="inner">
            <ul>
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Lorem Ipsum
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Email Login
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Update Your Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mainnav">
          <div className="inner">
            <span className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </span>
            <div>
              <ul className="uberNav">
                <li>
                  <Link to="/#Lorem">Lorem</Link>
                </li>
                <li>
                  <Link to="/#Ipsum">Ipsum</Link>
                </li>
              </ul>
            </div>
            <div
              className={`menu ${open ? "open" : ""}`}
              onClick={() => toggleMenu()}
              onKeyPress={() => toggleMenu()}
              tabIndex="0"
            >
              <span></span>
              <div>menu</div>
            </div>
            {opensearch ? (
              <div
                className="menu open"
                style={{ marginLeft: `20px` }}
                onClick={e => toggleSearch(e)}
              >
                <span></span>
              </div>
            ) : (
              <span className="search">
                <a
                  onClick={e => toggleSearch(e)}
                  style={{ margin: `0 auto` }}
                ></a>
              </span>
            )}
          </div>
        </div>
      </nav>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{
                ...props,
                position: `fixed`,
                top: `118px`,
                left: 0,
                zIndex: 5,
                width: `100vw`,
                height: `100%`,
                backgroundColor: `white`,
              }}
            >
              <SearchModal />
            </animated.div>
          )
      )}
      <PrimaryMenu ref={childMenu} />
    </StyledHeader>
  )
}

export default Header
