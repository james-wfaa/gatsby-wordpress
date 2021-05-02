import styled from 'styled-components'
import { mixins } from '../css-variables'
import linksvg from '../../svg/linksvg.svg'


const StyledEventLinks = styled.div`
.tribe-block {
    width: 200px;
    display: flex;
    flex-direction: column;
   
    &__btn--link {
        display: flex;
        align-items: baseline;
        max-height: 50px !important;
    }
    a {
        ${mixins.a}
    }
    .gatsby-image-wrapper,
    .inline-gatsby-image-wrapper {
        max-height: 50px !important;
        left: 10px;
        top: 2px;
        //width: 40px !important;
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
        //display: none;
        margin-bottom: 10px;
        width: 60px !important;
        float: left;
        position: relative;
        padding-right: 20px;
        
    }
}
`
export default StyledEventLinks