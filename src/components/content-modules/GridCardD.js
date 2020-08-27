import React from 'react'
import {  sizes, breakpoints } from '../css-variables'


import styled from 'styled-components'

const GridCardD = ({className, children, popOut = false}) => {

    const popClass = popOut ? `${className}__popOut` : ''

    return (
        <div className={`${className} ${popClass}`}>{children}
        </div>
    )
}

const StyledGridCardD = styled(GridCardD)`
width: 256px;
margin: 0 auto;
display: grid;
grid-row-gap: ${sizes.s24};
> div:nth-child(n+5) {
    display: none;
}

@media screen and ${breakpoints.tabletS} {
    width: 536px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${sizes.s24};
    > div:nth-child(-n+6) {
        display: inherit;
    }
    > div:nth-child(n+7) {
        display: none;
    }
  }

@media screen and ${breakpoints.tabletL} {
    width: 816px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${sizes.s24};
    > div:nth-child(-n+9) {
        display: inherit;
    }
}

@media screen and ${breakpoints.laptopS} {
    width: 1080px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${sizes.s24};
    > div:nth-child(-n+9) {
        display: inherit;
    }
}

&__popOut{
    position: relative;
    top: -58px;
}



`

export default StyledGridCardD
