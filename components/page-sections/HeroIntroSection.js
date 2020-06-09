import React from 'react'
import styled from 'styled-components'  
import { breakpoints, sizes, fonts, colors } from '../css-variables'
import BackgroundImage from 'gatsby-background-image'
import IntroRedPageSection from './IntroRedPageSection'


const HeroIntroSection = ({className, jumbo, heroImage, heroHeading, redHeading, excerpt}) => {

    const background =  typeof heroImage !== "undefined" && heroImage !== null 

    const heroClasses = jumbo ? `${className}__hero ${className}__hero--jumbo` : `${className}__hero`
    const headingClasses = jumbo ? `${className}__heading ${className}__heading--jumbo` : `${className}__heading`

    const redboxClass = background ? `${className}__redbox ${className}__redbox--background` : `${className}__redbox`

    return (
        <div className={className}>
            { background && (
            <BackgroundImage
            Tag="div"
            className={heroClasses}

            fluid={heroImage.childImageSharp.fluid}
            preserveStackingContext
             >
                 <div className="wrapper">
                    { heroHeading && (
                        <div className={headingClasses} dangerouslySetInnerHTML={{ __html: heroHeading }} />
                    )}
                </div>
            </BackgroundImage>
            )
        }
            <a  className={`${className}__downscroll`} href={`#${className}__downscroll`} title="Scroll down to content"><div>down</div></a>
            <div className={redboxClass}>
                <a className="downanchor" name={`${className}__downscroll`}>&nbsp;</a>
                <IntroRedPageSection excerpt={excerpt} heading={redHeading} />
            </div>
            
        </div>
    )
}

const StyledHeroIntroSection = styled(HeroIntroSection)`
position: relative;
scroll-behavior: smooth;
margin-bottom: -80px;

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
}

`

export default StyledHeroIntroSection