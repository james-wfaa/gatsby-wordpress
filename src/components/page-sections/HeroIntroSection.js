import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoints, mixins, colors } from '../css-variables'
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
  heroHeading,
  redHeading,
  excerpt,
  buttons,
  carouselItems
}) => {
  const { width } = useWindowSize();
  let size
  if (heroSize === 'jumbo') {
    size = width > 655 ? "calc(100vh - 118px)" : "calc(100vh - 86px)"
  }

  const background = typeof heroImage !== "undefined" && heroImage !== null

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
    ? `${className}__redbox ${className}__redbox--background`
    : `${className}__redbox`
  let downscrollClass = `${className}__downscroll`
  if (heroSize !== "jumbo") {
    redboxClass += ` ${className}__redbox--slim`
    downscrollClass += ` ${className}__downscroll--slim`
    classes += ` ${className}--slim`
  }

  let downscrollStyle = css`
    margin-top: ${heroSize === "jumbo" && background ? "-11px" : 0};
    &:before {
      background-color: ${variantObject.scroll_color};
    }
  `

  return (
    <div className={classes}>
      {videoURL ? (
        <VimeoVideo videoURL={videoURL} heroSize={heroSize} heroHeading={heroHeading}/>
      ) : background ? (
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
      <div style={{ position: `relative` }}>
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
        />
      </div>
    </div>
  )
}

const StyledHeroIntroSection = styled(HeroIntroSection)`
  position: relative;
  scroll-behavior: smooth;
  margin-bottom: -80px;
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

  &__redbox {
    position: relative;
    &--background {
      top: -80px;
    }
    &--slim {
      top: -40px;
    }
  }
`

export default StyledHeroIntroSection