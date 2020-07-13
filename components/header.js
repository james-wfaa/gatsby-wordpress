import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints } from './css-variables'


const Header = ({ className }) => {
  console.log(className)
  return (
    <header>
      <nav className={className}> 
        <div className={`${className}__rednav`}>
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
         <div className={`${className}__mainnav`}>
           <div className="inner">
             <span className="logo">logo</span>
             <ul className="uberNav">
               <li>Lorem</li>
               <li>Ipsum</li>
             </ul>
             <span className="search">search</span>
             <span className="menu">menu</span>
             </div>
           
         </div>
      </nav>
    </header>
  )
} 

const StyledHeader = styled(Header)`
&__mainnav {
  width: 100%;
  height: 86px;
  .inner {
    display: flex;
    justify-content: space-between;
  }
  

  .uberNav {
    display: none;
    @media screen and ${breakpoints.tabletS} {
      display: inline-block;
      height: 100%;
      li {
        display: inline-block;
        height: 100%;
        padding-right: ${sizes.s24};
        text-align: right;
        margin: 0;
        &:last-child {
          padding: 0;
        }
      }
  
    }
  }
  
  
}
&__rednav {
  display: none;
  width: 100%;
  color: ${colors.bgWhite};
  background-color: ${colors.bgRed};
  height: 32px;
  text-align: right;
  padding: 0 180px;
  font-size: ${sizes.s14};
  z-index: -2;
  
  ul {
    position: relative;
    display: inline-block;
    background: transparent;
    background-color: ${colors.toneRed};
      transform: skew(135deg);
    margin: 0;
    height: 100%;
    padding: 0 1.5rem;
    li {
      display: inline-block;
      height: 100%;
      padding-right: ${sizes.s24};
      text-align: right;
      margin: 0;
      transform: skew(45deg);
      &:last-child {
        padding: 0;
      }
    }
    
  }
  @media screen and ${breakpoints.tabletS} {
    display: block;
  }
}
.inner {
  height: 100%;
  width: 100%;
  max-width: calc( 1440px - 360px );
  margin: 0 auto;
}
`



export default StyledHeader
