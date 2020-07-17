import React, { useImperativeHandle, useRef } from "react"
import { Link } from "gatsby"
import StyledPrimaryMenu from "./StyledPrimaryMenu"

class Submenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }
  render() {
    return (

      <ul className={`secondary ${this.state.open ? "open" : ""}`}>
        <li><Link to="/eenie">Eenie</Link></li>
        <li><Link to="/meenie">Meenie</Link></li>
        <li><Link to="/meinie">Meinie</Link></li>
        <li><Link to="/mo">Mo</Link></li>
      </ul>
    )
  }
  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <StyledPrimaryMenu>
      <div
        role="button"
        tabIndex="0"
        className={`primarymenu ${this.state.open ? "open" : ""}`}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
      >
        <div className="topNav">top nav</div>
        <div className="mainNav">
          <div>
          <ul className="primary">
            <li onMouseEnter={() => this.openSubMenu()} onMouseLeave={() => this.closeSubMenu()}>
              <span>Alumni Communities</span>
              <Submenu ref={el => (this.childMenu = el)} />
              </li>
            <li><span>Events and Activities</span></li>
            <li><span>Stories</span></li>
            <li><span>Ways to Support</span></li>
          </ul>

          <ul className="supplemental">
            <li><Link to="/#about">About WAA</Link></li>
            <li><Link to="/#contact">Contact WAA</Link></li>
            <li><Link to="/#update">ABE Update</Link></li>
            <li><Link to="/#email">Email Login</Link></li>
          </ul>
          <ul className="socialLinks">
            <li><a title="Wisconsin Alumni Association Facebook Page" href="https://www.facebook.com">F</a></li>
            <li><a title="Wisconsin Alumni Association Facebook Page" href="https://www.facebook.com">T</a></li>
            <li><a title="Wisconsin Alumni Association Facebook Page" href="https://www.facebook.com">IG</a></li>
            <li><a title="Wisconsin Alumni Association Facebook Page" href="https://www.facebook.com">LI</a></li>
          </ul>
          </div>
          <div></div>

          
        
        </div>
        
      </div>
      </StyledPrimaryMenu>
      
    )
  }

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }
  openSubMenu() {
    this.childMenu.open()
  }
  closeSubMenu() {
    this.childMenu.close()
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
  }))

  return (
    <StyledPrimaryMenu>
      <Menu ref={menuRef} {...props} />
    </StyledPrimaryMenu>
  )
})