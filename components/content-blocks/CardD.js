import React from "react"
import styled from 'styled-components'
import { breakpoints } from '../css-variables'
const CardD = ({ className, children }) => {

    return (
        <div className={className}>
            {children}
        </div>
    )
}

const StyledCardD = styled(CardD)`
width: 256px;
min-height: 256px;
position: relative;
@media screen and ${breakpoints.tabletS} {
    width: 344px;
    min-height: 344px;
  }

`

export default StyledCardD