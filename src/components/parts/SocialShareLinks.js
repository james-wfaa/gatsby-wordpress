import React from "react"
import propTypes from "prop-types";
import styled from 'styled-components'
import { colors, breakpoints, sizes } from '../css-variables'
import TiSocialTwitter from "../../svg/uwa__twitter_white_24x24.inline.svg";
import TiSocialFacebook from "../../svg/uwa__facebook_white_24x24.inline.svg";
import {AiFillMail} from "react-icons/ai";
import { ShareBlockStandard, ShareButtonIconOnly } from "react-custom-share";
import { css } from "emotion";


const SocialShareLinks = props => {
    const { className, url, title, excerpt, text } = props;

    const customStyles = css`
    padding: 0;
    @media screen and ${breakpoints.laptopS} {
        margin: 40px 0px 88px 0px;
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
          { network: "Facebook", icon: TiSocialFacebook },
          { network: "Twitter", icon: TiSocialTwitter },
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