import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const PageSection = ({className, children}) => {


    return (
        <div className={className}>{children}
        </div>
    )
}

const StyledPageSection = styled(PageSection)`
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
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
