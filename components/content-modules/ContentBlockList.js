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
width: 256px;
> div {
    margin: 0;
    margin-bottom: ${sizes.s48};
}
> div:last-child {
    margin-bottom: 0px;
}


@media screen and ${breakpoints.tabletS} {
    width: 528px;
}

@media screen and ${breakpoints.laptopS} {
    width: 1080px;
}



`

export default StyledContentBlockList
