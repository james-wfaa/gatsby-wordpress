import React from "react"
import styled from 'styled-components'
import { colors, breakpoints, sizes } from '../css-variables'
import { useStaticQuery, graphql } from 'gatsby'

import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
    EmailIcon
  } from "react-share";


const SocialShareLinks = props => {
    const { className, url, title, excerpt, text, event, tight = false } = props;
    const isEvent = event ? "eventShare" : "";
    const displayTight = tight ? "displayTight" : "";

    const strippedExcerpt = excerpt?.replace(/(<([^>]+)>)/gi, "")

    const { site } = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    siteUrl
                }
            }
        }
  `)
  
    const currentURL = site?.siteMetadata?.siteUrl + url

    return (
        <div className = {`${className} ${isEvent} ${displayTight}`}>
            { text && (
                <div className="socialText">{text}</div>
            )}
            <ul className="shareButtons">
                <li>
                    <FacebookShareButton quote={title} url={currentURL} target="_blank">
                        <FacebookIcon size={52} iconFillColor={colors.buttonRed} />
                    </FacebookShareButton>
                </li>

                <li>
                    <TwitterShareButton title={title} url={currentURL}>
                        <TwitterIcon size={52} iconFillColor={colors.buttonRed}/>
                    </TwitterShareButton>
                </li>

                <li>
                    <EmailShareButton subject={title} body={strippedExcerpt} url={currentURL}>
                        <EmailIcon size={52} iconFillColor={colors.buttonRed}/>
                    </EmailShareButton>
                </li>
            </ul>



        </div>
    )
}

const StyledSocialShareLinks = styled(SocialShareLinks)
`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 31px;
    @media screen and ${breakpoints.tabletS} {
        margin-bottom: 61px;
    }

    &.displayTight{
        margin-bottom: 40px;
        @media screen and ${breakpoints.tabletS} {
            margin-bottom: 20px;
        }
    }

    .socialText{
        font-size: ${sizes.s16};
        color: ${colors.toneRed};
        font-weight: bold;
        line-height: ${sizes.s26};
        margin-bottom: 7px;
    }
    .shareButtons {
        list-style-type: none;
        display: flex;
        margin: 0px;

        li{
            margin-bottom: 0px;
            button{
                :focus{
                    outline: none;
                }
            }
            :hover{
                path{
                    fill: ${colors.buttonHoverRed};
                }
            }
            :active{
                path{
                    fill: ${colors.buttonActiveGrey};
                }

            }
        }

        rect {
            display: none;
        }

    }
    &.eventShare{
        @media screen and ${breakpoints.tabletL} {
            align-items: flex-start;
            justify-content: flex-start;
            li:first-child{
                margin-left: 0px;
            }
        }
    }
`

export default StyledSocialShareLinks