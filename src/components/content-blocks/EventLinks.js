import styled from 'styled-components'
import { mixins } from '../css-variables'
import linksvg from '../../svg/linksvg.svg'


const StyledEventLinks = styled.div`
.tribe-block {
    width: 200px;
   
    &__btn--link {
        display: flex;
        align-items: baseline;
        max-height: 50px !important;
    }
    a {
        ${mixins.a}
    }
    .gatsby-image-wrapper {
        max-height: 50px !important;
        left: -0;
        top: 32px;
        width: 40px !important;
        &:before {
            position: absolute;
            left: 0;
            top: 0;
            width: 40px;
            height: 23px;
            content: '';
            background-image: url(${linksvg});
            background-size: cover;
        }
        span {
            padding-bottom: 0;
        }
    }
    img {
        display: none;
        width: 60px !important;
        float: left;
        position: relative;
        padding-right: 20px;
        
    }
}
`
export default StyledEventLinks