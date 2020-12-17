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
    TwitterIcon
  } from "react-share";

const SocialShareLinks = props => {
    const { className, url, title, excerpt, text } = props;

    const customStyles = css`
    padding: 0;
    @media screen and ${breakpoints.mobileZero} {
        margin: 0px 10px 48px 10px;
        width: 24px;
    }
    &:hover{
        background: none;
        box-shadow: none;
        
        svg{
            path{
                fill: ${colors.toneRed};
            }
        }

    }
        svg{
            g{
                clip-path: none;
            }

            path{
                fill: ${colors.bgRed};
            }
        }
    `;

    const shareBlockProps = {
        url: url,
        button: ShareButtonIconOnly,
        buttons: [
          { network: "Twitter", icon: TiSocialTwitter },
          { network: "Facebook", icon: FaFacebookF },
          { network: "Email", icon: AiFillMail },
        ],
        text: title,
        longtext: excerpt,
        buttonClassName: customStyles
      };
      
    return (
        <div className = {className}>
            { text && (
                <div className="socialText">{text}</div>
            )}
            <ShareBlockStandard {...shareBlockProps} />
            <FacebookShareButton quote={title} url={url}>
                <FacebookIcon size={32} />
            </FacebookShareButton>

            <TwitterShareButton title={title} url={url}>
                <TwitterIcon size={32}/>
          </TwitterShareButton>
        </div>
    )
}

SocialShareLinks.propTypes = {
    url: propTypes.string,
    title: propTypes.string,
    excerpt: propTypes.string
  };
  
  SocialShareLinks.defaultProps = {
    url: "https://mywebsite.com/page-to-share/",
    title: "Default value of title",
    excerpt: "Default value of excerpt"
  };
  
const StyledSocialShareLinks = styled(SocialShareLinks)
`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media screen and ${breakpoints.tabletL} {
        align-items: flex-start;
        justify-content: flex-start;
        button:first-child{
            margin-left: 0px;
        }
    
    }
    .socialText{
        font-size: ${sizes.s16};
        color: ${colors.toneRed};
        font-weight: bold;
        line-height: ${sizes.s26};
        margin-top: 5px;
        @media screen and ${breakpoints.laptopS} {
            margin: 40px 0px 80px 0px;
        }
    }
`

export default StyledSocialShareLinks