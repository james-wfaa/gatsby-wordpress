import styled from "styled-components"
import { sizes, breakpoints } from "../css-variables"

import HeroData from "./HeroData"

const StyledIntroPageSection = styled(HeroData)`
  position: relative;
  color: ${props => props.variantObject.color};
  background-color: ${props => props.variantObject.background_color};
  padding-top: 58px;
  padding-bottom: 58px;

  .excerpt {
    font-size:  ;
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
      right: calc(50% - ${sizes.s34});
      height: ${sizes.s8};
      width: calc(${sizes.s34} * 2);
      background-color: ${props => props.variantObject.background_color};
      content: "";
    }
  }
`
export default StyledIntroPageSection
