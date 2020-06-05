import styled from 'styled-components'  
import { colors, sizes } from '../css-variables'

import PageSection from '../../components/page-sections/PageSection'



const StyledIntroRedPageSection = styled(PageSection)`
position: relative;
color: ${colors.titleWhite};
background-color: ${colors.bgRed};
padding-top: 88px;
margin-top: 80px;
&:before {
    position: absolute;
    top: -80px;
    left: 0;
    height: 80px;
    width: calc(100% - 122px);
    background-color: ${colors.bgRed};
    opacity: 0.7;

    content: url(/src/svg/down-carat.svg);

}
&:after {
    position: absolute;
    top: -80px;
    right: -45px;
    height: 80px;
    width: 222px;
    content: '';
    background-color: ${colors.bgRed} !important;
    transform: skew(135deg);
 

}
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