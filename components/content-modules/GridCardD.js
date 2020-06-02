import React from 'react'
import PropTypes from 'prop-types'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'


import styled from 'styled-components'

const GridCardD = ({className, children}) => {

    return (
        <div className={className}>{children}
        </div>
    )
}

const StyledGridCardD = styled(GridCardD)`
width: 256px;
margin: 0 auto;
display: grid;
grid-row-gap: ${sizes.s24};
div:nth-child(n+5) {
    display: none;
}

@media screen and ${breakpoints.tabletS} {
    width: 712px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${sizes.s24};
    div:nth-child(-n+6) {
        display: block;
    }
    div:nth-child(n+7) {
        display: none;
    }
  }

@media screen and ${breakpoints.tabletL} {
    width: 1080px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${sizes.s24};
    div:nth-child(-n+9) {
        display: block;
    }
}



`

export default StyledGridCardD
