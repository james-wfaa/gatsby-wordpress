import React from 'react'
import {  sizes, breakpoints } from '../css-variables'


import styled from 'styled-components'

const ContentBlockList = ({className, children, paged = false}) => {

    return (
        <div className={className}>{children}
        </div>
    )
}

const StyledContentBlockList = styled(ContentBlockList)`
margin: 0 auto;
position: relative;
display: block;
width: 1080px;
> div {
    margin: 0;
    margin-bottom: ${sizes.s48};
}
> div:last-child {
    margin-bottom: 0px;
}


@media screen and ${breakpoints.tabletS} {
  }

@media screen and ${breakpoints.tabletL} {
}

@media screen and ${breakpoints.laptopS} {
}



`

export default StyledContentBlockList
