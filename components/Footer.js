import React from 'react'
import styled from 'styled-components'
//import WfaaFooterMenu from './parts/WfaaFooterMenu'
import Copyright from './parts/Copyright';
import Crest from '../src/svg/crest.svg'
import { colors, mixins, sizes, breakpoints, fonts } from './css-variables'


//import { breakpoints } from './parts/breakpoints'

const StyledCrest = styled.div`
margin: 0;
  position: relative;
  width: 100%;
 
  display: flex;
  align-items: left;  
  padding-bottom: 1.5em;
  border-bottom: .5px solid ${colors.bgWhite};
  margin-bottom: 1.5em;
  @media screen and ${breakpoints.tablet} {
    align-items: center; 
    max-width: 216px;
  }
  
  svg {
    width: 3.5em;  
    margin: 0 auto;  
    @media screen and ${breakpoints.tablet} {
      margin: 0;
    }
  }`
  
const WfaaFooter = ({ className }) =>  (
  <footer className={className}>
    <div className="footer--inner"><div className="footer--border">
      <div className="footer__column footer__column--first">
        <StyledCrest>
        </StyledCrest>
        <div className="external-link">
          <div>University of Wisconsin Foundation</div>
          <a href="https://www.supportuw.org/?utm_source=advanceuw&utm_medium=referral&utm_content=footer">supportuw.org</a>
        </div>
        <div className="external-link">
          <div>Wisconsin Alumni Association</div>
          <a href="https://www.uwalumni.com?utm_source=advanceuw&utm_medium=referral&utm_content=footer">uwalumni.com</a>
        </div>
      </div>
      <div className="footer__column">
        
      </div>
      <div className="footer__column">
        <p>
          <span>Questions:</span>
          <span><a href="mailto:wfaa@supportuw.org">wfaa@supportuw.org</a></span>
        </p>
      </div>
    </div> </div>
    <Copyright />
  </footer>
  )

const StyledFooter = styled(WfaaFooter)`
  font-size: .75em;
  background-color: ${colors.bgRed};
  margin-top: 7.5em;
  color: ${colors.bgWhite};

  .footer--inner {
    max-width: 900px;
    margin: 0 auto;
    padding: 3em 3em 0;
    
    
  }
  .footer--border {
    border-bottom: .5px solid ${colors.bgWhite};
    @media screen and ${breakpoints.tablet} {
      display: flex;
      justify-content: space-around;
      }
  }
  }
  .footer__column {
    flex-grow: 1;
    width: 100%;
    margin: 0 auto 2em;
    max-width: 400px;
    @media screen and ${breakpoints.tablet} {
      width: auto;
      max-width: auto;
    }
    &.footer__column--first {
      border-bottom: 2px solid ${colors.bgWhite};
      @media screen and ${breakpoints.tablet} {
        border-bottom: none;
        flex-grow: 2;
      }
    }
    &:last-child {
      border-bottom: 2px solid ${colors.bgWhite};
      margin-bottom: 0;
      @media screen and ${breakpoints.tablet} {
        border-bottom: none;
      }
    }
  }
  .footer-menu__title {
    text-transform: uppercase;
    font-weight: bold;
  }
  p {
    max-width: 140px;
    margin: 0 0 2em;
    span {
      display: block;
    }
  }
  ul {
    padding: 0;
    margin: 0 0 2em;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  .external-link {
    font-weight: bold;
    margin-bottom: 1.5em;
    line-height: 1.2em;
    a {
      font-weight: normal;
    }
  }
`

export default StyledFooter

