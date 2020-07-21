import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints } from './css-variables'
import PrimaryMenu from "./parts/PrimaryMenu"
import StyledHeader from "./parts/StyledHeader"
import Logo from "../src/svg/waa_logo.svg" // Tell webpack this JS file uses this image



class Header extends React.Component {

  render() {
    return (
      <StyledHeader>
<header>
        <nav > 
          <div className="__rednav">
            <div className="inner">
              <ul>
                <li><Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >Lorem Ipsum</Link></li>
                <li><Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >Email Login</Link></li>
                <li><Link
                to="/"
                style={{
                  color: `white`,
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
                  <li><Link to="/Lorem">Lorem</Link></li>
                  <li><Link to="/Ipsum">Ipsum</Link></li>
                </ul>
               </div>
               <span className="search"><a  href="#search"></a></span>
               <span className="menu" onClick={() => this.toggleMenu()}><a href="#menu">menu</a></span>
               </div>
             
           </div>
        </nav>
        <PrimaryMenu ref={el => (this.childMenu = el)} />
      </header>
      </StyledHeader>
      
    )
  }

  toggleMenu() {
    console.log(this.childMenu.state)
    //this.childMenu.state['open'] === false 
    //  ? this.childMenu.open()
    //  : this.childMenu.close()
  }
  
} 

export default Header