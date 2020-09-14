import React from 'react'
import styled from 'styled-components'  
import { breakpoints, sizes, fonts, colors } from '../css-variables'
import BackgroundImage from 'gatsby-background-image'
import IntroRedPageSection from './IntroRedPageSection'


const HeroIntroSection = ({className, heroSize, heroImage, heroHeading, redHeading, excerpt, buttons}) => {

    console.log(buttons)
    const background =  typeof heroImage !== "undefined" && heroImage !== null 

    let classes = className;

    let heroClasses = `${className}__hero`
    
    switch (heroSize) {
        case 'jumbo':
            heroClasses = `${className}__hero ${className}__hero--jumbo`
            break
        case 'slim':
            heroClasses = `${className}__hero ${className}__hero--slim`
            break
        default:
            break
    }
        
    const headingClasses = (heroSize === "jumbo" ) ? `${className}__heading ${className}__heading--jumbo` : `${className}__heading`

    let redboxClass = background ? `${className}__redbox ${className}__redbox--background` : `${className}__redbox`
    let downscrollClass = `${className}__downscroll`
    if (heroSize === "slim") {
        redboxClass += ` ${className}__redbox--slim`
        downscrollClass += ` ${className}__downscroll--slim`
        classes += ` ${className}--slim`
    }

    
  

    return (
        <div className={classes}>
            { background && (
            <BackgroundImage
            Tag="div"
            className={heroClasses}

            fluid={heroImage.childImageSharp.fluid}
            preserveStackingContext
             >
                { heroHeading && (
                    <div className="wrapper">
                        <div className={headingClasses} dangerouslySetInnerHTML={{ __html: heroHeading }} />
                    </div>
                )}
            </BackgroundImage>
            )
        }
            <a  className={downscrollClass} href={`#${className}__downscroll`} title="Scroll down to content"><div>down</div></a>
            <div className={redboxClass}>
                <div className="downanchor" id={`${className}__downscroll`}>&nbsp;</div>
                <IntroRedPageSection excerpt={excerpt} heading={redHeading} buttons={buttons} buttonsAlt  />
            </div>
        </div>
    )
}

const StyledHeroIntroSection = styled(HeroIntroSection)`
position: relative;
scroll-behavior: smooth;
margin-bottom: -80px;
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
        background-color: ${colors.bgRed};
        opacity: 0.7;
        z-index: -1;
    
        content: '';
    
    }
    

    @media screen and ${breakpoints.tabletS} {
        &:before {
            width: calc(100% - 122px);
        }
        &:after {
            position: absolute;
            top: 0;
            right: -45px;
            height: 80px;
            width: 222px;
            content: '';
            background-color: ${colors.bgRed} !important;
            transform: skew(135deg);
         
        
        }
        
        
     }

     div {
         background-image: url(./down-carat@2x.png);
         width: 50px;
         height: 15px;
         margin: 0 auto;
         color: transparent;
         background-size: cover;
     }
     &--slim {
        height: 40px;
        top: -40px;
        div{
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
            content: '';
            background-color: ${colors.bgRed} !important;
            transform: skew(135deg);
            @media screen and ${breakpoints.tabletS} {
                width: 222px;
            }
         
        
        }
    }

}
&__heading {
    position: absolute;
    
    width: 300px;
    left: calc(50% - 150px);
    top: calc(50% - 50px);
    font-style: italic;
   
    color: white;
    font-size: ${sizes.s32};
    text-align: center;
    text-shadow: 10px 10px 30px rgba(0,0,0,0.5);
    span {
        font-weight: bold;
        font-family: ${fonts.eaves};
        font-size: ${sizes.s52};
     }
    @media screen and ${breakpoints.tabletS} {
        width: 450px;
        left: calc(50% - 225px);
        font-size: ${sizes.s60};
        span {
            font-size: ${sizes.s100};
        }
     }
    @media screen and ${breakpoints.laptopS} {
        width: 600px;
        left: calc(50% - 300px);
        top: calc(50% - 50px);
        &--jumbo {
            top: calc(50% - 70px);
        }
        
     }
     
}
&__heading--jumbo {
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