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
 
  close(num = 'unset') {
    console.log('submenu close(', num, ') ')
    this.setState({ open: false })
  }

  open(num = 'unset') {
    console.log('submenu open(', num, ') ')
  
    this.setState({ open: true })
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      openSub: false,
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      clickOpen1: false,
      clickOpen2: false,
      clickOpen3: false,
      clickOpen4: false,
    }
  }

  render() {
    return (
      <StyledPrimaryMenu className={`primarymenu ${this.state.open ? "open" : ""}`}>
      
        
        <div className="mainNav">
          <div className={`${this.state.openSub ? "opensub" : "x"}`}>
          
            
          <ul className="primary">
            <li 
              tabindex="0"
              onClick={() => this.toggleSubMenu(1)} 
              onKeyPress={() => this.toggleSubMenu(1)}
              onMouseEnter={() => this.openSubMenuHover(1)}
              className={ this.state.open1 ? 'open' : ''}
            >
              <span>Alumni Communities</span>
              <Submenu 
                onMouseEnter={() => this.openSubMenu(1)} 
                ref={el => (this.childMenu1 = el)} 
              >
                
                <li><Link to="/#eenie">1Eenie</Link></li>
                <li><Link to="/#meenie">2Meenie</Link></li>
                <li><Link to="/#meinie">3Meinie</Link></li>
                <li><Link to="/#mo">4Mo</Link></li>
              </Submenu>
              </li>
            <li 
              tabindex="0"
              onClick={() => this.toggleSubMenu(2)} 
              onKeyPress={() => this.toggleSubMenu(2)}
              onMouseEnter={() => this.openSubMenu(2)} 
              className={ this.state.open2 ? 'open' : ''}
            >
              <span>Events and Activities</span>
              <Submenu 
                onMouseEnter={() => this.openSubMenu(2)} 
                ref={el => (this.childMenu2 = el)}
              >
                <li><Link to="/#eenie">5Eenie</Link></li>
                <li><Link to="/#meenie">6Meenie</Link></li>
                <li><Link to="/#meinie">7Meinie</Link></li>
                <li><Link to="/#mo">8Mo</Link></li>
              </Submenu>
              </li>
            <li 
              tabindex="0"
              onClick={() => this.toggleSubMenu(3)}  
              onKeyPress={() => this.toggleSubMenu(3)}
              onMouseEnter={() => this.openSubMenu(3)} 
              className={ this.state.open3 ? 'open' : ''}
            >
              <span>Stories</span>
              <Submenu 
                ref={el => (this.childMenu3 = el)}
                onMouseEnter={() => this.openSubMenu(3)} 
              >
                <li><Link to="/#eenie">9Eenie</Link></li>
                <li><Link to="/#meenie">10Meenie</Link></li>
                <li><Link to="/#meinie">11Meinie</Link></li>
                <li><Link to="/#mo">12Mo</Link></li>
              </Submenu>
            </li>
            <li 
              tabindex="0"
              onClick={() => this.toggleSubMenu(4)} 
              onKeyPress={() => this.toggleSubMenu(4)}   
              onMouseEnter={() => this.openSubMenu(4)} 
              className={ this.state.open4 ? 'open' : ''}
            >
              <span>Ways to Support</span>
              <Submenu 
                ref={el => (this.childMenu4 = el)}
                onMouseEnter={() => this.openSubMenu(4)} 
              >
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
    console.log('openSubMenu:',num)
    switch(num) {
      case 1: 
      this.childMenu1.open(1)
      this.childMenu2.close(2)
      this.childMenu3.close(3)
      this.childMenu4.close(4)
      this.setState({ open1: true })
      this.setState({ clickOpen3: false })
      this.setState({ clickOpen2: false })
      this.setState({ clickOpen4: false })
      
      break
      case 2: 
      this.childMenu2.open(2)
      this.childMenu1.close(1)
      this.childMenu3.close(3)
      this.childMenu4.close(4)
      this.setState({ clickOpen1: false })
      this.setState({ clickOpen3: false })
      this.setState({ clickOpen4: false })
      
      this.setState({ open2: true })
     
      break
      case 3: 
      this.childMenu3.open(3)
      this.childMenu1.close(1)
      this.childMenu2.close(2)
      this.childMenu4.close(4)
      this.setState({ open1: false })
      this.setState({ open2: false })
      this.setState({ open3: true })
      this.setState({ open4: false })
      this.setState({ clickOpen1: false })
      this.setState({ clickOpen2: false })
      this.setState({ clickOpen4: false })
      break
      case 4: 
      this.childMenu4.open(4)
      this.childMenu1.close(1)
      this.childMenu2.close(2)
      this.childMenu3.close(3)
      this.setState({ open1: false })
      this.setState({ open2: false })
      this.setState({ open3: false })
      this.setState({ open4: true })
      this.setState({ clickOpen1: false })
      this.setState({ clickOpen2: false })
      this.setState({ clickOpen3: false })
      break
      default: 
      this.childMenu1.open()
      this.childMenu2.close(2)
      this.childMenu3.close(3)
      this.childMenu4.close(4)
      break
    }
  
  this.setState({ openSub: true })
    
  }
  openSubMenuHover(num, click = false) {
    console.log('this was a hover trigger')
    this.openSubMenu(num)
  }
  
  closeSubMenu(num) {
    console.log('closeSubMenu:',num)
    switch(num) {
      case 1: this.childMenu1.close(1)
      this.setState({ open1: false })
      this.setState({ clickOpen1: false })
      break
      case 2: this.childMenu2.close(2)
      this.setState({ open2: false })
      this.setState({ clickOpen2: false })
      break
      case 3: this.childMenu3.close(3)
      this.setState({ open3: false })
      this.setState({ clickOpen3: false })
      break
      case 4: this.childMenu4.close(4)
      this.setState({ open4: false })
      this.setState({ clickOpen4: false })
      break
      default: this.childMenu1.close(1)
      this.setState({ open1: false })
      this.setState({ clickOpen1: false })
      break
    }
  
    
  }
  
 
  toggleSubMenu(num) {
    console.log('toggleSubMenu:',num)
    switch(num) {
      case 1: 
      console.log('is menu1 open? ', this.childMenu1.state.open )
        this.childMenu1.state.open && this.state.clickOpen1
        ? 
          this.closeSubMenu(1)
        : 
          this.openSubMenu(1, true)
          this.setState({ clickOpen1: true })

      break
      case 2: 
      console.log('is menu2 open? ', this.childMenu1.state.open )
      this.childMenu2.state.open && this.state.clickOpen2
        ? this.closeSubMenu(2)
        : 
          this.openSubMenu(2, true)
          this.setState({ clickOpen2: true })

      break
      case 3: 
      console.log('is menu3 open? ', this.childMenu1.state.open )
      this.childMenu3.state.open && this.state.clickOpen3
      ? this.closeSubMenu(3)
      : 
        this.openSubMenu(3)
        this.setState({ clickOpen3: true })

      break
      case 4: 
      console.log('is menu4 open? ', this.childMenu1.state.open )
      this.childMenu4.state.open && this.state.clickOpen4
      ? this.closeSubMenu(4)
      : 
        this.openSubMenu(4)
        this.setState({ clickOpen4: true })
      break
      default: 
      this.childMenu1.close()
      this.childMenu2.close()
      this.childMenu3.close()
      this.childMenu4.close()
      break
    }
    this.setState({ openSub: !this.state.openSub })


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
    },
    toggleSubMenu() {
      menuRef.current.toggleSubMenu()
    }
  }))

  return (
    <StyledPrimaryMenu>
      <Menu ref={menuRef} {...props} />
    </StyledPrimaryMenu>
  )
})