import React, { useImperativeHandle, useRef } from "react"
import { Link } from "gatsby"
import HeaderSocialIcons from './HeaderSocialIcons'
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
       {this.props.children}
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
      openSub: false,
    }
  }

  render() {
    return (
      <StyledPrimaryMenu className={`primarymenu ${this.state.open ? "open" : ""}`}>
      
        
        <div className="mainNav">
          <div className={`${this.state.openSub ? "opensub" : "x"}`}>
          
            
          <ul className="primary">
            <li 
              onClick={() => this.openSubMenuClick(1)} 
              onMouseEnter={() => this.openSubMenu(1)}
              onMouseLeave={() => this.closeSubMenu(1)}
            >
              <span>Alumni Communities</span>
              <Submenu 
                onMouseEnter={() => this.openSubMenu(1)} 
                ref={el => (this.childMenu1 = el)} 
              >
                <li 
                  onClick={() => this.closeSubMenuClick(1)} 
                  className={`returnNav ${this.state.openSub ? "opensub" : ""}`}><span>Alumni Communities</span></li>
                <li><Link to="/#eenie">1Eenie</Link></li>
                <li><Link to="/#meenie">2Meenie</Link></li>
                <li><Link to="/#meinie">3Meinie</Link></li>
                <li><Link to="/#mo">4Mo</Link></li>
              </Submenu>
              </li>
            <li 
              onClick={() => this.openSubMenuClick(2)} 
              onMouseEnter={() => this.openSubMenu(2)} 
              onMouseLeave={() => this.closeSubMenu(2)} 
            >
              <span>Events and Activities</span>
              <Submenu 
                onMouseEnter={() => this.openSubMenu(2)} 
                ref={el => (this.childMenu2 = el)}
              >
                <li 
                  onClick={() => this.closeSubMenuClick(2)} 
                  className={`returnNav ${this.state.openSub ? "opensub" : ""}`}>
                  <span>Events and Activities</span>
                </li>
                <li><Link to="/#eenie">5Eenie</Link></li>
                <li><Link to="/#meenie">6Meenie</Link></li>
                <li><Link to="/#meinie">7Meinie</Link></li>
                <li><Link to="/#mo">8Mo</Link></li>
              </Submenu>
              </li>
            <li 
              onClick={() => this.openSubMenuClick(3)}  
              onMouseEnter={() => this.openSubMenu(3)} 
              onMouseLeave={() => this.closeSubMenu(3)}
            >
              <span>Stories</span>
              <Submenu 
                ref={el => (this.childMenu3 = el)}
                onMouseEnter={() => this.openSubMenu(3)} 
              >
                <li 
                  className={`returnNav ${this.state.openSub ? "opensub" : ""}`}
                  onClick={() => this.closeSubMenuClick(3)}
                >
                  <span>Stories</span>
                </li>
                <li><Link to="/#eenie">9Eenie</Link></li>
                <li><Link to="/#meenie">10Meenie</Link></li>
                <li><Link to="/#meinie">11Meinie</Link></li>
                <li><Link to="/#mo">12Mo</Link></li>
              </Submenu>
            </li>
            <li 
              onClick={() => this.openSubMenuClick(4)}  
              onMouseEnter={() => this.openSubMenu(4)} 
              onMouseLeave={() => this.closeSubMenu(4)}
            >
              <span>Ways to Support</span>
              <Submenu 
                ref={el => (this.childMenu4 = el)}
                onMouseEnter={() => this.openSubMenu(4)} 
              >
                <li 
                  className={`returnNav ${this.state.openSub ? "opensub" : ""}`}
                  onClick={() => this.closeSubMenuClick(4)} 
                >
                  <span>Ways to Support</span>
                </li>
                <li><Link to="/#eenie">13Eenie</Link></li>
                <li><Link to="/#meenie">14Meenie</Link></li>
                <li><Link to="/#meinie">15Meinie</Link></li>
                <li><Link to="/#mo">16Mo</Link></li><li><Link to="/#eenie">13Eenie</Link></li>
                <li><Link to="/#meenie">14Meenie</Link></li>
                <li><Link to="/#meinie">15Meinie</Link></li>
                <li><Link to="/#mo">16Mo</Link></li><li><Link to="/#eenie">13Eenie</Link></li>
                <li><Link to="/#meenie">14Meenie</Link></li>
                <li><Link to="/#meinie">15Meinie</Link></li>
                <li><Link to="/#mo">16Mo</Link></li>
              </Submenu>
            </li>
          </ul>

          <ul className="supplemental">
            <li><Link to="/##about">About WAA</Link></li>
            <li><Link to="/##contact">Contact WAA</Link></li>
            <li><Link to="/##update">ABE Update</Link></li>
            <li><Link to="/##email">Email Login</Link></li>
          </ul>
          <HeaderSocialIcons />
          </div>
          <div></div>

          
        
        </div>
        
   
      </StyledPrimaryMenu>
      
    )
  }
  
  toggle() {
    const val = this.state.open ? false : true
    /* this checks the "before" state and sets body overflow to what it
       should be in the "after" state */
    if(this.state.open){
      document.body.style.overflow = 'unset';
    }  else {
      document.body.style.overflow = 'hidden';
    
    }
    this.setState({ open: val })
  }
  

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }
  openSubMenu(num) {
    switch(num) {
      case 1: 
      this.childMenu1.open()
      this.childMenu2.close()
      this.childMenu3.close()
      this.childMenu4.close()
      break
      case 2: 
      this.childMenu2.open()
      this.childMenu1.close()
      this.childMenu3.close()
      this.childMenu4.close()
      break
      case 3: 
      this.childMenu3.open()
      this.childMenu1.close()
      this.childMenu2.close()
      this.childMenu4.close()
      break
      case 4: 
      this.childMenu4.open()
      this.childMenu1.close()
      this.childMenu2.close()
      this.childMenu3.close()
      break
      default: 
      this.childMenu1.open()
      this.childMenu2.close()
      this.childMenu3.close()
      this.childMenu4.close()
      break
    }
  //this.setState({ openSub: true })
    
  }
  openSubMenuClick(num) {
    this.openSubMenu(num)
    this.setState({ openSub: true })
  }
  closeSubMenu(num) {
    switch(num) {
      case 1: this.childMenu1.close()
      break
      case 2: this.childMenu2.close()
      break
      case 3: this.childMenu3.close()
      break
      case 4: this.childMenu4.close()
      break
      default: this.childMenu1.close()
      break
    }
   // this.setState({ openSub: false })
    
  }
  closeSubMenuClick(num) {
    this.setState({ openSub: false })
    this.closeSubMenu(num)
    console.log('closeSubmenuClick')
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
    toggle() {
      menuRef.current.toggle()
    }
  }))

  return (
    <StyledPrimaryMenu>
      <Menu ref={menuRef} {...props} />
    </StyledPrimaryMenu>
  )
})