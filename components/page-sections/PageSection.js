import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'
import BackgroundImage from 'gatsby-background-image'

import PageSectionHeader from '../parts/PageSectionHeader'
import PageSectionButtons from '../parts/PageSectionButtons'



const PageSection = ({className, preheading, heading, excerpt, buttons, alt, bgImage, children}) => {
            
        
    const background =  typeof bgImage !== "undefined" && bgImage !== null 

    const classesList = alt ? `${className} ${className}--alt` : className
    const altClass = alt ? ` ${className}--alt` : ''
    const preheadingClass = preheading ?  ` ${className}--preheading` : ''
   
    return (
        <div>
            { ! background &&  (
            <div className={`${className} ${altClass} ${preheadingClass}` }>
                { preheading && (
                <div className={`${className}__preheading`}>{preheading}</div>
            )}
                 { heading && (
                    <div className={`${className}__heading`}>
                        <PageSectionHeader heading={heading} />
                    </div>
            )}
            { excerpt && (
                <div className={`${className}__excerpt`}  dangerouslySetInnerHTML={{ __html: excerpt }} />
            )}
            <div className={`${className}__content`}>
                {children}
            </div>
            { buttons && (<PageSectionButtons buttons={buttons} />
            )}
            </div>
           
        )}
        { background && (
            <BackgroundImage
            Tag="div"
            className={`${classesList} ${className}--bgimage`}
            fluid={bgImage.childImageSharp.fluid}
            preserveStackingContext
          ><div className="wrapper">
            { heading && (
                <PageSectionHeader heading={heading} bgimage />
            )}
             { excerpt && (
                <div className={`${className}__excerpt ${className}__excerpt--bgimage`}  dangerouslySetInnerHTML={{ __html: excerpt }} />
            )}
            <div className={`${className}__content ${className}__content--bgimage`}>
                {children}
            </div>
            { buttons && (<PageSectionButtons buttons={buttons} bgimage />
            )}
          </div>
            
           

      </BackgroundImage>
        )
        }
        
            
        </div>
    )
}

const StyledPageSection = styled(PageSection)`
    margin: 0 auto;
    position: relative;
    text-align: center;
    padding-top: 88px;
    padding-bottom: 88px;

    &--preheading {
        padding-top: 0;
    }
   

   
    &--alt {
        background-color: ${colors.bgActiveGrey};
    }
    &--bgimage {
        padding-bottom: 128px;
        /*background-color: rgba(0, 0, 0, 0.3) !important; */
        &:before,
        &:after {
            /*background-color: rgba(0, 0, 0, 0.3) !important;*/
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
       

    &__excerpt {
        font-size: ${sizes.s18};
        line-height: ${sizes.s26};
        max-width: 712px;
        margin: 0 auto;
        padding: 0 ${sizes.s36};

        p:last-child {
            margin-bottom: 0;
        }
        @media screen and ${breakpoints.laptopS} {
           padding: 0;
           font-size: ${sizes.s26};
           line-height: ${sizes.s36};
        }
        &--bgimage {
            color: ${colors.bgWhite} !important;
            
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
