import styled from 'styled-components'  
import { colors, sizes, breakpoints } from '../css-variables'

import PageSection from '../page-sections/PageSection'



const StyledIntroRedPageSection = styled(PageSection)`
position: relative;
color: ${colors.titleWhite};
background-color: ${colors.bgRed};
padding-top: 88px;

h2 {
    color: ${colors.titleWhite};
   
}
&__excerpt {
    font-size: ${sizes.s24};
    line-height: ${sizes.s36};
    max-width: 896px;

    @media screen and ${breakpoints.laptopS} {
        font-size: ${sizes.s32};
        line-height: ${sizes.s50};

     }

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