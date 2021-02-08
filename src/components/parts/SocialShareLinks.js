import React from "react"
import propTypes from "prop-types";
import styled, { css }  from 'styled-components'
import { colors, breakpoints, sizes } from '../css-variables'
import TiSocialTwitter from "../../svg/uwa__twitter_white_24x24.inline.svg";
import {FaFacebookF} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import { ShareBlockStandard, ShareButtonIconOnly } from "react-custom-share";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
    EmailIcon
  } from "react-share";

const url = typeof window !== 'undefined' ? window.location.href : '';

const SocialShareLinks = props => {
    const { className, url, title, excerpt, text, link, event } = props;
    const isEvent = event ? "eventShare" : "";

    return (
        <div className = {`${className} ${isEvent}`}>
            { text && (
                <div className="socialText">{text}</div>
            )}
            <ul class="shareButtons">
                <li>
                    <FacebookShareButton quote={title} url={url} target="_blank">
                        <FacebookIcon size={52} iconFillColor={colors.buttonRed} />
                    </FacebookShareButton>
                </li>

                <li>
                    <TwitterShareButton title={title} url={url}>
                        <TwitterIcon size={52} iconFillColor={colors.buttonRed}/>
                    </TwitterShareButton>
                </li>

                <li>
                    <EmailShareButton subject={title} body={excerpt} url={url}>
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