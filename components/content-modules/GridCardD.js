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
Background-color: black;
margin-right: ${sizes.s24};
margin-left: ${sizes.s24};
width: 256px;



`

export default StyledGridCardD
