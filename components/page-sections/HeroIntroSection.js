import React from 'react'
import styled from 'styled-components'  
import { breakpoints } from '../css-variables'

import BackgroundImage from 'gatsby-background-image'
import IntroRedPageSection from './IntroRedPageSection'


const HeroIntroSection = ({className, jumbo, heroImage, heroHeading, redHeading, excerpt}) => {

    const background =  typeof heroImage !== "undefined" && heroImage !== null 

    const heroClasses = jumbo ? `${className}__hero--jumbo` : `${className}__hero`

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
                        <div className={`${className}__heading`}>{heroHeading}</div>
                    )}
                </div>
            </BackgroundImage>
            )
        }
            <div className={redboxClass}>
            
                <IntroRedPageSection excerpt={excerpt} heading={redHeading} />
            </div>
            
        </div>
    )
}

const StyledHeroIntroSection = styled(HeroIntroSection)`
position: relative;
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
&__downcarat {
    display: block;
    margin: 0 auto;
    position: relative;
    top: 15px;
    width: 50px;
    height: 15px;
    background-image: url(../../src/images/down-carat.png);
   
}
&__redbox {
    position: relative;
    &--background {
        top: -80px;
    }
}

`

export default StyledHeroIntroSection