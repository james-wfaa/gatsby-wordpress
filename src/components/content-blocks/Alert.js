import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { sizes, breakpoints, fonts, colors } from '../css-variables'
import Cookies from "js-cookie";

  const Alert = ({alertText, marketingInterruptorText, updateHeight}) => {

    const [cookieStatus, setCookieStatus] = useState(false);
    const [marketingCookieStatus, setMarketingCookieStatus] = useState(false);
    
    const handleAlertClose = (type) => {
      //var inTwoMinutes = new Date(new Date().getTime() + 2 * 60 * 1000); //for troubleshooting
      if(type === 'alert'){
        Cookies.set('alert', 'hide', {expires: 1});
        setCookieStatus(true)
      } else if(type === 'marketing'){
        Cookies.set('marketingAlert', 'hide', {expires: 1});
        setMarketingCookieStatus(true)
      }
    }

    //initial check for cookie
    useEffect(() => {
      const checkForCookie = Cookies.get('alert')
      const checkForMarketingCookie = Cookies.get('marketingAlert')
      if(checkForCookie === undefined){
        setCookieStatus(false)
      } else if (checkForCookie !== undefined){
        setCookieStatus(true)
      }
      if (checkForMarketingCookie === undefined){
        setMarketingCookieStatus(false)
      } else if (checkForMarketingCookie !== undefined){
        setMarketingCookieStatus(true)
      } 
    }, []);
    //update height when alert status changes
    useEffect(() => {
      let height =  document.getElementById('alert') ? document.getElementById('alert').clientHeight : 0
      updateHeight(height)
    }, [cookieStatus, marketingCookieStatus]);
    
    return (
      alertText && !cookieStatus? 
      <StyledAlert id="alert">
        <div className="alertContentWrap">
          <div className="alertcontent" dangerouslySetInnerHTML={{__html: alertText}}></div>
          <div className="closeAlertBtn" onClick={() => handleAlertClose('alert')}>
            <p className="hoverText">Dismiss for 24 hours</p>
          </div>
        </div>
      </StyledAlert> : 
      marketingInterruptorText && !marketingCookieStatus ? 
      <StyledMarketingInterruptor id="alert">
        <div className="alertContentWrap">
          <div className="alertcontent" dangerouslySetInnerHTML={{__html: marketingInterruptorText}}></div>
          <div className="closeAlertBtn" onClick={() => handleAlertClose('marketing')}>
            <p className="hoverText">Dismiss for 24 hours</p>
          </div>
        </div>
      </StyledMarketingInterruptor> : null
    )
  };
  
  export default Alert;

  const StyledAlert = styled.div`
  width: 100%;
  background-color: #FFE691;
  padding: ${sizes.s24} 0;
  position: absolute;
  top: 86px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 4px;
  z-index: 10;
  .alertContentWrap{
    width: 88%;
    margin: 0 auto;
    max-width: 1080px;
    position: relative;
  }
  .alertcontent{
    padding-right: 32px;
  }
  a{
    color: #C5050C;
  }
  p{
    margin: 0;
    font-size: ${sizes.s18};
    line-height: ${sizes.s26};
  }
  @media screen and ${breakpoints.tabletS} {
    top: 118px;
    .alertContentWrap{
      width: 90%;
    }
    .alertcontent{
      padding-right: 48px;
    }
  }
  .closeAlertBtn{
    width: 24px;
    height: 24px;
    border: 1px solid ${colors.buttonRed};
    border-radius: 50%;
    background-color: white;
    top: 2px;
    right: 0;
    position:absolute;
    :hover{
      cursor: pointer;
    }
    :hover .hoverText{
      display:block;
    }
    :before{
      content: '';
      -webkit-transform: rotate(-45deg) translate(-8.5px,13px);
      -ms-transform: rotate(-45deg) translate(-8.5px,13px);
      transform: rotate(-45deg) translate(-8.5px,13px);
      width: 16px;
      height: 1px;
      background-color: ${colors.buttonRed};
      position: absolute;
      top: -5px;
      left: 0px;
    }
    :after{
      content: '';
      -webkit-transform: rotate(45deg) translate(-8px,-13px);
      -ms-transform: rotate(45deg) translate(-8px,-13px);
      transform: rotate(45deg) translate(-8px,-13px);
      width: 16px;
      height: 1px;
      background-color: ${colors.buttonRed};
      position: absolute;
      bottom:-4px;
      left:0px;
    }
    .hoverText{
      font-size: 16px;
      color: ${colors.badgerRed};
      line-height: 16px;
      width: max-content;
      top: -38px;
      position: absolute;
      right: -6px;
      display:none;
      background-color: white;
      padding: 5px 7px;
      box-shadow: rgba(0, 0, 0, 0.25) 0 1px 5px;
      :after {
        content: "";
        display: inline-block !important;
        width: 0;
        height: 0;
        border-left: 6px solid white;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        vertical-align: middle;
        transform: rotate(90deg);
        bottom: -9px;
        position: absolute;
        right: 12px;
      }
    }
  }
`
const StyledMarketingInterruptor = styled.div`
  width: 100%;
  padding: ${sizes.s32} 0;
  position:absolute;
  top: 86px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 4px;
  z-index: 10;
  .alertContentWrap{
    width: 88%;
    margin: 0 auto;
    max-width: 1080px;
    position: relative;
  }
  .alertcontent{
    padding-right: 32px;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0 8px 24px 0;
    padding:0;
    color:#C5050C;
    font-size: ${sizes.s24};
    line-height: ${sizes.s30};
    font-family: ${fonts.eaves};
    font-style: italic;
    font-weight: 900;
  }
  background-color: #F3F3F3;
  p{
    margin: 0;
    font-size: ${sizes.s18};
    line-height: ${sizes.s26};
    color: #3C3C3C;
  }
  a{
    color:#C5050C;
  }
  @media screen and ${breakpoints.tabletS} {
    top: 118px;
    .alertContentWrap{
      width: 90%;
    }
    .alertcontent{
      padding-right: 48px;
    }
    h1,h2,h3,h4,h5,h6{
      font-size: ${sizes.s36};
      line-height: ${sizes.s42};
    }
    p{
      margin: 0;
      font-size: ${sizes.s26};
      line-height: ${sizes.s36};
      color: #3C3C3C;
    }
  }
  .closeAlertBtn{
      width: 24px;
      height: 24px;
      border: 1px solid ${colors.buttonRed};
      border-radius: 50%;
      background-color: white;
      top: 0;
      right: 0;
      position:absolute;
      :hover{
        cursor: pointer;
      }
      :hover .hoverText{
        display:block;
      }
      :before{
        content: '';
        -webkit-transform: rotate(-45deg) translate(-8.5px,13px);
        -ms-transform: rotate(-45deg) translate(-8.5px,13px);
        transform: rotate(-45deg) translate(-8.5px,13px);
        width: 16px;
        height: 1px;
        background-color: ${colors.buttonRed};
        position: absolute;
        top: -5px;
        left: 0px;
      }
      :after{
        content: '';
        -webkit-transform: rotate(45deg) translate(-8px,-13px);
        -ms-transform: rotate(45deg) translate(-8px,-13px);
        transform: rotate(45deg) translate(-8px,-13px);
        width: 16px;
        height: 1px;
        background-color: ${colors.buttonRed};
        position: absolute;
        bottom:-4px;
        left:0px;
      }
      .hoverText{
        font-size: 16px;
        color: ${colors.badgerRed};
        line-height: 16px;
        width: max-content;
        top: -38px;
        position: absolute;
        right: -6px;
        display:none;
        background-color: white;
        padding: 5px 7px;
        box-shadow: rgba(0, 0, 0, 0.25) 0 1px 5px;
        :after {
          content: "";
          display: inline-block !important;
          width: 0;
          height: 0;
          border-left: 6px solid white;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          vertical-align: middle;
          transform: rotate(90deg);
          bottom: -9px;
          position: absolute;
          right: 12px;
        }
      }
    }
`
