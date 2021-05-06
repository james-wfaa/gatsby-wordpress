import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints, colors, fonts } from '../css-variables'


const StyledSponsorAd = styled.div`
    max-width: 1080px;
    width: 254px;
    margin: 0 auto ${sizes.s88};
    background-color: ${colors.sponsorAdBG};
    padding: 16px;

    @media screen and ${breakpoints.tabletS} {
      width: 536px;
      padding: 32px;
      padding-bottom: 48px;
      margin-bottom: 128px;
    }
    @media screen and ${breakpoints.laptopS} {
        width: 1080px;
        padding: 0px;
    }

    :hover{
      background-color: ${colors.disabledGrey};
      box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
      a{
        .AdTitle{
          text-decoration: underline;
        }
      }
    }

    a {
      color: ${colors.titleWhite};
      text-decoration: none;
      text-align: center;

      .contentWrap{
        @media screen and ${breakpoints.tabletS} {
          margin-bottom: 48px;
        }
        @media screen and ${breakpoints.laptopS} {
          padding: 32px 184px 0px 184px;
        }
      }
      
      .AdTitle{
        font-family: ${fonts.eaves};
        font-weight: bold;
        font-style: italic;
        font-size: ${sizes.s32};
        line-height: ${sizes.s38};
        padding-bottom: 24px;
        @media screen and ${breakpoints.tabletS} {
          padding-right: 50px;
          padding-left: 50px;
          font-size: ${sizes.s36};
          line-height: ${sizes.s42};   
        } 
        @media screen and ${breakpoints.laptopS} {
          padding: 0px;
          padding-bottom: 32px;
        }
      }
      .AdContent{
        p{
          font-size: ${sizes.s18}
          line-height: ${sizes.s26};
          @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s26}
            line-height: ${sizes.s36};
          }
        }
        p:last-child{
          margin-bottom: 0px;
        }
      }
      .LogoList{
        display: flex;
        flex-direction: column;
        position: relative;

        @media screen and ${breakpoints.tabletS} {
          flex-direction: row;
        }  

        @media screen and ${breakpoints.laptopS} {
          padding-bottom: 48px;
        }
        
        .LogoColumn{
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          position: relative;
          @media screen and ${breakpoints.laptopS} {
            flex-direction: row;
          }  

          .LogoWrap{
            padding-top: 32px;
            padding-bottom: 32px;
            border-bottom: 1px solid  ${colors.titleWhite}; 
            @media screen and ${breakpoints.laptopS} {
              flex-grow: 1;
              border-bottom: none; 
              border-right: 1px solid  ${colors.titleWhite}; 
            }  
  
            .LogoIcon{
              filter: invert(100%);
              width: 210px;  
              height: 102px; 
              margin: 0 auto;
            }
          }
        }

        .LogoRight{
          .LogoWrap:last-child{
            border-bottom: none; 
            border-right: none; 
          }
        }
        .LogoLeft{
          @media screen and ${breakpoints.tabletS} {
            border-right: 1px solid  ${colors.titleWhite}; 
            .LogoWrap:last-child{
              border-bottom: none; 
            }
          } 
          @media screen and ${breakpoints.laptopS} {
            border-right: none; 
          } 
        }
      }
    }

`
export default StyledSponsorAd
