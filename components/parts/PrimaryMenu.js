import React, { useImperativeHandle, useRef, useEffect } from "react"
import { Link } from "gatsby"
import HeaderSocialIcons from './HeaderSocialIcons'
import StyledPrimaryMenu from "./StyledPrimaryMenu"
import Header from "../Header"

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
    }
  }

  render() {
    return (
      <StyledPrimaryMenu className={`primarymenu ${this.state.open ? "open" : ""}`}>
      
        
        <div className="mainNav">
          <div>
          
            
          <ul className="primary">
            <li onMouseEnter={() => this.openSubMenu(1)} onMouseLeave={() => setTimeout(function() { 
      this.closeSubMenu(1)
  }.bind(this), 1000)
}>
              <span>Alumni Communities</span>
              <Submenu onMouseEnter={() => this.openSubMenu(1)} ref={el => (this.childMenu1 = el)}>
                <li><Link to="/eenie">1Eenie</Link></li>
                <li><Link to="/meenie">2Meenie</Link></li>
                <li><Link to="/meinie">3Meinie</Link></li>
                <li><Link to="/mo">4Mo</Link></li>
              </Submenu>
              </li>
            <li onMouseEnter={() => this.openSubMenu(2)} onMouseLeave={() => this.closeSubMenu(2)}><span>Events and Activities</span>
            <Submenu ref={el => (this.childMenu2 = el)}>
                <li><Link to="/eenie">5Eenie</Link></li>
                <li><Link to="/meenie">6Meenie</Link></li>
                <li><Link to="/meinie">7Meinie</Link></li>
                <li><Link to="/mo">8Mo</Link></li>
              </Submenu>
              </li>
            <li onMouseEnter={() => this.openSubMenu(3)} onMouseLeave={() => this.closeSubMenu(3)}><span>Stories</span>
            <Submenu ref={el => (this.childMenu3 = el)}>
                <li><Link to="/eenie">9Eenie</Link></li>
                <li><Link to="/meenie">10Meenie</Link></li>
                <li><Link to="/meinie">11Meinie</Link></li>
                <li><Link to="/mo">12Mo</Link></li>
              </Submenu>
            </li>
            <li onMouseEnter={() => this.openSubMenu(4)} onMouseLeave={() => this.closeSubMenu(4)}><span>Ways to Support</span>
            <Submenu ref={el => (this.childMenu4 = el)}>
                <li><Link to="/eenie">13Eenie</Link></li>
                <li><Link to="/meenie">14Meenie</Link></li>
                <li><Link to="/meinie">15Meinie</Link></li>
                <li><Link to="/mo">16Mo</Link></li>
              </Submenu>
            </li>
          </ul>

          <ul className="supplemental">
            <li><Link to="/#about">About WAA</Link></li>
            <li><Link to="/#contact">Contact WAA</Link></li>
            <li><Link to="/#update">ABE Update</Link></li>
            <li><Link to="/#email">Email Login</Link></li>
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
      case 1: this.childMenu1.open()
      this.childMenu2.close()
      this.childMenu3.close()
      this.childMenu4.close()
      break
      case 2: this.childMenu2.open()
      this.childMenu1.close()
      this.childMenu3.close()
      this.childMenu4.close()
      break
      case 3: this.childMenu3.open()
      this.childMenu1.close()
      this.childMenu2.close()
      this.childMenu4.close()
      break
      case 4: this.childMenu4.open()
      this.childMenu1.close()
      this.childMenu2.close()
      this.childMenu3.close()
      break
    }
    
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
    }
    
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