import React from 'react'
import styled, { css } from 'styled-components'
import { sizes, breakpoints, mixins, colors } from '../css-variables'
import BackgroundImage from 'gatsby-background-image'
import IntroPageSection from "./IntroPageSection"
import VimeoVideo from '../content-modules/VimeoVideo'
import HeroCarousel from '../page-sections/HeroCarousel'
import downCaret from "../../../static/down-carat@2x.png"

import { useWindowSize } from "../hooks"


const HeroIntroSection = ({
  className,
  videoURL,
  variant,
  heroSize,
  heroImage,
  mobileHeroImage,
  heroHeading,
  redHeading,
  excerpt,
  buttons,
  carouselItems,
  productPage,
  imageWidth
}) => {
  const { width } = useWindowSize();
  let size
  if (heroSize === 'jumbo') {
    size = width > 655 ? "calc(100vh - 118px)" : "calc(100vh - 86px)"
  }

  let imageWidthClass = imageWidth ? 'constrainWidth' : null
  let imageHeightClass = imageWidth ? ' constrainHeight' : null

  const background = typeof heroImage !== "undefined" && heroImage !== null
  const mobileHeroImageCheck = typeof mobileHeroImage !== "undefined" && mobileHeroImage !== null

  let classes = className

  let heroClasses = `${className}__hero`

  let variantObject = {
    background_color: colors.bgRed,
    color: colors.titleWhite,
    scroll_color: colors.bgRed,
    text_align: `center`
  }
  switch (variant) {
    case 'white':
      variantObject['background_color'] = colors.bgWhite;
      variantObject['color'] = colors.navMenuBlack;
      variantObject["scroll_color"] = "#9E9E9E";
      variantObject["text_align"] = `left`
      break;
    default:
      break;
  }

  switch (heroSize) {
    case "jumbo":
      heroClasses = `${className}__hero ${className}__hero--jumbo`
      break
    case "slim":
      heroClasses = `${className}__hero ${className}__hero--slim`
      break
    default:
      break
  }

  const headingClasses =
    heroSize === "jumbo"
      ? `heading heading--jumbo`
      : `heading`

  let redboxClass = background
    ? `redbox redbox--background`
    : `redbox`
  let downscrollClass = `${className}__downscroll downscroll`
  if (heroSize !== "jumbo") {
    redboxClass += ` redbox--slim`
    downscrollClass += ` ${className}__downscroll--slim downscroll`
    classes += ` ${className}--slim`
  }

  let downscrollStyle = css`
    margin-top: ${heroSize === "jumbo" && background ? "-11px" : 0};
    &:before {
      background-color: ${variantObject.scroll_color};
    }
  `
  if (!heroImage){
    classes += ' noHero'
  }

  return (
    <div className={classes}>
      {videoURL && width > 656 ? (
        <VimeoVideo videoURL={videoURL} heroSize={heroSize} />
      ) : mobileHeroImageCheck && mobileHeroImage?.childImageSharp?.fluid ? (
        <div style={{height: `${size}`}}>
        <BackgroundImage
          Tag="div"
          className={heroClasses}
          fluid={mobileHeroImage.childImageSharp.fluid}
          preserveStackingContext
        >
          {heroHeading && (
            <div className="wrapper">
              <div
                className={headingClasses}
                dangerouslySetInnerHTML={{ __html: heroHeading }}
              />
            </div>
          )}
        </BackgroundImage>
        </div>
      ) : ( background && heroImage?.childImageSharp?.fluid ) ? (
        <div style={{height: `${size}`}}>
        <BackgroundImage
          Tag="div"
          className={heroClasses}
          fluid={heroImage.childImageSharp.fluid}
          preserveStackingContext
        >
          {heroHeading && (
            <div className="wrapper">
              <div
                className={headingClasses}
                dangerouslySetInnerHTML={{ __html: heroHeading }}
              />
            </div>
          )}
        </BackgroundImage>
        </div>
      ) :
      carouselItems?.length > 0 ?
        <>
          <HeroCarousel carouselItems={carouselItems} width={width} />
          {heroHeading && (
            <div className="wrapper">
              <div
                className={headingClasses}
                dangerouslySetInnerHTML={{ __html: heroHeading }}
              />
            </div>
          )}
        </>
      : null}
      {productPage 
        ? <div className="standardProductLabel"></div> 
        : (heroSize === 'slim') 
          ? <div style={{ position: `relative` }}  className={imageWidthClass}>
              <a
                className={downscrollClass}
                href={`#${className}__downscroll`}
                title="Scroll down to content"
                css={downscrollStyle}
              >
                <div className="downscroll_after" style={{backgroundColor: variantObject.background_color}}></div>
              </a>
            </div> 
          : <div style={{ position: `relative` }}>
              <a
                className={downscrollClass}
                href={`#${className}__downscroll`}
                title="Scroll down to content"
                css={downscrollStyle}
              >
                <div className="downscroll_main">down</div>
                <div className="downscroll_after" style={{backgroundColor: variantObject.background_color}}></div>
              </a>
            </div> 
      }

      <div className={redboxClass}>
        <div className="downanchor" id={`${className}__downscroll`}>
          &nbsp;
        </div>
        <IntroPageSection
          excerpt={excerpt}
          heading={redHeading}
          variantObject={variantObject}
          headingAlt
          headingCompact
          buttons={buttons}
          buttonsAlt
          buttonsCompact
          productPage={productPage}
        />
      </div>
    </div>
  )
}

const StyledHeroIntroSection = styled(HeroIntroSection)`
  position: relative;
  scroll-behavior: smooth;
  margin-bottom: -80px;
  z-index: 4;
  .downscroll_after {
    @media screen and ${breakpoints.tabletS} {
      position: absolute;
      top: 0;
      right: -45px;
      height: 80px;
      width: 222px;
      z-index: 4;
      transform: skew(135deg);
      background-image: none;
    }
  }
  &--slim {
    margin-bottom: -40px;
  }

  .downanchor {
    display: block;
    width: 1px;
    height: 0;
  }
  &__hero {
    min-height: 375px;
    @media screen and ${breakpoints.tabletS} {
      min-height: 500px;
    }
    @media screen and ${breakpoints.laptopS} {
      min-height: 720px;
      height: auto;
    }
    &--jumbo {
      min-height: 696px;
      @media screen and ${breakpoints.tabletS} {
        min-height: 800px;
      }
      @media screen and ${breakpoints.laptopS} {
        min-height: 1097px;
      }
    }
    &--slim {
      min-height: 210px;
      @media screen and ${breakpoints.tabletS} {
        min-height: 320px;
      }
      @media screen and ${breakpoints.laptopS} {
        min-height: 480px;
      }
    }
    background-blend-mode: multiply;
  }
  &__downscroll {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: -80px;
    left: 0;
    height: 80px;
    width: 100%;
    background-color: transparent;
    background-blend-mode: multiply;
    color: ${colors.titleWhite};
    text-align: center;
    text-decoration: none;

    &:hover {
      &:before {
        opacity: 0.75;
      }
    }

    &:before {
      position: absolute;
      top: 0px;
      left: 0;
      height: 80px;
      width: 100%;
      opacity: 0.7;
      content: "";
      mix-blend-mode: multiply;
    }

    @media screen and ${breakpoints.tabletS} {
      &:before {
        width: calc(100% - 122px);
      }
    }

    .downscroll_main {
      background-image: url(${downCaret});
      z-index: 3;
      width: 50px;
      height: 15px;
      margin: 0 auto;
      color: transparent;
      background-size: cover;
    }
    &--slim {
      height: 40px;
      top: -40px;
      div {
        display: none;
        @media screen and ${breakpoints.tabletS} {
          display: block;
        }
      }
      &:after {
        position: absolute;
        top: 0;
        right: -45px;
        height: 40px;
        width: 161px;
        content: "";
        transform: skew(135deg);
        @media screen and ${breakpoints.tabletS} {
          width: 222px;
        }
      }
    }
  }
  .heading {
    ${mixins.introHeading}
  }
  .heading--jumbo {
    top: calc(50% - 70px);
    @media screen and ${breakpoints.tabletS} {
      top: calc(50% - 100px) !important;
    }
  }

  .redbox {
    position: relative;
    &--background {
      top: -80px;
    }
    &--slim {
      top: -40px;
    }
    .excerpt {
      font-size: ${sizes.s26};
      line-height: ${sizes.s36};
      @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s32};
        line-height: ${sizes.s50};
      }
    }
  }
  .standardProductLabel{
      position:relative;
      width:100%;
      height: 40px;
      &:before{
        position: absolute;
        top: -42px;
        height: 48px;
        width: 100%;
        content: "";
        mix-blend-mode: multiply;
        background-color: #c5050c;
      }
      &:after {
        position: absolute;
        content: '';
        top: -22px;
        left:calc(50% - 7px);
        height: 48px;
        width: 14px;
        z-index: 1;
        border-left: 2px solid ${colors.bgWhite};
        border-right: 2px solid ${colors.bgWhite};
        transform: skew(135deg);
      }
    }
  }
  &.noHero{
    margin-top: 80px;
    div.standardProductLabel:before{
      top: -81px;
      height:81px;
    }
  }
  .constrainWidth{
    max-width: 718px;
    margin: 0 auto;
    div{
      @media screen and ${breakpoints.laptopS} {
        background-position: center bottom !important;
        background-size: contain !important;
      }
      &:before{
        @media screen and ${breakpoints.laptopS} {
          background-position: center bottom !important;
          background-size: contain !important;
        }
      }
      &:after{
        @media screen and ${breakpoints.laptopS} {
          background-position: center bottom !important;
          background-size: contain !important;
        }
      }
    }
    .downscroll {
      &:before {
        display: none;
      }
      
      &--slim {
        display: none;
      }
    }
    .downscroll_after {
      display: none;
    }
  }
  .constrainHeight{
    div{
        @media screen and ${breakpoints.laptopS} {
          min-height: 300px;
        }
      }
    }
  }
`

export default StyledHeroIntroSection