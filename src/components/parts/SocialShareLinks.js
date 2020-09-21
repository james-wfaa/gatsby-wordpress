import React from "react"
import propTypes from "prop-types";
import { colors, sizes, breakpoints } from '../css-variables'
import TiSocialTwitter from "../../svg/uwa__twitter_white_24x24.inline.svg";
import TiSocialFacebook from "../../svg/uwa__facebook_white_24x24.inline.svg";
import {AiFillMail} from "react-icons/ai";
import { ShareBlockStandard, ShareButtonRectangle, ShareButtonIconOnly } from "react-custom-share";
import { css } from "emotion";


const SocialShareLinks = props => {
    const { url, title, excerpt } = props;

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
        <ShareBlockStandard {...shareBlockProps} />
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
  
export default SocialShareLinks