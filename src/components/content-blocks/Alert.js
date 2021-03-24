import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints, fonts, colors } from '../css-variables'

  const Alert = ({alertText, marketingInterruptorText}) => {
    const handleAlertClose = () => {
      console.log('close me!')
    }

    const handleShowAlert = () => {

    }
    
    return (
      alertText ? 
      <StyledAlert id="alert" >
        <div className="alertcontent" dangerouslySetInnerHTML={{__html: alertText}}></div>
        <div className="closeAlertBtn" onClick={handleAlertClose}></div>
      </StyledAlert> : 
      marketingInterruptorText ? 
      <StyledMarketingInterruptor id="alert">
        <div className="alertcontent" dangerouslySetInnerHTML={{__html: marketingInterruptorText}}></div>
        <div className="closeAlertBtn" onClick={handleAlertClose}></div>
      </StyledMarketingInterruptor> : null
    )
  };
  
  export default Alert;

  const StyledAlert = styled.div`
  width: 100%;
  background-color: #FFE691;
  padding: ${sizes.s24};
  position: absolute;
  top: 86px;
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
    p{
      font-size: ${sizes.s26};
      line-height: ${sizes.s36};
    }
  }
`
const StyledMarketingInterruptor = styled.div`
  width: 100%;
  padding: ${sizes.s32} 0;
  position:absolute;
  top: 86px;
  .alertcontent{
    width: 88%;
    margin: 0 auto;
    padding-right: 24px;
    max-width: 1080px;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0 24px 24px 0;
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
    .alertcontent{
      padding-right: 48px;
      width: 90%;
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
      top:32px;
      right: 8%;
      position:absolute;
      :hover{
        cursor: pointer;
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
  }
`
