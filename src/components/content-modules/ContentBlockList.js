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
> div {
    margin: 0 auto ${sizes.s48};
    margin-bottom: ${sizes.s48};
}
> div:last-child {
    margin-bottom: 0px;
}

`

export default StyledContentBlockList
