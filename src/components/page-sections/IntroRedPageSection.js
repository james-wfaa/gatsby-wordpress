import styled from 'styled-components'  
import { colors, sizes, breakpoints } from '../css-variables'

import PageSection from '../page-sections/PageSection'



const StyledIntroRedPageSection = styled(PageSection)`
position: relative;
color: ${colors.titleWhite};
background-color: ${colors.bgRed};
padding-top: 58px;
padding-bottom: 58px;


.excerpt {
    font-size: ${sizes.s24};
    line-height: ${sizes.s36};
    max-width: 896px;

    @media screen and ${breakpoints.laptopS} {
        font-size: ${sizes.s32};
        line-height: ${sizes.s50};

     }

}

.heading {
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