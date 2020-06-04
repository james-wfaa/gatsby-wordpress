import React from 'react'
import styled from 'styled-components'  
import { colors, sizes, breakpoints } from '../css-variables'

import PageSection from '../../components/page-sections/PageSection'



const StyledIntroRedPageSection = styled(PageSection)`
color: ${colors.titleWhite};
background-color: ${colors.bgRed};
h2 {
    color: ${colors.titleWhite};
   
}
&:after {
    background-color: ${colors.bgWhite};
}
&__heading {
    position: relative;

    &:after {
        position: absolute;
        bottom: 0;
        right: calc( 50% - ${sizes.s34} );
        height: ${sizes.s8};
        width: calc( ${sizes.s34} * 2 );
        background-color: ${colors.bgWhite};
        content: '';
    }
}

`
export default StyledIntroRedPageSection