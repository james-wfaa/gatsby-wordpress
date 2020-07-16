import React from 'react'
import styled from 'styled-components'
import WfaaFooterMenu from './parts/WfaaFooterMenuStatic'
import Copyright from './parts/Copyright';
import Crest from '../src/svg/uwa_crest_white_footer_2x.svg'
import IconFB from '../src/svg/uwa__facebook_white_24x24.svg'
import IconInsta from '../src/svg/uwa__instagram_white_24x24.svg'
import IconTwitter from '../src/svg/uwa__twitter_white_24x24.svg'
import IconWeChat from '../src/svg/uwa__WeChat_white_24x24.svg'
import { colors, mixins, sizes, breakpoints, fonts } from './css-variables'


//import { breakpoints } from './parts/breakpoints'

const navTemp = {
  name:"Careers at WFAA",
  items:[
    {
      "title":"Employee Benefits",
      "url":"https://wp.advanceuw.org/benefits/"
    },
    {
      "title": "Mission & Values",
      "url": "https://wp.advanceuw.org/teams1/"
    },
    {
      "title":"Teams",
      "url":"https://wp.advanceuw.org/teams2/"
    }
]};
const navTempLong = {
  name:"About WFAA",
  items:[
    {
      "title":"Employee Benefits",
      "url":"https://wp.advanceuw.org/benefits2/"
    },
    {
      "title": "Mission & Values",
      "url": "https://wp.advanceuw.org/teams3/"
    },
    {
      "title":"Teams",
      "url":"https://wp.advanceuw.org/teams4/"
    },
    {
      "title":"Behind the Scenes",
      "url":"https://wp.advanceuw.org/btw1/"
    },
    {
      "title":"Jobs at WFAA",
      "url":"https://wp.advanceuw.org/jobs1/"
    },
    {
      "title":"Teams",
      "url":"https://wp.advanceuw.org/teams5/"
    },
    {
      "title":"Behind the Scenes",
      "url":"https://wp.advanceuw.org/btw2/"
    },
    {
      "title":"Jobs at WFAA",
      "url":"https://wp.advanceuw.org/jobs2/"
    }
]};
  
const navTempLong2 = {
  name:"About WFAA",
  items:[
    {
      "title":"Employee Benefits",
      "url":"https://wp.advanceuw.org/benefits3/"
    },
    {
      "title":"Behind the Scenes",
      "url":"https://wp.advanceuw.org/btw3/"
    },
    {
      "title":"Jobs at WFAA",
      "url":"https://wp.advanceuw.org/jobs3/"
    },
    {
      "title":"Teams",
      "url":"https://wp.advanceuw.org/##/"
    }
]};

const StyledCrest = styled.div`
margin: 0;
  position: relative;
  width: 100%;
 
  display: flex;
  align-items: left;  
  border-bottom: 1px solid ${colors.bgWhite};
  margin-bottom: 1.5em;
  padding-bottom: ${sizes.s24};
  @media screen and ${breakpoints.tablet} {
    align-items: center; 
    max-width: 216px;
  }
  
  img {
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
          <img className="wfaa-uw-crest" src={Crest} alt="" />
        </StyledCrest>
        <div className="external-link">
          <div>University of Wisconsin&#8212;Madison</div>
          <a href="https://www.wisc.edu/?utm_source=advanceuw&utm_medium=referral&utm_content=footer">wisc.edu</a>
        </div>
        <div className="external-link">
          <div>University of Wisconsin Foundation<br/>and Alumni Association</div>
          <a href="https://www.advanceuw.org?utm_source=advanceuw&utm_medium=referral&utm_content=footer">advanceuw.org</a>
        </div>
        <div className="external-link">
          <div>University of Wisconsin Foundation</div>
          <a href="https://www.supportuw.org?utm_source=advanceuw&utm_medium=referral&utm_content=footer">supportuw.org</a>
        </div>
      </div>
      <div className="footer__column">
        <WfaaFooterMenu menu={navTempLong} pageLink="/about/" />
        <WfaaFooterMenu menu={navTemp} pageLink="/about/" />
      </div>
      <div className="footer__column">
        <WfaaFooterMenu menu={navTempLong2} pageLink="/careers/" />
        <p>
          <span>Questions:</span>
          <span><a href="mailto:wfaa@supportuw.org">wfaa@supportuw.org</a></span>
        </p>
      </div>
    </div> </div>
    <div className="footer--bottom">
      <Copyright />
      <ul className="footer--social">
        <li className="footer--icon"><img className="iconImg" src={IconFB} alt="" /></li>
        <li className="footer--icon"><img className="iconImg" src={IconTwitter} alt="" /></li>
        <li className="footer--icon"><img className="iconImg" src={IconInsta} alt="" /></li>
        <li className="footer--icon"><img className="iconImg" src={IconWeChat} alt="" /></li>
      </ul>
    </div>  
  </footer>
  )

const StyledFooter = styled(WfaaFooter)`
  font-size: ${sizes.s14};
  background-color: ${colors.bgRed};
  margin-top: 7.5em;
  color: ${colors.bgWhite};

  .footer--inner {
    max-width: 900px;
    margin: 0 auto;
    padding: ${sizes.s48} ${sizes.s48} 0; 
  }
  .footer--border {
    border-bottom: 1px solid ${colors.bgWhite};
    width: 100%;
    margin: 0 auto;
    max-width: 400px;
    @media screen and ${breakpoints.tablet} {
      width: auto;
      max-width: 900px;
      display: flex;
      justify-content: space-around;
      padding-bottom: ${sizes.s58};
      }
  }
  }
  .footer__column {
    flex-grow: 1;
    width: 100%;
    margin: 0 auto ${sizes.s24};
    max-width: 400px;
    @media screen and ${breakpoints.tablet} {
      width: auto;
      max-width: auto;
      margin-bottom: 0px;
    }
    &.footer__column--first {
      border-bottom: 1px solid ${colors.bgWhite};
      @media screen and ${breakpoints.tablet} {
        border-bottom: none;
        flex-grow: 2;
      }
    }
    &:last-child {
      margin-bottom: 0;
      @media screen and ${breakpoints.tablet} {
        border-bottom: none;
      }
    }
  }
  .footer-menu__title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${sizes.s14};
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
    margin: 0;
    margin-bottom: ${sizes.s20};
  }
  li {
    list-style-type: none;
    margin: 0;
    padding-bottom: 4px;
    line-height: ${sizes.s18};
    font-size: ${sizes.s14};
    
  }
  a {
    text-decoration: none;
    color: ${colors.bgWhite};
  }
  
  .external-link {
    font-weight: bold;
    margin-bottom: ${sizes.s24};
    line-height: ${sizes.s16};
    &:last-child {
      @media screen and ${breakpoints.tablet} {
        margin-bottom: 0;
      }
    }
  }

  .footer--bottom{
    max-width: 900px;
    margin: 0 auto;
    display: flex;
  }

  .footer--social {
    display: flex;
    margin-top: ${sizes.s24};
    .footer--icon{
      width: ${sizes.s22};
      height: ${sizes.s22};
      margin: ${sizes.s9};
    }
  }
  
`


export default StyledFooter

