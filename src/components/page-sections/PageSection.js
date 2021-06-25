import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'
import BackgroundImage from 'gatsby-background-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageSectionHeader from '../parts/PageSectionHeader'
import PageSectionButtons from '../parts/PageSectionButtons'
import FbIcon from '../../svg/fb_icon_gray.svg'
import IgIcon from '../../svg/instagram_icon_gray.svg'
import LiIcon from '../../svg/linkedin_icon_gray.svg'
import TwIcon from '../../svg/twitter_icon_gray.svg'
import WcIcon from '../../svg/wechat_icon_gray.svg'



const PageSection = ({
    className,
    id,
    preheading,
    heading,
    headingAlt,
    headingCompact,
    leftAlign,
    pageTitle,
    groupPage,
    withSocial,
    plainText,
    centered, // a centered-content page section e.g. Product Page or Aggregate Page
    feature, // restores full top padding when there's no title
    popOut,
    excerpt,
    buttons,
    buttonsAlt,
    buttonsCompact,
    backgroundColor,
    alt,
    topBorder,
    bgImage,
    divider,
    fromBlocks,
    children,
    stagger,
    desktopOnly,
    onlyChild,
    formRefresh, //for updateInfo form
    defaultPage // one page section with no top padding
 }) => {

    const background =  typeof bgImage !== "undefined" && bgImage !== null
    const bgClass = (background) ? 'withBg' : ''
    const desktopOnlyClass = (desktopOnly) ? 'desktopOnly' : ''
    const classesList = alt ? `${className} ${className}--alt` : className
    const altClass = alt ? 'alt' : ''
    const plainTextContent = plainText ? ` plaintext` : ''
    const topBorderClass = topBorder ? 'topborder' : ''
    const onlyChildClass = onlyChild ? ' onlychild' : ''
    const hasPreHeading = preheading && !heading ?  ' hasPreHeading' : ''
    const hasNoHeading = !preheading && !heading ? ' hasNoHeading' : ''
    const featureClass = feature ? ' feature' : ''
    const popClass = popOut ? `${className}__popOut` : ''
    const staggerClass = (stagger) ? ' stagger' : ''
    const defaultClass = (defaultPage) ? ' defaultClass' : ''
    const dividerClass = (divider) ? ' divider' : ''
    const centeredContentClass = (centered) ? ' centered' : ''

    //console.log(bgImage)
    const backgroundImage = getImage(bgImage)
    //console.log(backgroundImage)

    return (
        <div id={id} className={`${className} ${staggerClass} ${altClass} ${topBorderClass} ${desktopOnlyClass}${onlyChildClass}${hasPreHeading}${hasNoHeading}${featureClass}${defaultClass} ${bgClass}`}  >
            { ! background &&  (
            <div className={`${className}__innerwrap   ${popClass}${dividerClass}` }>
                { preheading && (
                <div className={`${className}__preheading`}>{preheading}</div>
            )}
            { heading && (
                <PageSectionHeader heading={heading} headingAlt={headingAlt} pageTitle={pageTitle} groupPage={groupPage} withSocial={withSocial} excerpt={excerpt} headingCompact={headingCompact} fromBlocks={fromBlocks} leftAlign={leftAlign} />
            )}
            { withSocial && (
                <StyledSocialIcons data={withSocial} />
            )}
            { excerpt && !formRefresh && (
                <div className="sectionexcerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
            )}
            { formRefresh && excerpt && (
                <div className="sectionexcerpt">
                    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
                    <p>If you would like to provide additional information updates, please <span className="reload-form-btn red" onClick={() => window.location.reload()}>restart this form</span>.</p>
                    <p>On, Wisconsin!</p>
                </div>
            )}
            <div className={`content ${plainTextContent} ${centeredContentClass}`}>
                {children}
            </div>
            { buttons && (<PageSectionButtons buttons={buttons} buttonsAlt={buttonsAlt} compact={buttonsCompact} />
            )}
            </div>

        )}
        { background && backgroundImage && (
            <GatsbyImage image={backgroundImage} alt="" style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
                }}/>
        )
        }
        { background && (
            <div className={`${classesList} ${className}--bgimage`} style={{
                gridArea: "1/1",
                position: "relative",
                placeItems: "center",
                display: "grid",
              }}>
                { heading && (
                <PageSectionHeader heading={heading} pageTitle={pageTitle} withSocial={withSocial} bgimage />
                )}
                { withSocial && (
                    <StyledSocialIcons data={withSocial} />
                )}
                { excerpt && (
                    <div className={`sectionexcerpt ${className}__excerpt ${className}__excerpt--bgimage`}  dangerouslySetInnerHTML={{ __html: excerpt }} />
                )}
                <div className={`content content--bgimage`}>
                    {children}
                </div>
                { buttons && (<PageSectionButtons buttons={buttons} bgimage buttonsAlt={buttonsAlt}/>
                )}
                </div>
        )}

        </div>
    )
}
const SocialIcons = ({ className, data }) => {
    return (
      <ul className={className}>
        { data?.chapterDetails?.csFacebook && (
          <li><a className="fb" target="_blank" title={`${data.title} Facebook Page`} href={data.chapterDetails.csFacebook}></a></li>
        )}
        { data?.chapterDetails?.csTwitter && (
          <li><a className="tw" target="_blank" title={`${data.title} Twitter Page`} href={`https://twitter.com/${data.chapterDetails.csTwitter}`}></a></li>
        )}
        { data?.chapterDetails?.csInstagram && (
          <li><a className="ig" target="_blank" title={`${data.title}  Instagram Page`} href={`https://instagram.com/${data.chapterDetails.csInstagram}`}></a></li>
        )}
        { data?.chapterDetails?.csLinkedin && (
          <li><a className="li" target="_blank" title={`${data.title}  LinkedIn Page`} href={data.chapterDetails.csLinkedin}></a></li>
        )}
        { data?.chapterDetails?.csWechat && (
          <li><a className="wc" target="_blank" title={`${data.title}  WeChat Page`} href={data.chapterDetails.csWechat}></a></li>
        )}
         { data?.chapterDetails?.csSnapchat && (
          <li><a className="sc" title={`${data.title}  SnapChat Page`} href={data.chapterDetails.csSnapchat}></a></li>
        )}
    </ul>
    )
  }
  const StyledSocialIcons = styled(SocialIcons)`
    display: flex;
    justify-content: center;
    list-style-type: none;
    max-width: 375px;
    margin: 0 auto ${sizes.s32};
    li {
      display: block;
      width: ${sizes.s28};
      height: ${sizes.s28};
      margin: 0 ${sizes.s24} 0 0;

      a {
          display: block;
          width: ${sizes.s28};
          height: ${sizes.s28};
          background-color: ${colors.badgerRed};
          &:hover {
              transform: scale(1.1);
          }
          &:active {
            transform: scale(1);
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
  `

const StyledPageSection = styled(PageSection)`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : null};
    &.desktopOnly {
        display: none;
        @media screen and ${breakpoints.laptopS} {
           display: block;
        }
    }
    position: relative;
    margin: 0 auto;
    text-align: center;
    padding-top: 58px;
    padding-bottom: 58px;
    &:last-child {
        padding-bottom: 88px;
    }
    &__innerwrap.divider{
        padding-left:56px;
        border-left: 6px solid #F3F3F3;
    }
    @media screen and ${breakpoints.tabletS} {
        padding-top: 88px;
        padding-bottom: 88px;
        &:last-child {
            padding-bottom: 128px;
        }
        &.onlychild {
            &:last-child {
                padding-bottom: 88px;
            }
        }

    }
    &.defaultClass {
        padding-top: 0;
        @media screen and ${breakpoints.laptopS} {
            width: 712px;
        }
    }

    &.stagger:nth-child(even) {
        background-color: ${colors.bgActiveGrey};
    }
    &.alt {
        background-color: ${colors.bgActiveGrey};
    }
    &.withBg {
        padding-top: 0;
        padding-bottom: 0;
        display: grid;
    }
    &.topborder {
        border-top: ${sizes.s36} solid ${colors.sectionBorder};
    }
    .sectionexcerpt {
        a {
            color: ${colors.bgRed}
        }
    }
    &.leftAlign {
        text-align: left;

    }
    &.hasPreHeading {
        padding-top: 0;
    }
    &.hasNoHeading {
        padding-top: 58px;
        &.feature {
            padding-top: 88px;
        }
    }

    &--addPad {
        padding-bottom: 116px;
    }
    &__popOut{
        position: relative;
        top: -58px;
        padding-top: 0;
        margin-bottom: -58px;
    }



    &--bgimage {
        /*background-color: rgba(0, 0, 0, 0.3) !important; */
        &:before,
        &:after {
            /*background-color: rgba(0, 0, 0, 0.3) !important;*/
        }
        &:before {
            z-index: 0;
        }
    }

    &__preheading {
        text-transform: uppercase;
        font-size: ${sizes.s18};
        line-height: ${sizes.s24};
        font-weight: bold;
        padding: 58px 0;
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s20};
        }
    }


    .sectionexcerpt {
        font-size: ${sizes.s24};
        line-height: ${sizes.s36};
        max-width: 896px;
        margin: 0 auto;
        margin-bottom: ${sizes.s32};
        padding: 0 ${sizes.s36};

        p:last-child {
            margin-bottom: 0;
        }
        @media screen and ${breakpoints.laptopS} {
           padding: 0;
           font-size: ${sizes.s26};
        }
        &--bgimage {
            color: ${colors.bgWhite} !important;

        }
    }
    /* some wordpress content pieces */

    .groupPage {
        > p {
            min-width: 300px;
            width: 80%;
            max-width: 712px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            padding: 0 ${sizes.s16};
        }
    }

    .content.centered {
        > p,
        > .core-heading,
        > .core-image,
        > .core-freeform,
        > .core-paragraph,
        > .core-list,
        > .core-table,
        > .core-buttons,
        > .core-columns,
        > .core-separator,
        > .embed-block,
        > * > .embed-block,
        > .StaffSearch,
        > .gravityforms-form,
        > .acf-accordion-navigation,
        > .acf-staff-search,
        > .wp-block-separator,
        > .wp-block-embed {
            min-width: 300px;
            width: 80%;
            max-width: 712px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
        }

        > .core-buttons {
            display: flex;
            justify-content: center;
            flex-direction: column;

            @media screen and ${breakpoints.tabletS} {
                flex-direction: row;
            }
        }
        > div {
            margin: 0 auto;
        }
        @media screen and ${breakpoints.tabletS} {
            > .cardset {
                width: 80%;
                max-width: 1080px;
            }
        }
        

    }


`


PageSection.propTypes = {
    preHeading: PropTypes.string,
    heading: PropTypes.string,
    postHeading: PropTypes.string,
    excerpt: PropTypes.string,
    content: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string,
    })
    )
  }

  export default StyledPageSection
