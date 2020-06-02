import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'
import BackgroundImage from 'gatsby-background-image'

import PageSectionHeader from '../parts/PageSectionHeader'
import PageSectionButtons from '../parts/PageSectionButtons'



const PageSection = ({className, preHeading, heading, buttons, alt, bgImage, children}) => {

            
        
    const background =  typeof bgImage !== "undefined" && bgImage !== null 

    const classesList = alt ? `${className} ${className}--alt` : className
   
    return (
        <div>
            { ! background &&  (
            <div className={classesList}>
                 { heading && (
                <PageSectionHeader heading={heading} />
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
          >
            
            { heading && (
                <PageSectionHeader heading={heading} bgimage />
            )}
            <div className={`${className}__content ${className}__content--bgimage`}>
                {children}
            </div>
            { buttons && (<PageSectionButtons buttons={buttons} bgimage />
            )}

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
    background-color: ${colors.bgWhite};

   
    &--alt {
        background-color: ${colors.bgActiveGrey};
    }

    &__content {
        font-size: ${sizes.s26};
        line-height: ${sizes.s36};
        max-width: 712px;
        margin: 0 auto;
        padding: 0 ${sizes.s36};

        p:last-child {
            margin-bottom: 0;
        }
        @media screen and ${breakpoints.laptopS} {
           padding: 0;
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
