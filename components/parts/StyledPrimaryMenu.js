
import React from 'react'
import styled from 'styled-components'
import { breakpoints, fonts, sizes, colors, mixins } from '../css-variables'

const StyledPrimaryMenu = styled.div`
.primarymenu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #ffffff;
    z-index: 1031;
    visibility: hidden;
    opacity: 0;
    transition: all 0.35s;
    cursor: pointer;
    padding: 0;
    @media screen and ${breakpoints.tabletS} {
        padding: 0 60px;
    }
    @media screen and ${breakpoints.laptopS} {
        padding: 0 180px;
    }
    &.open {
        visibility: visible;
        opacity: 1;
    }
    .topNav {
        height: 80px;
    }
    .mainNav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        > div {
            &:first-of-type {
                width: 100%;
                
                @media screen and ${breakpoints.tabletS} {
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
        }
        ul.primary li,
        ul.secondary li {
            padding-left: ${sizes.s42};
            &:hover {
                background-color: ${colors.navcardGrey};
            }
            @media screen and ${breakpoints.tabletS} {
                padding-left: ${sizes.s16};
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

        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s26};
            border-bottom: 1px solid ${colors.navMenuBorderGrey};
            border-right: 1px solid ${colors.navMenuBorderGrey};
        }
        li {
            width: auto;
            position: relative;
            //margin-bottom: ${sizes.s32};
            margin: 0;
            padding: ${sizes.s16} 0 ${sizes.s16} ${sizes.s12};
            @media screen and ${breakpoints.tabletS} {
                //margin-bottom: ${sizes.s48};
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
            
        }
        

    }
    .secondary {
        display: none;
        list-style-type: none;
        li {
            padding: ${sizes.s16} ${sizes.s32} ${sizes.s16} ${sizes.s12};
        }
        &.open {
            display: block;
            position: absolute;
            right: -150px;
            top: 0;
            
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
            padding: ${sizes.s48} 0;
            border-right: 1px solid ${colors.navMenuBorderGrey};
        }
        li {
            margin: 0;
            //margin-bottom: ${sizes.s32};
            padding: ${sizes.s16} 0 ${sizes.s16} ${sizes.s12};
            &:last-of-type: {
                //margin-bottom: ${sizes.s48};
                padding: ${sizes.s24} 0 ${sizes.s24} ${sizes.s12};
            }
        }
        a {
            text-decoration: none;
            color: ${colors.navMenuBlack};
            &:hover {
                color: ${colors.hoverRed};
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
            width: 25%;
            padding-left: 0;
            border: 1px solid ${colors.bgActiveGrey};
            a {
                text-decoration: none;
            }
        }
    }
}


`
export default StyledPrimaryMenu

