import { Link } from "gatsby"
import React from "react"
import PrimaryMenu from "./parts/PrimaryMenu"
import StyledHeader from "./parts/StyledHeader"
import Logo from "../svg/waa_logo.svg" // Tell webpack this JS file uses this image



class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <StyledHeader className={`header ${this.state.open ? "open" : ""}`}>
        <nav > 
          <div className={`__rednav ${this.state.open ? "suppress" : ""}`}>
            <div className="inner">
              <ul>
                <li><Link
                to="/"
                style={{
                
                  textDecoration: `none`,
                }}
              >Lorem Ipsum</Link></li>
                <li><Link
                to="/"
                style={{
                  
                  textDecoration: `none`,
                }}
              >Email Login</Link></li>
                <li><Link
                to="/"
                style={{
                 
                  textDecoration: `none`,
                }}
              >Update Your Info</Link></li>
              </ul>
            </div>
          </div>
           <div className="mainnav">
             <div className="inner">
               <span className="logo"><Link to="/"><img src={Logo} alt="Logo" /></Link></span>
               <div>
                <ul className="uberNav">
                  <li><Link to="/#Lorem">Lorem</Link></li>
                  <li><Link to="/#Ipsum">Ipsum</Link></li>
                </ul>
               </div>
               <span className="search"><a tabindex="0" href="#search"></a></span>
               <div 
                className={`menu ${this.state.open ? "open" : ""}`} 
                onClick={() => this.toggleMenu()}
                onKeyPress={() => this.toggleMenu()}
                tabindex="0">
                 <span></span>
                 <div>menu</div>
                 </div>
               </div>
             
           </div>
        </nav>
        <PrimaryMenu ref={el => (this.childMenu = el)} />
      </StyledHeader>
      
    )
  }

  toggleMenu() {
    const val = this.state.open ? false : true
    this.setState({ open: val })
    this.childMenu.toggle()
  }
  
} 

export default Header