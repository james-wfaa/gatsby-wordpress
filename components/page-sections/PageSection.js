import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PageSectionHeader from '../parts/PageSectionHeader'
import PageSectionButtons from '../parts/PageSectionButtons'

import { colors, sizes, breakpoints } from '../css-variables'

const PageSection = ({className, preHeading, heading, buttons, alt, bgImage, children}) => {

    const classes = alt ? `${className} ${className}--alt` : className
    return (
        <div className={classes}>
             <PageSectionHeader heading={heading} />
             <div className={`${className}__content`}>
                {children}
             </div>
             <PageSectionButtons buttons={buttons} />
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
