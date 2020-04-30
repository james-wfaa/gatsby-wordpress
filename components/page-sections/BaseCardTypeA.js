import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const PageSection = ({className, preHeading, heading, postHeading, excerpt, content, ctaSection}) => {


    return (
        <div className={className}>
            <h2>{heading}</h2>
            <div>{content}</div>
        </div>
    )
}

const StyledPageSection = styled(PageSection)`
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
`

PageSection.propTypes = {
    preHeading: PropTypes.string,
    heading: PropTypes.string,
    postHeading: PropTypes.string,
    excerpt: PropTypes.string,
    content: PropTypes.string,
    ctaSection: PropTypes.string
  }

  export default StyledPageSection
