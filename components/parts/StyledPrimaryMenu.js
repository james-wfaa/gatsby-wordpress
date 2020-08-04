import styled from 'styled-components'
import { breakpoints,  sizes, colors, } from '../css-variables'
import FbIcon from "../../src/svg/fb_icon_gray.svg" // Tell webpack this JS file uses this image
import TwIcon from "../../src/svg/twitter_icon_gray.svg" // Tell webpack this JS file uses this image
import IgIcon from "../../src/svg/instagram_icon_gray.svg" // Tell webpack this JS file uses this image
import WcIcon from "../../src/svg/wechat_icon_gray.svg" // Tell webpack this JS file uses this image
import LiIcon from "../../src/svg/linkedin_icon_gray.svg" // Tell webpack this JS file uses this image


const StyledPrimaryMenu = styled.div`
.primarymenu {
    position: fixed;
    left: 0;
    height: 100%;
    width: 100%;
    background: #ffffff;
    z-index: 1031;
    visibility: hidden;
    opacity: 0;
    transition: all ease 0.35s;
    cursor: pointer;
    padding: 0;
    overflow-y: scroll;
    @media screen and ${breakpoints.tabletS} {
        padding: 0 60px;
    }
    @media screen and ${breakpoints.laptopS} {
        padding: 0 180px;
    }
    top: -100%;
    &.open {
        visibility: visible;
        opacity: 1;
        top: 84px;
        z-index: 1001;
        @media screen and ${breakpoints.tabletS} {
            top: 114px;
        }
    }
    .topNav {
        height: 80px;
    }
    .mainNav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        min-width: 320px;
        position: relative;
        height: 100%;
        
        > div {
            &:first-of-type {
                width: calc(100% - 72px);
                max-width: 299px;
                margin: 0 auto;
                @media screen and ${breakpoints.tabletS} {
                    position: relative;
                    width: 396px;
                }
            }
            &:last-of-type {
                display: none;
                width: 60%;
                @media screen and ${breakpoints.tabletS} {
                    display: block;
                }
            }
            &.opensub {
                
                position: absolute;
                width: 200%;
                left: -100%;
                @media screen and ${breakpoints.tabletS} {
                    position: relative;
                    max-width: none;
                    width: 100%;
                    left: 0;
                }
                max-width: none;

                ul.primary {
                    position: relative;
                    border-bottom: none;
                    > li {
                        &:hover {
                            background-color: transparent;
                        }
                        span {
                            display: none;
                        }
                        &.open {
                            span {
                                display: block;
                                position: absolute;
                                top: 0;
                                left: 50%;
                                padding-left: ${sizes.s16};
                                &:after {
                                    display: none;
                                }
                                @media screen and ${breakpoints.tabletS} {
                                    position: relative;
                                    max-width: none;
                                    width: 100%;
                                    left: 0;
                                    padding-left: 0;
                                }
                                &:before {
                                    position: absolute;
                                    content: '';
                                    left: -${sizes.s32};
                                    top: calc(50%  - 3px);
                                    width: 0;
                                    height: 0;
                                    border-top: 6px solid transparent;
                                    border-right: 12px solid ${colors.badgerRed};
                                    border-bottom: 6px solid transparent;
                
                                }
                            }
                        }
                    }
                    .secondary {
                        position: absolute;
                        left: 50%;
                        top: 36px;
                        width: 50%;
                        @media screen and ${breakpoints.tabletS} {

       
                            left: 0;
                            top: 36px;
                            width: 100%;
                
               
                            left: 300px;
                            padding-left: 24px;
                            height: 100%;
                            min-width: 300px;
            
                            top: 0;
                            li {
                                margin-left: ${sizes.s36};
            
                            } 
                        }
                        
                    }
                    
                   
                }
                .supplemental,
                    
                @media screen and ${breakpoints.tabletS} {
                    left: 0;
                }
            }
        }
        ul.primary > li,
        ul.secondary > li {
            
            &:hover {
                background-color: ${colors.navcardGrey};
            }
            
            
        }

    }
    
    a {
        pointer-events: all;
    }
    .primary {
        margin: 0;
        list-style-type: none;
        font-size: ${sizes.s22};
        padding-bottom: ${sizes.s24};
        border-bottom: 1px solid ${colors.navMenuBorderGrey};
        

        @media screen and ${breakpoints.tabletS} {
            position: relative;
            font-size: ${sizes.s26};
            border-right: 1px solid ${colors.navMenuBorderGrey};
        }
        li {
            width: auto;
            
            margin: 0;
            padding: ${sizes.s16} 0;
            @media screen and ${breakpoints.tabletS} {
                padding: ${sizes.s24} 0 ${sizes.s24} ${sizes.s12};
            }
            span {
                position: relative;
                &:after {
                    position: absolute;
                    content: '';
                    right: -${sizes.s32};
                    top: calc(50%  - 3px);
                    width: 0;
                    height: 0;
                    border-top: 6px solid transparent;
                    border-left: 12px solid ${colors.badgerRed};
                    border-bottom: 6px solid transparent;
    
                }

            }
            &:hover {
                color: ${colors.badgerRed};
                span {
                    &:after {
                        right: -${sizes.s42};
                    }
                }
            }
            @media screen and ${breakpoints.tabletS} {
                padding-left: ${sizes.s16};
            }
        }
        &.opensub {
            left: -200%;
        }
        

    }
    .secondary {
        display: none;
        list-style-type: none;
        margin-left: 0;
        li {
            padding: ${sizes.s16} ${sizes.s32} ${sizes.s16} ${sizes.s42};
            &.returnNav {
                display: none;
                &.opensub {
                    display: block;
                    span {
                        &:before {
                            position: absolute;
                    content: '';
                    left: -${sizes.s32};
                    top: calc(50%  - 3px);
                    width: 0;
                    height: 0;
                    border-top: 6px solid transparent;
                    border-right: 12px solid ${colors.badgerRed};
                    border-bottom: 6px solid transparent;

                        }
                        &:after {
                            display: none;
                        }
                    }

                }
            }
        }
        &.open {
            padding-left: ${sizes.s16};
            display: block;
            position: absolute;
            left: 300px;
            @media screen and ${breakpoints.tabletS} {
                
               
                left: 300px;
                padding-left: 24px;
                height: 100%;
                min-width: 300px;

                top: 0;
                li {
                    margin-left: ${sizes.s36};

                } 
            }
            
        }
        a {
            text-decoration: none;
            color: ${colors.navMenuBlack};
        }
        
    }
    .supplemental {
        list-style-type: none;
        padding: ${sizes.s32} 0;
        margin: 0;
        @media screen and ${breakpoints.tabletS} {
            padding: ${sizes.s32} 0;
            border-right: 1px solid ${colors.navMenuBorderGrey};
        }
        li {
            margin: 0;
            padding: ${sizes.s16} 0;
            @media screen and ${breakpoints.tabletS} {
                padding: ${sizes.s16} 0 ${sizes.s16} ${sizes.s16};
            }
        }
        a {
            text-decoration: none;
            color: ${colors.navMenuBlack};
            &:hover {
                color: ${colors.badgerRed};
                text-decoration: underline;
            }
            &:active {
                color: ${colors.hoverRed};
                text-decoration: underline;
            }
        }
    }
    .socialLinks {
        width: 160px;
        display: flex;
        list-style-type: none;

        margin: 0;
         
        li {
            display: block;
            width: ${sizes.s24};
            height: ${sizes.s24};
            margin: 0 ${sizes.s16} 0 0;
               
            a {
                display: block;
                width: ${sizes.s24};
                height: ${sizes.s24};
                background-color: ${colors.iconGrey};
                &:hover {
                    background-color: ${colors.buttonRed};
                }
                &.fb {
                    mask: url(${FbIcon});
                }
                &.tw {
                    mask: url(${TwIcon});
                }
                &.ig {
                    mask: url(${IgIcon});
                }
                &.wc {
                    mask: url(${WcIcon});
                }
                &.li {
                    mask: url(${LiIcon});
                }

                
            }
        }
    }
}


`
export default StyledPrimaryMenu

